const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Home route
router.get('/', mainController.getHome);

// Projects page
router.get('/projects', mainController.getProjects);

// Education page
router.get('/education', mainController.getEducation);

// Skills page
router.get('/skills', mainController.getSkills);

// Contact page
router.get('/contact', mainController.getContact);

// Contact form submission (POST)
router.post('/contact', mainController.submitContactForm);

module.exports = router;
