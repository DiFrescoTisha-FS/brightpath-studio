// Navbar.tsx
import { Link } from 'react-router-dom';
import { ModeToggle } from '../theme-toggle';
import { ThemeAwareLogo } from '../theme-aware-logo';
import { useAppStore } from '@/store/appStore';

const Navbar = () => {
  const theme = useAppStore(state => state.theme);

  return (
    <nav className="bg-header-bg backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <ThemeAwareLogo />
            </div>
          </div>
          <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className={`px-3 py-2 rounded-md text-sm font-lato transition-colors ${theme === 'dark' ? 'text-header-foreground-dark' : 'text-header-foreground-light'}`}>Home</Link>
                  <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-lato transition-colors ${theme === 'dark' ? 'text-header-foreground-dark' : 'text-header-foreground-light'}`}>Services</Link>
                  <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-lato transition-colors ${theme === 'dark' ? 'text-header-foreground-dark' : 'text-header-foreground-light'}`}>About</Link>
                  <Link to="/testimonial" className={`px-3 py-2 rounded-md text-sm font-lato transition-colors ${theme === 'dark' ? 'text-header-foreground-dark' : 'text-header-foreground-light'}`}>Testimonials</Link>
                  <a href="#" className={`px-3 py-2 rounded-md text-sm font-lato transition-colors ${theme === 'dark' ? 'text-header-foreground-dark' : 'text-header-foreground-light'}`}>Portfolio</a>
                  <Link to="/contact" className="bg-primary text-primary-foreground font-bold font-lato px-4 py-2 rounded-md text-sm hover:bg-yellow-400 transition-colors">Contact Us</Link>
                  <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;