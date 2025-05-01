const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  level: String, // e.g., Beginner, Intermediate, Advanced
  icon: String
});

module.exports = mongoose.model('Skill', skillSchema);
