const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const phasesRoute = require('./routes/phases.route'); 
const reviewsRoute = require('./routes/reviews.route');
const contactFormRoute = require('./api/submit-contact-form');

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// === NEW: Debugging Middleware ===
app.use((req, res, next) => {
  console.log(`[Request] Method: ${req.method} | URL: ${req.originalUrl}`);
  next();
});
// =================================

// Make sure this line is present and not commented out
app.use('/api/phases', phasesRoute); 
app.use('/api/reviews', reviewsRoute);
app.use('/api/submit-contact-form', contactFormRoute);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the BrightPath backend server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});