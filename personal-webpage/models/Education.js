const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  gradYear: Number,
  description: String
});

module.exports = mongoose.model('Education', educationSchema);
