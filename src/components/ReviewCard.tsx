// src/components/ReviewCard.tsx

'use client'; 

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Review } from '@/types/index';
import { useAppStore } from '@/store/appStore';

// Helper component for a single review card
const ReviewCard = ({ review }: { review: Review }) => {
  const { theme } = useAppStore();
  return (
    <motion.div 
      className={`p-8 rounded-lg text-white border border-primary shadow-glow-primary flex flex-col items-center text-center ${theme === 'dark'? 'bg-[#1A2238]' : 'bg-[#1A2238]'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* We'll handle the photoUrl in the ReviewWidget and pass the URL directly if needed */}
      
      <div className="flex items-center space-x-2 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < review.rating ? 'text-primary' : 'text-primary'}`} 
            fill="currentColor"
          />
        ))}
      </div>
      
      <p className="text-lg font-lato italic leading-relaxed mb-4 flex-grow">"{review.quote}"</p>
      
      <div className="mt-auto">
        <h4 className="font-poppins font-bold text-lg text-primary text-shadow-md">{review.author}</h4>
        <p className="text-sm text-muted-foreground">Client Review</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;