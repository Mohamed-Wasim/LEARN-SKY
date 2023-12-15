const express = require("express");
const utils = require("../routes/apputil");
const mStudent = require("../models/mStudent");
const cLogin = require("../controllers/cLogIn");
const cCourse = require("../controllers/cCourse");
const _ = require("underscore");

/**
 * Find Student detailes
 * @param {email} oReqObj
 * @param {data handling function} callback
 * @author Durai Raja
 */
exports.findStudentsDet = async function (oReqObj) {
  let oQuery = {
    $and: []
  };
  let project = {};
  if (oReqObj.Email) {
    oQuery.$and.push({ Email: oReqObj.Email });
  }
  if (oReqObj.stuId) {
    oQuery.$and.push({ _id: oReqObj.stuId });
  }
  if (oReqObj.loginId) {
    oQuery.$and.push({ loginId: oReqObj.loginId });
  }
  if (oReqObj.password) {
    oQuery.$and.push({ password: oReqObj.password });
  }
  if (oReqObj.proj) {
    project = oReqObj.proj;
  }
  try {
    return await mStudent.find(oQuery, project).lean();
  } catch (error) {
    throw error;
  }
};

/**
 * Create new student for register
 * @param {Name,Email,password} req
 * @param {code "SAVED_SUCCESS" or code "DUP_FOUND" and saved student data} res
 */
exports.createStudent = async function (req, res) {
  try {
    const oStuObj = req?.body;

    /* Create new Student */
    const createStudent = async () => {
      if (!req.body.isGoAuth) {
        await cLogin.saveLogIn(oStuObj, function (response) {
          if (response?.status === "500") {
            res.status(500).json({
              output: utils.getApiOutput(null, response.err)
            });
          } else if (
            response?.status === "200" &&
            response?.code === "MAIL_EXIST"
          ) {
            res.status(200).json({
              output: utils.getApiOutput(null, { code: "DUP_FOUND" })
            });
          } else {
            const newStudent = new mStudent({
              Name: oStuObj.name,
              Email: oStuObj.email,
              password: oStuObj.password,
              loginId: response.loginId
            });
            newStudent
              .save()
              .then((savedStu) => {
                res.status(200).json({
                  output: utils.getApiOutput(savedStu, null)
                });
              })
              .catch((err) => {
                res.status(500).json({
                  output: utils.getApiOutput(null, err)
                });
              });
          }
        });
      }
    };
    await createStudent();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Login Student
 * @param {Email,password} req
 * @param {Response code and student detailes} res
 */
exports.logInStudent = async function (req, res) {
  let loginId = "";
  try {
    const oStuObj = req?.body;
    /* login Student */
    const getLogin = () => {
      return new Promise((resolve, reject) => {
        if (!req.body.isGoAuth) {
          cLogin.GetLogIn(oStuObj, function (response) {
            if (response?.status === "500") {
              reject(response.err);
            } else if (
              response?.status === "200" &&
              response?.code === "INVALID_LOGIN"
            ) {
              reject("INVALID_LOGIN");
            } else {
              loginId = response?.loginId;
              resolve("SUCCESS");
            }
          });
        }
      });
    };
    const loginRes = await getLogin();
    if (loginRes === "INVALID_LOGIN") {
      res.status(200).json({
        output: utils.getApiOutput(null, { code: "DUP_FOUND" })
      });
    } else if (loginRes === "SUCCESS") {
      const stuDetailes = await exports.findStudentsDet({ loginId: loginId });
      res.status(200).json({
        output: utils.getApiOutput(stuDetailes[0], null)
      });
    } else {
      res.status(500).json({
        output: utils.getApiOutput(null, loginRes)
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Add courses to cart
 * @param {email} oReqObj
 * @param {data handling function} callback
 * @author Durai Raja
 */
exports.addCourseToCart = async function (req, res) {
  try {
    await mStudent.updateOne(
      { _id: req?.body?.stuId },
      { $push: { cartCourse: req?.body?.coursId } }
    );
    res.status(200).json({
      output: utils.getApiOutput("SUCCESS", null)
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Fetch Student courses
 * @param {stuId} req
 * @param {Response courses} res
 */
exports.fetchStuCoursesEx = async function (req, res) {
  let oGrpCourses = {};
  const oReqObj = {
    stuId: req?.body?.stuId,
    proj: { RegCourse: 1 }
  };
  try {
    const stuDetailes = await exports.findStudentsDet(oReqObj);
    if (stuDetailes && stuDetailes[0]?.RegCourse?.length > 0) {
      const aCrsIds = stuDetailes[0]?.RegCourse.map((crs) => crs.crsId);
      /* fetch courses */
      const getCourses = () => {
        return new Promise((resolve, reject) => {
          cCourse.fetchCoursesIn({ aCrsIds: aCrsIds }, function (response) {
            if (response?.status === "500") {
              reject(response.err);
            } else if (
              response?.status === "200" &&
              response?.code === "NO_DATA_FOUND"
            ) {
              resolve("NO_DATA_FOUND");
            } else {
              oGrpCourses = _.groupBy(response?.data, "_id");
              resolve("SUCCESS");
            }
          });
        });
      };
      const crsRes = await getCourses();
      if (crsRes === "NO_DATA_FOUND") {
        res.status(200).json({
          output: utils.getApiOutput(null, { code: "NO_DATA_FOUND" })
        });
      } else if (crsRes === "SUCCESS") {
        const aResponse = stuDetailes[0]?.RegCourse.map((crs) => {
          if (oGrpCourses[crs._id] && oGrpCourses[crs._id][0]) {
            crs.code = oGrpCourses[crs._id][0].code;
            crs.name = oGrpCourses[crs._id][0].name;
            crs.crsPrfleImg = oGrpCourses[crs._id][0].crsPrfleImg;
            crs.desc = oGrpCourses[crs._id][0].desc;
          }
          return crs;
        });
        res.status(200).json({
          output: utils.getApiOutput(aResponse, null)
        });
      } else {
        res.status(500).json({
          output: utils.getApiOutput(null, crsRes)
        });
      }
    } else {
      res.status(200).json({
        output: utils.getApiOutput(null, { code: "NO_DATA_FOUND" })
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
