// Import required modules
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// Import routes
const contactsRouter = require("./routes/api/contacts");

// Create an Express application
const app = express();

// Determine the logger format based on the environment
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// Middleware: Log HTTP requests if in development mode
app.use(logger(formatsLogger));

// Middleware: Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware: Parse incoming JSON data
app.use(express.json());

// Route handling: Use the "contacts" router for "/api/contacts" endpoint
app.use("/api/contacts", contactsRouter);

// Middleware: Handle requests for routes that don't exist (404 Not Found)
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Middleware: Error handler for handling server errors (500 Internal Server Error)
app.use((err, req, res, next) => {
  // Destructure status and message properties from the error object, with default values if not provided
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// Export the Express application
module.exports = app;
