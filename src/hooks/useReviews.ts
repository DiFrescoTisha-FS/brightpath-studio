// In src/hooks/useReviews.ts

import { useState, useEffect } from 'react';
import { fetchReviews } from '../services/reviews.service';
import type { Review } from '../types/';

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]); // Use the Review type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (err: unknown) {
                // Type assertion to safely handle the 'unknown' error type
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error('An unknown error occurred.'));
                }
            } finally {
                setLoading(false);
            }
        };
        getReviews();
    }, []);

    return { reviews, loading, error };
};