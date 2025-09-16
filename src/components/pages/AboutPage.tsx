/*
Role & Goal:
You are an expert frontend developer specializing in React, TypeScript, Tailwind CSS, and Framer Motion. Your task is to create a single-file React component named AboutPage.tsx. The page should feature a hero section and a scrolling timeline with a unique animation: the entire page starts in black and white and smoothly transitions to full color as the user begins to scroll. The background image should remain fixed throughout the scroll.

Technology Stack:
- Framework: React with TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion

Component Structure & Content: AboutPage.tsx
*/

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Main Page Component ---
const AboutPage = () => {
  // Framer Motion hooks to control the animation based on scroll position
  const { scrollYProgress } = useScroll();
  // As the user scrolls down the first 10% of the page, the grayscale filter will go from 100% to 0%
  const filter = useTransform(scrollYProgress, [0, 0.1], ['grayscale(100%)', 'grayscale(0%)']);

  const timelineEvents = [
    {
      title: 'The Lighthouse That Started It All',
      description: 'At my graduation, one of my instructors gifted me a lighthouse, symbolizing guidance, resilience, and perseverance. This symbol became the foundation for BrightPath Web Studio LLC.',
    },
    {
      title: 'A Journey of Dedication and Achievement',
      description: 'Graduating from Full Sail University was a defining moment in my journey. Combining creativity with technology led me to web development, and my dedication to the craft earned me the honor of class valedictorian.',
    },
    {
      title: 'My Approach',
      description: 'I believe in thoughtful design, seamless functionality, and strategic branding. A website should do more than just exist—it should engage, inspire, and convert.',
    },
  ];

  return (
    <motion.div
      style={{
        backgroundImage: "url('/images/your-autumn-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: filter, // Apply the animated grayscale filter here
      }}
      className="transition-filter duration-500 ease-in-out"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-white text-center md:text-left">
            <p className="font-lato text-lg mb-2">ABOUT ME</p>
            <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">TISHA DI FRESCO</h1>
            <p className="font-lato text-xl mb-8">
              Like the mountains that shape my home, my journey in web development and design is built on strong foundations and endless creativity.
            </p>
            <button className="bg-brightpath-red text-white font-bold font-lato py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-colors transform hover:scale-105">
              Read My Story
            </button>
          </div>

          {/* Right Column: Arched Image */}
          <div className="flex justify-center">
            {/* Assume a pre-edited PNG with a transparent background and arched top */}
            <img 
              src="/images/tisha-portrait-arch.png" 
              alt="Portrait of Tisha Di Fresco" 
              className="max-w-sm md:max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-8">
        {/* The vertical line */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/30 transform -translate-x-1/2"></div>

        <div className="container mx-auto space-y-16">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-16 text-right' : 'pl-8 md:pl-16 text-left'}`}>
                <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-lg">
                  <h3 className="font-poppins text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="font-lato text-stone">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;