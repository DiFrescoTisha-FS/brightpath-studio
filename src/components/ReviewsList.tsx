import React, { useState, useEffect } from 'react';

// Define the TypeScript interface for a review object
// This matches the expected structure from WordPress ACF (Advanced Custom Fields)
interface Review {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    client_name: string;
    client_company?: string;
    review_text: string;
    rating: number;
    client_photo?: string;
  };
}

const ReviewsList: React.FC = () => {
  // State management for reviews data, loading state, and error handling
  const [reviews, setReviews] = useState<Review[]>([]); // Array to store fetched reviews
  const [loading, setLoading] = useState<boolean>(true); // Boolean to track loading state
  const [error, setError] = useState<string | null>(null); // String to store error messages

  // useEffect hook to fetch reviews data when component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true); // Set loading to true before making API call
        setError(null); // Clear any previous errors
        
        // Replace this URL with your actual WordPress API endpoint
        // Example: 'https://your-wordpress-site.com/wp-json/wp/v2/reviews'
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform the placeholder data to match our review structure
        // In a real implementation, this transformation wouldn't be needed
        const transformedData: Review[] = data.map((item: any, index: number) => ({
          id: item.id,
          title: {
            rendered: `Review ${index + 1}`
          },
          acf: {
            client_name: `Client ${index + 1}`,
            client_company: index % 2 === 0 ? `Company ${index + 1}` : undefined,
            review_text: item.body.substring(0, 200) + '...',
            rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5
            client_photo: undefined
          }
        }));
        
        setReviews(transformedData);
      } catch (err) {
        // Handle any errors that occur during the fetch operation
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        // Always set loading to false when the operation completes
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means this effect runs once when component mounts

  // Function to render star ratings based on the rating number
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-[#F2C94C]' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F2C94C] mx-auto mb-4"></div>
          <p className="text-[#1A2238] font-lato text-lg">Loading reviews...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#F2C94C] text-[#1A2238] font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Main component render - displays the reviews in a responsive grid
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Main container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1A2238] mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            See what our clients have to say about working with BrightPath Web Studio
          </p>
        </div>

        {/* Reviews grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              {/* Review card header with client info */}
              <div className="flex items-center mb-4">
                {/* Placeholder for client photo */}
                <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1A2238] font-bold text-lg">
                    {review.acf.client_name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-[#1A2238] text-lg">
                    {review.acf.client_name}
                  </h3>
                  {review.acf.client_company && (
                    <p className="text-gray-600 font-lato text-sm">
                      {review.acf.client_company}
                    </p>
                  )}
                </div>
              </div>

              {/* Star rating display */}
              <div className="flex items-center mb-3">
                {renderStars(review.acf.rating)}
                <span className="ml-2 text-gray-600 font-lato text-sm">
                  ({review.acf.rating}/5)
                </span>
              </div>

              {/* Review text content */}
              <p className="text-gray-700 font-lato leading-relaxed mb-4">
                "{review.acf.review_text}"
              </p>

              {/* Review footer with subtle styling */}
              <div className="border-t border-gray-100 pt-3">
                <p className="text-gray-500 font-lato text-xs">
                  Verified Client Review
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no reviews are found */}
        {reviews.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600 font-lato text-lg">
              No reviews available at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsList;