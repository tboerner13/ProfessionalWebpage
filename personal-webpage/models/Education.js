const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  school: String,
  degree: String,
  field: String,
  startYear: Number,
  endYear: Number,
  description: String
});

module.exports = mongoose.model('Education', educationSchema);
