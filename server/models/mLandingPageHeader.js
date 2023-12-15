const mongoose = require("mongoose");

const LandingPageHeader = new mongoose.Schema({
  headTitle: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  stuImg: {
    type: String,
    required: true
  },
  teachImg: {
    type: String,
    required: true
  },
  crsHeadTitl: {
    type: String,
    required: true
  },
  crsSubTitl: {
    type: String,
    required: true
  },
  showCrs: {
    type: Array,
    required: true
  },
  ctgryHeadTitl: {
    type: String,
    required: true
  },
  ctgrySubTitl: {
    type: String,
    required: true
  },
  showCtgrys: {
    type: Array,
    required: true
  },
  midBanner: {
    type: String,
    required: true
  },
  midBnrHeader: {
    type: String,
    required: true
  },
  midBnrsubHeds: {
    type: Array,
    required: true
  },
  midBnrDesc: {
    type: String,
    required: true
  },
  midBnrHeader: {
    type: String,
    required: true
  },
  stuRevwHder: {
    type: Array,
    required: true
  },
  stuRvwSub: {
    type: String,
    required: true
  },
  showReviews: {
    type: Array,
    required: true
  },
  anlytcsbadge: {
    type: Array,
    required: true
  },
  stuRvwSub: {
    type: String,
    required: true
  },
  ftrLogo: {
    type: String,
    required: true
  },
  ftrHeder: {
    type: Array,
    required: true
  },
  ftrDesc: {
    type: Array,
    required: true
  },
  ftrphone: {
    type: String,
    required: true
  },
  ftrEmail: {
    type: String,
    required: true
  },
  ftradress: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("landpagehdr", LandingPageHeader);
