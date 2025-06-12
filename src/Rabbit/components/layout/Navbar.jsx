import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Benefits', path: '#benefits' },
  ];

  return (
    <nav className="bg-emerald-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl"
            >
              Toheeb Rabbitry
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <NavLink 
                key={link.name}
                to={link.path}
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-emerald-800' 
                      : 'hover:bg-emerald-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/login" 
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Classroom Login
            </NavLink>
            {/* <NavLink 
              to="/dashboard" 
              className="ml-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Owner Dashboard
            </NavLink> */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-emerald-800">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-emerald-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/login"
                className="block mt-2 bg-amber-500 text-white px-3 py-2 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Classroom Login
              </NavLink>
              {/* <NavLink
                to="/dashboard"
                className="block mt-2 bg-purple-600 text-white px-3 py-2 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Owner Dashboard
              </NavLink> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;