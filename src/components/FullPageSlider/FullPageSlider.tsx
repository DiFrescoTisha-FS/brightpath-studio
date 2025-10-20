import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

/**
 * FullPageSlider Component - mytCreative Content-Driven Hero Slider
 *
 * MENTORSHIP CONTEXT FOR DIGITAL GAP PARTICIPANTS:
 *
 * PURPOSE:
 * This component creates a full-viewport image slider with overlay content.
 * It's designed to be the hero section of a website, capturing attention
 * and guiding users to key actions.
 *
 * STATE MANAGEMENT (Zustand Philosophy):
 * We use React's built-in useState hook for local component state.
 * This follows the Zustand philosophy of keeping state close to where it's used.
 * Only lift state up to global stores when multiple components need to share it.
 *
 * MOBILE-FIRST APPROACH:
 * All base styles are for mobile devices. We then use Tailwind breakpoints
 * (sm:, md:, lg:, xl:) to enhance the experience on larger screens.
 * This ensures the best performance and UX on mobile devices first.
 *
 * ACCESSIBILITY:
 * - Semantic HTML elements (button, nav)
 * - ARIA labels for screen readers
 * - Keyboard navigation support (could be extended with useEffect)
 * - High contrast text overlays with shadows for readability
 *
 * RESPONSIVE DESIGN BREAKPOINTS:
 * - Base: Mobile (< 640px)
 * - sm: Tablet (≥ 640px)
 * - md: Small laptop (≥ 768px)
 * - lg: Desktop (≥ 1024px)
 * - xl: Large desktop (≥ 1280px)
 */

/**
 * SLIDE DATA STRUCTURE
 *
 * This interface defines the shape of each slide's data.
 * Using TypeScript interfaces ensures type safety and makes
 * the code more maintainable and self-documenting.
 */
interface Slide {
  id: number;
  image_url: string;
  headline: string;
  subheadline: string;
  cta_text: string;
}

/**
 * MOCK SLIDE DATA
 *
 * In a real application, this data would come from:
 * - A Supabase database query
 * - A CMS API response
 * - A JSON configuration file
 *
 * For now, we define it as a constant array for easy replacement.
 * Replace these placeholder images with actual image URLs in production.
 */
const SLIDES: Slide[] = [
  {
    id: 1,
    image_url: '/images/try2.jpeg',
    headline: 'Transform Your Digital Presence',
    subheadline: 'Build stunning, responsive websites that convert visitors into customers',
    cta_text: 'Get Started',
  },
  {
    id: 2,
    image_url: '/images/lh-3.jpeg',
    headline: 'Empower Your Team with Digital Skills',
    subheadline: 'Professional training programs designed to bridge the digital gap',
    cta_text: 'Learn More',
  },
  {
    id: 3,
    image_url: '/images/try7.jpeg',
    headline: 'Custom Solutions for Modern Businesses',
    subheadline: 'Tailored web applications that solve real business challenges',
    cta_text: 'View Portfolio',
  },
  {
    id: 4,
    image_url: '/images/try3.jpeg',
    headline: 'Partner with Excellence',
    subheadline: 'Join leading organizations who trust us with their digital transformation',
    cta_text: 'Contact Us',
  },
];

const FullPageSlider: React.FC = () => {
  /**
   * STATE: Current Active Slide Index
   *
   * WHY useState?
   * - This state is only needed within this component
   * - No other components need to know which slide is active
   * - Keeps the component self-contained and reusable
   *
   * We initialize to 0 to show the first slide
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * STATE: Animation Direction
   *
   * This tracks whether we're moving forward or backward
   * so we can apply appropriate transition effects
   */
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  /**
   * NAVIGATION: Go to Next Slide
   *
   * WHY useCallback?
   * - Prevents unnecessary re-renders of child components
   * - Memoizes the function so it doesn't get recreated on every render
   * - Performance optimization following React best practices
   *
   * The modulo operator (%) ensures we loop back to the first slide
   * after reaching the last one (circular navigation)
   */
  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  }, []);

  /**
   * NAVIGATION: Go to Previous Slide
   *
   * The ternary operator checks if we're at the first slide (index 0).
   * If yes, jump to the last slide; otherwise, decrement the index.
   */
  const goToPrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SLIDES.length - 1 : prevIndex - 1
    );
  }, []);

  /**
   * NAVIGATION: Go to Specific Slide (for pagination dots)
   */
  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  /**
 * STATE: Controls the automatic timer for pausing/playing the slideshow
 * Initialized to 'false' so the slider starts playing automatically.
 */
const [isPaused, setIsPaused] = useState(false);

/**
 * HANDLER: Toggles the pause state and clears/restarts the timer via useEffect.
 */
const togglePause = useCallback(() => {
  setIsPaused((prev) => !prev);
}, []);

  /**
   * AUTO-PLAY FUNCTIONALITY
   *
   * This effect creates an automatic slideshow that advances
   * every 5 seconds. It's a common pattern for hero sliders.
   *
   * WHY useEffect?
   * - Side effects (timers) must be handled in useEffect
   * - The cleanup function (return) prevents memory leaks
   * - Dependencies array [currentIndex, goToNext] ensures the timer
   *   resets when the user manually navigates
   */
  useEffect(() => {
    if (isPaused) {
        // If paused, just return and do nothing, but still clean up any existing timer
        return () => {};
    }

    const timer = setInterval(() => {
        goToNext();
    }, 5000); // 5 seconds per slide

    // Cleanup: Clear the timer when component unmounts OR when dependencies change (including 'isPaused')
    return () => clearInterval(timer);
}, [currentIndex, goToNext, isPaused]); // <-- CRITICAL: Added 'isPaused' to dependencies!

  /**
   * KEYBOARD NAVIGATION
   *
   * Accessibility enhancement: allows users to navigate with arrow keys
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Get the current slide data
  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/*
        BACKGROUND IMAGE CONTAINER

        MOBILE-FIRST STYLING:
        - h-screen: Full viewport height on all devices
        - relative: Positioning context for absolute children
        - overflow-hidden: Prevents image overflow during transitions

        WHY separate container?
        - Separates concerns: image layer vs. content layer
        - Easier to apply different transitions to each layer
        - Better performance by isolating repaints
      */}
      <div className="absolute inset-0 w-full h-full">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              backgroundImage: `url(${slide.image_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden={index !== currentIndex}
          >
            {/*
              OVERLAY FOR BETTER TEXT READABILITY

              The gradient overlay ensures text remains readable
              regardless of the background image's colors
            */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/*
        CONTENT OVERLAY

        MOBILE-FIRST LAYOUT:
        - Base: Centered content, full width with padding
        - md: Left-aligned content with max-width constraint
        - lg: Increased spacing and font sizes

        WHY z-10?
        - Ensures content appears above the background images
        - z-index creates a stacking context for layering
      */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto md:ml-auto md:mr-0">
            {/*
              ANIMATED CONTENT

              Each slide's content fades and slides in from the side
              based on the navigation direction
            */}
            <div
              key={currentSlide.id}
              className={`
                animate-in fade-in slide-in-from-${direction === 'next' ? 'left' : 'right'}-8
                duration-700
                text-center md:text-right
              `}
            >
              {/*
                HEADLINE

                MOBILE-FIRST TYPOGRAPHY:
                - Base: text-4xl (2.25rem / 36px) for mobile
                - sm: text-5xl (3rem / 48px) for tablets
                - lg: text-6xl (3.75rem / 60px) for desktops
                - xl: text-7xl (4.5rem / 72px) for large screens

                WHY these sizes?
                - Mobile screens need smaller text to fit content
                - Larger screens can handle bigger, more impactful headlines
                - Creates visual hierarchy and draws attention
              */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-400"> 
                {currentSlide.headline}
              </h1>

              {/*
                SUBHEADLINE

                RESPONSIVE SIZING:
                - Base: text-lg (1.125rem / 18px)
                - sm: text-xl (1.25rem / 20px)
                - lg: text-2xl (1.5rem / 24px)

                WHY text-white/90?
                - Slightly transparent white creates visual hierarchy
                - Primary headline is fully opaque (100%)
                - Subheadline is secondary (90% opacity)
              */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 lg:mb-10 leading-relaxed drop-shadow-lg max-w-2xl 
              mx-auto md:ml-auto md:mr-0"> 
                {currentSlide.subheadline}
              </p>

              {/*
                CALL-TO-ACTION BUTTON

                MOBILE-FIRST BUTTON SIZING:
                - Base: Full width (w-full) for mobile (easier to tap)
                - sm: Auto width (w-auto) for tablets and up
                - Padding increases on larger screens for better proportion

                INTERACTION STATES:
                - hover:bg-white hover:text-gray-900: Color inversion on hover
                - hover:scale-105: Subtle grow effect (5% larger)
                - active:scale-95: Press-down effect for tactile feedback
                - transition-all duration-300: Smooth state changes

                ACCESSIBILITY:
                - focus:outline-none focus:ring-4: Visible focus indicator
                - Keyboard users can see which element is focused
                - Meets WCAG 2.1 accessibility guidelines
              */}
<button
    className="
      w-full sm:w-auto
      px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5
      
      /* PRIMARY BRAND COLORS (Must be mapped correctly in Tailwind config) */
      bg-primary text-primary-foreground         /* Gold background, Dark Blue text */
      
      font-semibold text-base sm:text-lg lg:text-xl
      rounded-lg
      shadow-2xl
      
      /* Hover state: Uses the Dark Blue Secondary color */
      hover:bg-secondary hover:text-white hover:scale-105 
      
      active:scale-95
      transition-all duration-300
      focus:outline-none focus:ring-4 focus:ring-primary/50
    "
                onClick={() => {
                  // In production, this would navigate to a specific page or open a modal
                  console.log(`CTA clicked: ${currentSlide.cta_text}`);
                }}
                aria-label={`${currentSlide.cta_text} - ${currentSlide.headline}`}
              >
                {currentSlide.cta_text}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*
        NAVIGATION ARROWS

        RESPONSIVE POSITIONING:
        - Base: Smaller buttons (p-2) positioned with less offset
        - md: Larger buttons (p-3 to p-4) with more offset from edge

        WHY disabled state?
        - Could be used to disable looping (currently commented out)
        - Shows pattern for conditional navigation

        ACCESSIBILITY:
        - aria-label: Describes button purpose for screen readers
        - Keyboard navigation already handled in useEffect above
      */}
      <button
        onClick={goToPrev}
        className="
          absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
          bg-white/20 hover:bg-white/30 backdrop-blur-sm
          text-white
          rounded-full p-2 sm:p-3 md:p-4
          shadow-lg hover:shadow-xl
          transition-all duration-200
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-white/50
        "
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={goToNext}
        className="
          absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
          bg-white/20 hover:bg-white/30 backdrop-blur-sm
          text-white
          rounded-full p-2 sm:p-3 md:p-4
          shadow-lg hover:shadow-xl
          transition-all duration-200
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-white/50
        "
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>
      <button
  onClick={togglePause}
  className="
    absolute bottom-4 sm:bottom-6 md:bottom-8 right-1/2 translate-x-1/2 mr-24 sm:mr-32 z-20 /* Positioned to the left of the dots */
    bg-white/20 hover:bg-white/30 backdrop-blur-sm
    text-white rounded-full p-2
    shadow-lg transition-all duration-200
    hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50
  "
  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
>
  {isPaused ? (
    <Play className="w-5 h-5 fill-current" />
  ) : (
    <Pause className="w-5 h-5 fill-current" />
  )}
</button>
      

      {/*
        PAGINATION DOTS

        MOBILE-FIRST POSITIONING:
        - Base: bottom-4 (16px from bottom) for mobile
        - sm: bottom-6 (24px from bottom) for tablets
        - md: bottom-8 (32px from bottom) for desktops

        WHY pagination dots?
        - Shows total number of slides
        - Indicates current position
        - Allows direct navigation to any slide
        - Common UX pattern users recognize

        VISUAL FEEDBACK:
        - Active dot: Larger (w-3 h-3), primary color, higher opacity
        - Inactive dots: Smaller (w-2 h-2), white with transparency
        - Hover state: Slight opacity increase for affordance
      */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 sm:gap-3">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`
                rounded-full transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-white/50
                ${
                  index === currentIndex
                    ? 'w-3 h-3 sm:w-4 sm:h-4 bg-white scale-125 shadow-lg'
                    : 'w-2 h-2 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/70 hover:scale-110'
                }
              `}
              aria-label={`Go to slide ${index + 1}: ${slide.headline}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>

      {/*
        SLIDE COUNTER (OPTIONAL)

        Shows "1 / 4" style counter for users who prefer numbers
        Can be hidden on mobile to reduce clutter
      */}
      <div className="hidden sm:block absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20">
        <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg">
          {currentIndex + 1} / {SLIDES.length}
        </div>
      </div>
    </div>
  );
};

export default FullPageSlider;
