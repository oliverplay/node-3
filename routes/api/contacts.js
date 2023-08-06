// Import required modules and libraries
const express = require("express");
const { contacts: ctrl } = require("../../controllers"); // Import the 'contacts' controller
const { validation, ctrlWrapper } = require("../../middlewares"); // Import validation and controller wrapper middlewares
const { joiSchema } = require("../../models/contact"); // Import the Joi validation schemas for contact

// Create an Express Router instance
const router = express.Router();

// Route to get all contacts
router.get("/", ctrlWrapper(ctrl.getAllContacts));

// Route to add a new contact
router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addContact));

// Export the router to be used in other parts of the application
module.exports = router;
