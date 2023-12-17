const mongoose = require("mongoose");

const LanguagesSchema = new mongoose.Schema({
  code: { type: String },
  name: { type: String }
});

module.exports = mongoose.model("languages", LanguagesSchema);
