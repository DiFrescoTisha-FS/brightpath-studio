// backend/services/wordpress.service.js

const axios = require('axios');
require('dotenv').config();

// This function securely fetches data from your WordPress backend.
const fetchWordPressData = async (endpoint) => {
  try {
    // This is the crucial line: correctly combines the base URL from the .env file with the endpoint.
    const fullUrl = `${process.env.WORDPRESS_API_URL}/wp-json/${endpoint}`;
    
    console.log(`Attempting to fetch from: ${fullUrl}`);
    
    const response = await axios.get(fullUrl, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`brightpath-user-name:${process.env.WORDPRESS_APP_PASSWORD}`).toString('base64')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from WordPress:`, error.message);
    throw new Error('Failed to fetch data from WordPress.');
  }
};

module.exports = {
  fetchWordPressData,
};