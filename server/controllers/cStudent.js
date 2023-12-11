const express = require("express");
const utils = require("../routes/apputil");
const mStudent = require("../models/mStudent");
const cLogin = require("../controllers/cLogIn");

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
                  output: utils.getApiOutput(
                    {
                      code: "SAVED_SUCCESS",
                      student: savedStu
                    },
                    null
                  )
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
  console.log("req.body", req?.body);
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
