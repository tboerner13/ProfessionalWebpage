const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  technologies: [String],
  date: Date
});

module.exports = mongoose.model('Project', projectSchema);
