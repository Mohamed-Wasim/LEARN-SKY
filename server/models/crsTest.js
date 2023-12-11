const mongoose = require("mongoose");

const crsTstSchema = new mongoose.Schema({
  stuId: {
    type: String,
    required: true,
  },
  crsId: {
    type: String,
    required: true,
  },
  crsPrfleImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actulFee: {
    type: Number,
    required: true,
  },
  discFee: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  learnCnt: {
    type: Number,
  },
  offers: {
    type: String,
  },
  topics: {
    type: Array,
  },
  language: {
    type: Array,
  },
});

module.exports = mongoose.model("crsTest", crsTstSchema);
