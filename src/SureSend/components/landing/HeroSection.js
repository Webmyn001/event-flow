// components/landing/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../Images/map.png'

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Delivery Solutions for Students.
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Fast and affordable delivery from OAU Campus to Ibadan, Ede, Osogbo, and Lagos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/book" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Send a Package
              </Link>

                 <Link to="/tracking">
               <div className="border-2 border-white px-6 py-3 text-center rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors">
                Track Delivery
              </div>
                </Link>

             
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-2xl">
              <img 
                src={Image}
                alt="Map Routes" 
                className="rounded-2xl object-cover"
              />  
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;