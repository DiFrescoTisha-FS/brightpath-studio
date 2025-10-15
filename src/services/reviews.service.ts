// src/services/api/reviews.service.ts
import axios from 'axios';
import { WpReviewPost, Review } from '@/types'; // Import the corrected types

// Assuming your backend server is running on a specific port, e.g., 5001
const API_URL = 'http://localhost:5001/api/reviews'; 

export const fetchReviews = async (): Promise<Review[]> => {
  try {
    const response = await axios.get<WpReviewPost[]>(API_URL);
    return response.data.map((review) => ({
      rating: review.acf.rating,
      author: review.acf.reviewer_name,
      quote: review.acf.review_text,
      photoUrl: review.acf.client_headshot.url,
      reviewDate: review.acf.review_date,
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Failed to fetch reviews.');
  }
};