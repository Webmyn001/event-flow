import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaGraduationCap,
  FaRocket,
  FaHeart
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Platform Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Physics Learning Platform
              </h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Dedicated to providing quality physics education for NTI, IJMBE, and JUPEB students 
              through accessible materials, interactive classes, and expert guidance.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="bg-slate-700 hover:bg-blue-600 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-sky-500 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-pink-600 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-blue-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  Classroom Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group hover:transform hover:translate-x-1 transition-transform duration-300">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <FaEnvelope className="text-blue-400 text-lg" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <a href="mailto:samsonlekan17@gmail.com" className="text-white hover:text-blue-300 transition-colors duration-300">
                    samsonlekan17@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:transform hover:translate-x-1 transition-transform duration-300">
                <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaPhone className="text-green-400 text-lg" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Phone 1</p>
                  <a href="tel:08127555373" className="text-white hover:text-green-300 transition-colors duration-300">
                    08127555373
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:transform hover:translate-x-1 transition-transform duration-300">
                <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <FaPhone className="text-purple-400 text-lg" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Phone 2</p>
                  <a href="tel:08033269810" className="text-white hover:text-purple-300 transition-colors duration-300">
                    08033269810
                  </a>
                </div>
              </li>
              {/* Address - Uncomment if needed */}
              {/* <li className="flex items-start gap-3 group hover:transform hover:translate-x-1 transition-transform duration-300">
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-orange-400 text-lg" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Location</p>
                  <span className="text-white">Education District, Lagos, Nigeria</span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Physics Learning Platform. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-1 flex items-center justify-center md:justify-start gap-2">
              Designed with <FaHeart className="text-red-400 animate-pulse" /> for NTI, IJMBE & JUPEB Students
            </p>
          </div>
          
          <div className="flex items-center gap-2 mb-3 bg-slate-700/50 px-4 py-2 rounded-full">
            <FaRocket className="text-blue-400 text-sm" />
            <span className="text-slate-300 text-sm">Empowering Future Scientists</span>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute  bottom-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-12"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-slate-700"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              className="fill-slate-600"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-slate-500"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;