const mongoose = require("mongoose");

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("login", logInSchema);
