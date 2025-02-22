import React from 'react'
import { FaRegCopyright, FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Footer() {
  const Year = new Date().getFullYear()
  
  return (
    <footer className="bg-[#99010e] text-white font-Poppins">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm opacity-90">
              Professional interior design solutions tailored to transform your spaces into modern, functional, and beautiful environments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
              <Link to="/Contact" className="hover:text-gray-200 transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="flex-shrink-0" />
                <a href="tel:+2349036918823" className="hover:text-gray-200 transition-colors">
                  +234 903 691 8823
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="flex-shrink-0" />
                <a href="mailto:aidconcepts01@gmail.com" className="hover:text-gray-200 transition-colors">
                  aidconcepts01@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <FaFacebook size={20} aria-label="Facebook" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <FaTwitter size={20} aria-label="Twitter" />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <FaInstagram size={20} aria-label="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 pt-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            <FaRegCopyright className="mt-0.5" />
            <span>{Year} Ayoola Interior Design Ltd.</span>
          </div>
          <p className="text-sm opacity-80">RC Number: 81107020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer