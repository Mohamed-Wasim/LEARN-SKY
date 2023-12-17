const express = require("express");
const mLanguages = require("../models/mLanguages");
const utils = require("../routes/apputil");

/**
 * Fetch search languages request function
 * @response {Response languages} res
 */
exports.fetchSearchLanguagesEx = function (req, res) {
  const olangQuery = {
    $and: []
  };
  olangQuery["$and"].push({
    $or: [
      { code: { $regex: req.body.quary, $options: "i" } },
      { name: { $regex: req.body.quary, $options: "i" } }
    ]
  });

  // Use find() with lean() and then() to handle the promise
  mLanguages
    .find(olangQuery, {}, { lean: true })
    .then((docs) => {
      res.status(200).json({ output: utils.getApiOutput(docs, null) });
    })
    .catch((err) => {
      res.status(500).json({ output: utils.getApiOutput(null, err) });
    });
};
