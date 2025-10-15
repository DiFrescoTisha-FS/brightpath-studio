// backend/routes/reviews.route.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// The URL for your WordPress REST API endpoint for the 'reviews' custom post type.
// You will need to replace 'YOUR_WP_URL' with the URL of your WordPress site.
const WORDPRESS_API_URL = `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/reviews`;

// GET route to fetch reviews
router.get('/', async (req, res) => {
  try {
    // Make a GET request to the WordPress REST API
    const response = await axios.get(WORDPRESS_API_URL);

    // Send the data back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching reviews from WordPress:', error.message);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

module.exports = router;