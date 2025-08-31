// components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Optional: Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optional: Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-indigo-700">SureSend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">
              Pricing
            </a>
            <Link to="/book" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium">
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-gray-600 block absolute h-0.5 w-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`bg-gray-600 block absolute h-0.5 w-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-gray-600 block absolute h-0.5 w-6 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
          <div className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex flex-col space-y-8">
                <Link 
                  to="/" 
                  className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors duration-300 border-b border-gray-100 pb-4"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <a 
                  href="#how-it-works" 
                  className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors duration-300 border-b border-gray-100 pb-4"
                  onClick={closeMenu}
                >
                  How It Works
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors duration-300 border-b border-gray-100 pb-4"
                  onClick={closeMenu}
                >
                  Pricing
                </a>
                <Link 
                  to="/book" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium text-center mt-4"
                  onClick={closeMenu}
                >
                  Book Now
                </Link>
              </div>
              
              <div className="mt-auto pb-8">
                <p className="text-gray-500 text-sm">© 2025 SureSend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;