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
                <Link to="/" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato   transition-colors">Home</Link>
                <a href="#" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato   transition-colors">Services</a>
                <Link to="/about" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato     transition-colors">About</Link>
               <Link to="/reviews" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato   transition-colors">Reviews</Link>
                <a href="#" className="text-stone hover:text-white px-3 py-2 rounded-md text-sm font-lato   transition-colors">Portfolio</a>
                <Link to="/contact" className="bg-gold text-midnight font-bold font-lato px-4 py-2 rounded-md text-sm hover:bg-yellow-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;