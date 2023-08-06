// Import required modules
const mongoose = require("mongoose");
const app = require("./app");

// Destructuring environment variables with default values
const { DB_HOST, PORT = 3000 } = process.env;

// Connect to MongoDB database using mongoose
mongoose
  .connect(DB_HOST)
  .then(() => {
    // If the connection is successful, start the server to listen on the specified port
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    // If there's an error while connecting to the database, log the error message and exit the process
    console.log(error.message);
    process.exit(1);
  });
