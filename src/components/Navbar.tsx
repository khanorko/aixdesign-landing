import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">AIx</span>
              <span className="text-2xl font-bold text-gray-800">Design</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/#services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link to="/#about" className="text-gray-700 hover:text-primary font-medium">About</Link>
            <Link to="/#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
            <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
              <Link to="/#services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
              <Link to="/#about" className="text-gray-700 hover:text-primary font-medium">About</Link>
              <Link to="/#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
              <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md w-full text-center">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 