const mongoose = require("mongoose");

const CourseTypeSchema = new mongoose.Schema({
  TypeNm: { type: String },
  status: { type: String, enum: ["A", "IA"], default: "A" }
});

module.exports = mongoose.model("courseType", CourseTypeSchema);
