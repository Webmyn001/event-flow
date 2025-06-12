import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-emerald-700 font-bold text-lg">TR</span>
              </div>
              <h3 className="text-xl font-bold">Toheeb Rabbitry</h3>
            </div>
            <p className="text-emerald-100 text-sm mb-6">
              Premium rabbit products and professional training for sustainable farming.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-emerald-600 hover:bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-5 border-b border-emerald-600 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-emerald-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm">NO.3 ANWO LANE, AJADI COMMUNITY, OLOGUNERU, IBADAN</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-emerald-300 mr-3 flex-shrink-0" />
                <span className="text-sm">09064631703</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-emerald-300 mr-3 flex-shrink-0" />
                <span className="text-sm">09134407680</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-emerald-300 mr-3 flex-shrink-0" />
                <span className="text-sm">info@toheebrabbitry.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours Column */}
          <div>
            <h4 className="text-lg font-semibold mb-5 border-b border-emerald-600 pb-2">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Public Holidays</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-5 border-b border-emerald-600 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-emerald-100 hover:text-white text-sm transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-emerald-100 hover:text-white text-sm transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-emerald-100 hover:text-white text-sm transition-colors">Services</a>
              </li>
              <li>
                <a href="#benefits" className="text-emerald-100 hover:text-white text-sm transition-colors">Benefits</a>
              </li>
        
              <li>
                <a href="/login" className="text-emerald-100 hover:text-white text-sm transition-colors">Classroom Login</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-emerald-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Toheeb Rabbitry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;