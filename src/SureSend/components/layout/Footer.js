// components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
              <span className="text-xl font-bold">SureSend</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering excellence across campuses with speed, reliability, and secure inter-city delivery services for the academic community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full transition-colors duration-300">
                <FaFacebookF className="text-lg" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full transition-colors duration-300">
                <FaTwitter className="text-lg" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full transition-colors duration-300">
                <FaInstagram className="text-lg" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full transition-colors duration-300">
                <FaLinkedinIn className="text-lg" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/book" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Send Package
              </Link></li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Package Delivery
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Food Delivery
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Express Service
              </li>
            </ul>
          </div>
          
        
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+234 916 402 8709</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@suresend.com</span>
              </li>
            </ul>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SureSend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;