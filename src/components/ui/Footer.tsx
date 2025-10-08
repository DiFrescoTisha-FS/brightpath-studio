import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-dark text-stone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center font-lato">
        
        {/* Logo and Business Name */}
        <div className="mb-6 flex justify-center items-center flex-col">
          <img src="/images/brightpath-logo-light.png" alt="BrightPath Logo" className="h-16 w-auto mb-2" />
          <p className="font-poppins text-lg text-white">BrightPath Web Studio, LLC</p>
        </div>

        {/* Legal & Navigation Links */}
        <div className="mb-6 flex justify-center items-center space-x-6">
          <Link to="/terms-of-service" className="text-sm hover:text-brightpath-blue transition-colors">Terms of Service</Link>
          <span className="text-stone">|</span>
          <Link to="/privacy-policy" className="text-sm hover:text-brightpath-blue transition-colors">Privacy Policy</Link>
          <span className="text-stone">|</span>
          <Link to="/contact" className="text-sm hover:text-brightpath-blue transition-colors">Contact Us</Link>
        </div>

        {/* Contact Information */}
        <div className="text-xs space-y-1 mb-6">
            <p>129 Maybin Rd, Zirconia, NC 28790</p>
            <p>contact@brightpathwebstudio.com | (704) 453-3973</p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-stone/70">
          &copy; {new Date().getFullYear()} BrightPath Web Studio, LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;