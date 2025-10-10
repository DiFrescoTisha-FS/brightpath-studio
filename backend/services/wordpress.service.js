// backend/services/wordpress.service.js

const axios = require('axios');

// This function securely fetches data from your WordPress backend.
const fetchWordPressData = async (endpoint) => {
  try {
    console.log(`Attempting to fetch from: ${process.env.WORDPRESS_API_URL}${endpoint}`);
    const response = await axios.get(
      `${process.env.WORDPRESS_API_URL}${endpoint}`, {
        headers: {
          'Authorization': `Basic ${Buffer.from(`brightpath-user-name:${process.env.WORDPRESS_APP_PASSWORD}`).toString('base64')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from WordPress:`, error.message);
    throw new Error('Failed to fetch data from WordPress.');
  }
};

module.exports = {
  fetchWordPressData,
};