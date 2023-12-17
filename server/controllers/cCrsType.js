const express = require("express");
const mCrsType = require("../models/mCrsType");
const utils = require("../routes/apputil");

/**
 * Fetch course type request function
 * @response {Response course type} res
 */
exports.fetchCourseTypeEx = function (req, res) {
  const oQuery = {
    $and: [{ status: "A" }]
  };
  if (req.body.TypeNm) {
    oQuery["$and"].push({ TypeNm: req.body.TypeNm });
  }

  mCrsType
    .find(oQuery, {}, { lean: true })
    .then((docs) => {
      res.status(200).json({ output: utils.getApiOutput(docs, null) });
    })
    .catch((err) => {
      res.status(500).json({ output: utils.getApiOutput(null, err) });
    });
};

/**
 * save course type request function
 * @response {Response course type} res
 */
exports.saveCourseType = function (req, res) {
  const newCourseType = new mCrsType({
    TypeNm: req.body.TypeNm
  });
  newCourseType
    .save()
    .then((docs) => {
      res.status(200).json({ output: utils.getApiOutput(docs, null) });
    })
    .catch((err) => {
      res.status(500).json({ output: utils.getApiOutput(null, err) });
    });
};

/**
 * update course type request function
 * @response {Response course type} res
 */
exports.updateCrsType = function (req, res) {
  const oUpdtData = {
    TypeNm: req.body.TypeNm
  };
  mCrsType
    .updateOne({ _id: req.body._id }, oUpdtData)
    .then((result) => {
      res
        .status(200)
        .json({ output: utils.getApiOutput({ code: "UPDT_SUCCESS" }, null) });
    })
    .catch((err) => {
      res.status(500).json({ output: utils.getApiOutput(null, err) });
    });
};
