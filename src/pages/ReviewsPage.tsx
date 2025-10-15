'use client'; 

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/appStore';
import { useReviews } from '@/hooks/useReviews';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import type { Review } from '@/types';

// Helper component for a single review card
const ReviewCard = ({ review }: { review: Review }) => (
  <motion.div 
    className="bg-card p-8 rounded-lg shadow-xl text-card-foreground border border-border flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {review.photoUrl && (
      <img 
        src={review.photoUrl} 
        alt={review.author} 
        className="w-20 h-20 object-cover mb-4 rounded-lg shadow-md"
      />
    )}
    
    <div className="flex items-center space-x-2 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < review.rating ? 'text-primary' : 'text-muted-foreground'}`} 
          fill="currentColor"
        />
      ))}
    </div>
    
    <p className="text-lg font-lato italic leading-relaxed mb-4 flex-grow">"{review.quote}"</p>
    
    <div className="mt-auto">
      <h4 className="font-poppins font-bold text-lg">{review.author}</h4>
      <p className="text-sm text-muted-foreground">Client Review</p>
    </div>
  </motion.div>
);

// Main ReviewsPage Component
const ReviewsPage = () => {
  const { theme } = useAppStore();
  const { reviews, loading, error } = useReviews();

  const buttonClasses = theme === 'dark' 
    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
    : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10';

  return (
    <>
      <div className="container py-16 pt-28">
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
            What Our <span className={theme === 'dark' ? 'gradient-text-dark' : 'gradient-text-light'}>Clients</span> Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hearing from our clients is the ultimate reward. Their success stories
            are the foundation of our mission to illuminate the digital world.
          </p>
        </motion.section>

        {loading && (
          <div className="text-center text-lg text-muted-foreground">Loading reviews...</div>
        )}
        
        {error && (
          <div className="text-center text-lg text-destructive">
            Failed to load reviews. Please try again later.
          </div>
        )}

        {!loading && !error && reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        )}

        {!loading && !error && reviews.length === 0 && (
          <div className="text-center text-lg text-muted-foreground">No reviews to display yet.</div>
        )}

        <div className="text-center mt-12">
          <Link to="/">
            <Button size="lg" className={buttonClasses}>
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;