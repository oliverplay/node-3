// Import the Contact model from the '../../models' directory
const { Contact } = require("../../models");

// Service function for adding a new contact
const addContact = async (body) => {
  try {
    // Use the Contact model to create a new contact in the database using the provided 'body' data
    const data = await Contact.create(body);

    // Return the newly created contact data
    return data;
  } catch (error) {
    // If an error occurs during the database operation, log the error message
    console.log(error.message);
  }
};

// Export the 'addContact' service function to be used in other parts of the application
module.exports = addContact;
