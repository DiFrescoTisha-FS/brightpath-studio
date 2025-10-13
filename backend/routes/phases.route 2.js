// backend/routes/phases.route.js
const express = require('express');
const { fetchWordPressData } = require('../services/wordpress.service');

const router = express();

router.get('/', async (req, res) => {
  try {
    // FIX: Removed the leading slash to prevent a double slash in the URL
    const endpoint = 'wp/v2/phase-card?acf_format=standard&order=asc';
    const data = await fetchWordPressData(endpoint);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;