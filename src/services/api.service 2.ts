// src/services/api.service.ts

import axios from 'axios';

// Base URL for our backend server.
// Note: This URL points to your Express server, not WordPress.
const API_BASE_URL = 'http://localhost:5001/api';

// This function fetches the flip card data from our backend server.
export const getFlipCardPhases = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/phases`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from backend:', error);
    throw new Error('Failed to fetch flip card data.');
  }
};