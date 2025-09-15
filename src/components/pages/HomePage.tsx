import { Lightbulb, Compass, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-midnight/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img className="h-16 w-auto" src="/images/brightpath-logo-dark.png" alt="BrightPath Web Studio Logo" />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato transition-colors">Services</a>
            <a href="#" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato transition-colors">About</a>
            <a href="#" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato transition-colors">Portfolio</a>
            <Link to="/contact" className="bg-gold text-midnight font-bold font-lato px-4 py-2 rounded-md text-sm hover:bg-yellow-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section 
    className="bg-cover bg-center text-white min-h-screen flex items-center justify-center pt-20" 
    style={{ backgroundImage: "linear-gradient(rgba(26, 34, 56, 0.7), rgba(26, 34, 56, 0.7)), url('https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
  >
    <div className="bg-midnight/50 p-8 rounded-lg text-center max-w-4xl mx-auto px-4 backdrop-blur-sm">
      <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
        Guiding Your Business to Shine Bright Online
      </h1>
      <p className="text-lg md:text-xl text-stone font-lato mb-8">
        We are the beacon in the digital fog, crafting brilliant web experiences that navigate your brand to success.
      </p>
      <button className="bg-gold text-midnight font-bold font-lato py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
        Begin Your Journey
      </button>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    { 
      title: 'Web Design & Development', 
      description: 'Creating stunning, high-performance websites tailored to your brand.',
      icon: <Compass className="h-8 w-8 text-gold mb-4" />
    },
    { 
      title: 'Digital Strategy', 
      description: 'Crafting data-driven strategies to illuminate your path to growth.',
      icon: <Lightbulb className="h-8 w-8 text-gold mb-4" />
    },
    { 
      title: 'Brand Identity', 
      description: 'Building memorable brands that shine bright and stand out from the crowd.',
      icon: <Star className="h-8 w-8 text-gold mb-4" />
    }
  ];
  
  return (
    <section className="bg-stone py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-midnight mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-midnight p-8 rounded-lg shadow-xl text-white hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-gold mb-4">{service.title}</h3>
              <p className="font-lato text-stone">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandStorySection = () => (
  <section className="bg-midnight py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="w-full h-80 bg-stone/10 rounded-lg flex items-center justify-center border border-stone/20">
          <div className="text-center">
            <Lightbulb className="h-16 w-16 text-gold mx-auto mb-4" />
            <p className="text-stone font-lato">Minimalist Lighthouse Graphic</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">A Beacon in the Digital Fog</h2>
        <p className="font-lato text-stone leading-relaxed text-lg mb-6">
          In a crowded online world, clarity is everything. Like a lighthouse on a rocky coast, BrightPath provides unwavering guidance. We cut through the complexity with clear strategy and brilliant design, ensuring your business safely reaches its destination and shines for all to see.
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-1 bg-gold rounded-full"></div>
          <span className="text-gold font-lato font-bold">Illuminating Success</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-midnight border-t border-stone/20 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone font-lato">
      <div className="flex justify-center items-center space-x-2 mb-4">
        <Lightbulb className="h-6 w-6 text-gold" />
        <span className="text-white font-poppins font-bold text-lg">BrightPath Web Studio</span>
      </div>
      <p>&copy; {new Date().getFullYear()} BrightPath Web Studio LLC. All Rights Reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandStorySection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;