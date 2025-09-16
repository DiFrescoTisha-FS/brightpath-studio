import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        backgroundImage: "url('https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: filter, // Apply the animated grayscale filter here
      }}
      className="min-h-screen transition-filter duration-500 ease-in-out"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-white text-center md:text-left">
            <p className="font-lato text-lg mb-2 text-gold">ABOUT ME</p>
            <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">TISHA DI FRESCO</h1>
            <p className="font-lato text-xl mb-8 text-stone">
              Like the mountains that shape my home, my journey in web development and design is built on strong foundations and endless creativity.
            </p>
            <button className="bg-gold text-midnight font-bold font-lato py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Read My Story
            </button>
          </div>

          {/* Right Column: Placeholder for Portrait */}
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-midnight/40 backdrop-blur-md rounded-t-full border border-white/20 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-midnight">TD</span>
                </div>
                <p className="font-lato text-stone text-sm">Portrait Placeholder</p>
              </div>
            </div>
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-16 text-right' : 'pl-8 md:pl-16 text-left'}`}>
                <motion.div 
                  className="bg-midnight/60 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-xl hover:bg-midnight/70 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="font-poppins text-2xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="font-lato text-stone leading-relaxed">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-32"></div>
    </motion.div>
  );
};

export default AboutPage;