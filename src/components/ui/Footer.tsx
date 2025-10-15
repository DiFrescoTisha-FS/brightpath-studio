// Footer.tsx
import { Link } from 'react-router-dom';
import { ThemeAwareLogo } from '../../components/theme-aware-logo';
import React from 'react';

// Define the props type for the Footer component
interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className="bg-deep-dark text-stone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center font-lato">
        
        {/* Logo and Business Name */}
        <div className="mb-6 flex justify-center items-center flex-col">
          <ThemeAwareLogo />
          <p className={`font-poppins text-lg ${theme === 'dark' ? 'text-white' : 'text-stone'}`}>BrightPath Web Studio, LLC</p>
        </div>

        {/* Legal & Navigation Links */}
        <div className="mb-6 flex justify-center items-center space-x-6">
          <Link to="/terms-of-service" className={`text-sm transition-colors ${theme === 'dark' ? 'hover:text-brightpath-blue' : 'hover:text-brightpath-blue'}`}>Terms of Service</Link>
          <span className="text-stone">|</span>
          <Link to="/privacy-policy" className={`text-sm transition-colors ${theme === 'dark' ? 'hover:text-brightpath-blue' : 'hover:text-brightpath-blue'}`}>Privacy Policy</Link>
          <span className="text-stone">|</span>
          <Link to="/contact" className={`text-sm transition-colors ${theme === 'dark' ? 'hover:text-brightpath-blue' : 'hover:text-brightpath-blue'}`}>Contact Us</Link>
        </div>

        {/* Contact Information */}
        <div className="text-xs space-y-1 mb-6">
            <p className={`${theme === 'dark' ? 'text-white' : 'text-stone'}`}>129 Maybin Rd, Zirconia, NC 28790</p>
            <p className={`${theme === 'dark' ? 'text-white' : 'text-stone'}`}>contact@brightpathwebstudio.com | (704) 453-3973</p>
        </div>

        {/* Copyright */}
        <p className={`${theme === 'dark' ? 'text-stone/70' : 'text-stone/70'}`}>
          &copy; {new Date().getFullYear()} BrightPath Web Studio, LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;