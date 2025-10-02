import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Review {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    reviewer_name: string;
    review_text: string;
    rating: number;
    client_headshot?: string;
    review_date: string;
  };
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-[#1A2238]' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <motion.div
      onClick={handleTap}
      className="relative w-full h-[300px] cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        variants={cardVariants}
        animate={isFlipped ? 'flipped' : 'unflipped'}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of the Card */}
        <div className="absolute inset-0 bg-white rounded-lg p-6 [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full">
            {review.acf.client_headshot ? (
              <img
                src={review.acf.client_headshot}
                alt={review.acf.reviewer_name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-[#F2C94C] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#1A2238] font-bold text-3xl">
                  {review.acf.reviewer_name.charAt(0)}
                </span>
              </div>
            )}
            <h3 className="font-poppins font-semibold text-[#1A2238] text-xl mb-2 text-center">
              {review.acf.reviewer_name}
            </h3>
            <div className="flex items-center">
              {renderStars(review.acf.rating)}
            </div>
            <p className="text-gray-500 font-lato text-sm mt-2 text-center">
              Tap to read full review
            </p>
          </div>
        </div>

        {/* Back of the Card - Now with correct content and styling */}
        <div className="absolute inset-0 bg-[#F2C94C] rounded-lg p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* This inner div counter-rotates the content */}
          <div className="flex flex-col h-full justify-between [transform:rotateY(180deg)]">
            <div className="flex items-center justify-center mb-4">
              {review.acf.client_headshot ? (
                <img
                  src={review.acf.client_headshot}
                  alt={review.acf.reviewer_name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <Quote className="h-10 w-10 text-[#1A2238]" />
              )}
            </div>
            <div className="flex-grow overflow-y-auto">
              <p className="font-lato text-[#1A2238] leading-relaxed italic">
                "{review.acf.review_text}"
              </p>
            </div>
            <div className="mt-4 text-center">
              {renderStars(review.acf.rating)}
              <p className="text-sm text-gray-700 font-lato mt-2">
                Reviewed on: {new Date(review.acf.review_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReviewCard;