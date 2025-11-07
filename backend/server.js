// server.js
// This file has been refactored to work as a serverless function.

const express = require('express');
const cors = require('cors');
// The 'serverless-http' package wraps your Express app to make it compatible with AWS Lambda.
// It handles the translation of API Gateway requests into a format Express can understand.
const serverless = require('serverless-http'); 
require('dotenv').config();

const app = express();
const phasesRoute = require('./routes/phases.route'); 
const reviewsRoute = require('./routes/reviews.route');
const contactFormRoute = require('./api/submit-contact-form');

// === 1. Middleware Configuration ===
// We keep all our middleware setup as is. This part of the code doesn't change
// because 'serverless-http' ensures Express receives the request correctly.
app.use(cors());
app.use(express.json());

// === 2. Debugging & Routing ===
// Your routes and debugging middleware remain the same. The serverless-http
// wrapper will handle routing the request to the appropriate endpoint.
app.use((req, res, next) => {
  console.log(`[Request] Method: ${req.method} | URL: ${req.originalUrl}`);
  next();
});

app.use('/api/phases', phasesRoute); 
app.use('/api/reviews', reviewsRoute);
app.use('/api/submit-contact-form', contactFormRoute);

// Basic root route for testing.
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the BrightPath backend server!' });
});

// === 3. Export the App for Serverless ===
// We no longer use app.listen(). Instead, we export the Express application
// wrapped in the `serverless-http` handler. This allows the Lambda function
// to be invoked by an event (like an HTTP request) without running a persistent server.
module.exports.handler = serverless(app);

// === 4. Local Development Helper ===
// This block is optional but useful. It lets you run the server locally for
// development using 'node server.js' as you did before.
// We check if the process is being run with the 'serverless-offline' plugin.
// If it is, the serverless handler is used; otherwise, we listen on a local port.
// This is the most common way to get both local and serverless functionality from one file.
if (process.env.NODE_ENV !== 'production' && !process.env.IS_OFFLINE) { 
  const PORT = process.env.PORT || 3002; // Using 3002 as a standard backend port
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} 