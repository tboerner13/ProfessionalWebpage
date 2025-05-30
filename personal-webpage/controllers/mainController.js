const Project = require('../models/Project');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const ContactMessage = require('../models/ContactMessage');

module.exports = {
  getHome: (req, res) => {
    res.render('home', { title: 'Home' });
  },

  getProjects: async (req, res) => {
    try {
      const projects = await Project.find(); // Adjust if using static data
      res.render('projects', { title: 'Projects', projects });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error loading projects');
    }
  },

  getEducation: async (req, res) => {
    try {
      const education = await Education.find();
      res.render('education', { title: 'Education', education });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error loading education');
    }
  },

  getSkills: async (req, res) => {
    try {
      const skills = await Skill.find();
      res.render('skills', { title: 'Skills', skills });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error loading skills');
    }
  },

  getContact: (req, res) => {
    res.render('contact', { title: 'Contact', successMessage: null, errorMessage: null });
  },
  

  submitContactForm: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      await ContactMessage.create({ name, email, message });
      res.render('contact', {
        title: 'Contact',
        successMessage: 'Thank you! Your message has been sent.',
        errorMessage: null
      });
    } catch (err) {
      console.error(err);
      res.render('contact', {
        title: 'Contact',
        successMessage: null,
        errorMessage: 'Oops! Something went wrong. Please try again later.'
      });
    }
  }
};
