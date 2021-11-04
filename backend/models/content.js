//Mongoose dependency
const mongoose = require("mongoose");

//Content Schema
const contentSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  page: {
    type: String
  },
  image: {
    type: String
  },
  createdAtDate: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Content", contentSchema);
