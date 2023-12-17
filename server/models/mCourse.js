const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  // Course code
  code: { type: String, required: true }, //course code to be unique
  name: { type: String, required: true }, // course name
  crsPrfleImg: { type: String }, //corse image
  desc: { type: String, required: true }, //course description
  crsType: { type: String, required: true, enum: ["FIX", "FLX"] }, //course type ex:FIX(Live) or FLX(Record)
  crsCat: { type: String, required: true }, //course catagory
  actulFee: { type: Number, required: true }, //actual course fees
  discFee: { type: Number, required: true }, //offer fees
  duration: { type: Number, required: true }, //course duration
  learnCnt: { type: Number }, //course learning count
  offers: { type: String }, //course offers
  topics: { type: Array }, //course toppics
  languages: { type: Array }, //course available languages
  status: { type: String, enum: ["A", "D"], default: "A" }, // Status of the course (A: Active, D: De-active)
  crsRtngs: { type: Number, min: 0, max: 5 }, //ratings
  crsReview: [
    {
      revwrId: { type: String }, //Reviwer id
      revDesc: { type: String } //review Description
    }
  ]
});

module.exports = mongoose.model("course", courseSchema);
