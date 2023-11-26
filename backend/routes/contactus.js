const express = require('express');
const router = express.Router();
const ContactUs = require('../models/ContactUs');
const { validationResult } = require('express-validator');

// ROUTE: Submit a Contact Us form - POST "/api/contact"
router.post('/', async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const contactUsEntry = new ContactUs({
      email,
      subject,
      message,
    });

    const savedContact = await contactUsEntry.save();

    res.status(201).json(savedContact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;