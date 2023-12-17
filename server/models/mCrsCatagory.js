const mongoose = require("mongoose");

const CourseCatagorySchema = new mongoose.Schema({
  CatNm: { type: String },
  status: { type: String, enum: ["A", "IA"], default: "A" }
});

module.exports = mongoose.model("crsCatagory", CourseCatagorySchema);
