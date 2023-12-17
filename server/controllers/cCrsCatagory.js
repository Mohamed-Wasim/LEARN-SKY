const express = require("express");
const mCrsCatagory = require("../models/mCrsCatagory");
const utils = require("../routes/apputil");

/**
 * Fetch course catagory request function
 * @response {Response course catagory} res
 */
exports.fetchCourseCatagoryEx = function (req, res) {
  const oQuery = {
    $and: [{ status: "A" }]
  };
  if (req.body.CatNm) {
    oQuery["$and"].push({ CatNm: req.body.CatNm });
  }

  mCrsCatagory
    .find(oQuery, {}, { lean: true })
    .then((docs) => {
      res.status(200).json({ output: utils.getApiOutput(docs, null) });
    })
    .catch((err) => {
      res.status(500).json({ output: utils.getApiOutput(null, err) });
    });
};

/**
 * save course catagory request function
 * @response {Response course catagory} res
 */
exports.saveCourseCatagory = function (req, res) {
  const newCourseCat = new mCrsCatagory({
    CatNm: req.body.CatNm
  });
  newCourseCat
    .save()
    .then((docs) => {
      res.status(200).json({ output: utils.getApiOutput(docs, null) });
    })
    .catch((err) => {
      res.status(500).json({ output: utils.getApiOutput(null, err) });
    });
};

/**
 * update course catagory request function
 * @response {Response course catagory} res
 */
exports.updateCrsCatagory = function (req, res) {
  const oUpdtData = {
    CatNm: req.body.CatNm
  };
  mCrsCatagory
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
