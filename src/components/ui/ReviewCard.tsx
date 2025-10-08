import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const renderStars = (rating: number, yellowStars: boolean = false) => {
    return (
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? yellowStars
                  ? 'fill-[#F2C94C] text-[#F2C94C]'
                  : 'fill-[#1A2238] text-[#1A2238]'
                : yellowStars
                  ? 'fill-gray-600 text-gray-600'
                  : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const LighthouseIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F2C94C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto"
    >
      <path d="M8 2l8 0" />
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M7 6h10l1 16H6z" />
      <path d="M9 10h6" />
      <path d="M8.5 14h7" />
      <path d="M8 18h8" />
      <path d="M2 8l3-2" />
      <path d="M22 8l-3-2" />
      <path d="M2 12l2-1" />
      <path d="M22 12l-2-1" />
    </svg>
  );

  return (
    <div
      onClick={handleCardClick}
      className="w-full h-[420px] cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT SIDE - Yellow with Midnight Blue Glow */}
        <div
          className="absolute inset-0 bg-[#F2C94C] rounded-2xl p-8 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: '0 0 30px rgba(26, 34, 56, 0.6), 0 0 60px rgba(26, 34, 56, 0.3), inset 0 0 20px rgba(26, 34, 56, 0.1)'
          }}
        >
          {/* Headshot or Initials with Glowing Border */}
          {review.acf.client_headshot ? (
            <div
              className="w-32 h-32 rounded-full mb-6 overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(26, 34, 56, 0.8), 0 0 40px rgba(26, 34, 56, 0.5)'
              }}
            >
              <img
                src={review.acf.client_headshot}
                alt={review.acf.reviewer_name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-6"
              style={{
                boxShadow: '0 0 20px rgba(26, 34, 56, 0.8), 0 0 40px rgba(26, 34, 56, 0.5)'
              }}
            >
              <span className="text-[#1A2238] font-bold text-5xl">
                {getInitials(review.acf.reviewer_name)}
              </span>
            </div>
          )}

          {/* Name */}
          <h3 className="text-[#1A2238] font-bold text-2xl text-center mb-4 px-4">
            {review.acf.reviewer_name}
          </h3>

          {/* Star Rating */}
          <div className="mb-6">
            {renderStars(review.acf.rating)}
          </div>

          {/* Call to Action */}
          <p className="text-[#1A2238] text-sm font-semibold opacity-80">
            Tap to read full review
          </p>
        </div>

        {/* BACK SIDE - Midnight Blue with Yellow Glow */}
        <div
          className="absolute inset-0 bg-[#1A2238] rounded-2xl p-8 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: '0 0 30px rgba(242, 201, 76, 0.6), 0 0 60px rgba(242, 201, 76, 0.3), inset 0 0 20px rgba(242, 201, 76, 0.1)'
          }}
        >
          <div style={{ transform: 'rotateY(180deg)' }} className="h-full flex flex-col">
            {/* Lighthouse Icon */}
            <div className="mb-6">
              <LighthouseIcon />
            </div>

            {/* Review Text */}
            <div className="flex-grow overflow-y-auto mb-6 scrollbar-thin scrollbar-thumb-[#F2C94C] scrollbar-track-transparent">
              <p className="text-white text-base leading-relaxed italic text-center">
                "{review.acf.review_text}"
              </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
              {/* Star Rating */}
              <div className="mb-3">
                {renderStars(review.acf.rating, true)}
              </div>

              {/* Reviewer Name */}
              <p className="text-[#F2C94C] font-bold text-lg text-center mb-2">
                {review.acf.reviewer_name}
              </p>

              {/* Review Date */}
              <p className="text-white text-sm text-center opacity-75">
                {formatDate(review.acf.review_date)}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewCard;
