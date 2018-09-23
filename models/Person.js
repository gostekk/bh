const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PersonSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  eventdate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Person = mongoose.model("person", PersonSchema);