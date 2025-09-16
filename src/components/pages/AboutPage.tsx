import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/your-mountain-background.jpg')",
          filter: 'grayscale(100%)',
        }}
        whileHover={{
          filter: 'grayscale(0%)',
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-white text-center md:text-left">
            <p className="font-lato text-lg mb-2 tracking-wider">ABOUT ME</p>
            <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
              TISHA DI FRESCO
            </h1>
            <p className="font-lato text-xl mb-8 leading-relaxed">
              Like the mountains that shape my home, my journey in web development and design is built on strong foundations and endless creativity.
            </p>
            <motion.button
              className="bg-gold text-midnight font-bold font-lato py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read My Story
            </motion.button>
          </div>

          {/* Right Column: Arched Image */}
          <div className="flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="/images/tisha-portrait-arch.png" 
                alt="Portrait of Tisha Di Fresco" 
                className="max-w-sm md:max-w-md w-full rounded-t-full shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section 
        className="relative py-20 px-8 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/your-second-background.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* The vertical timeline line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold to-transparent transform -translate-x-1/2 z-10"></div>

        <div className="container mx-auto space-y-16 relative z-20">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center w-full ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg z-30"></div>
              
              <div className={`w-5/12 ${
                index % 2 === 0 ? 'pr-8 md:pr-16 text-right' : 'pl-8 md:pl-16 text-left'
              }`}>
                <motion.div
                  className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-poppins text-2xl font-bold text-white mb-4">
                    {event.title}
                  </h3>
                  <p className="font-lato text-stone leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>
    </div>
  );
};

export default AboutPage;