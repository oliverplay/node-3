// Import the Contact model from the '../../models' directory
const { Contact } = require("../../models");

// Service function for retrieving all contacts
const getAllContacts = async () => {
  try {
    // Use the Contact model to find all contacts in the database
    const data = await Contact.find({});

    // Return the retrieved contacts data
    return data;
  } catch (error) {
    // If an error occurs during the database operation, log the error message
    console.log(error.message);
  }
};

// Export the 'getAllContacts' service function to be used in other parts of the application
module.exports = getAllContacts;
