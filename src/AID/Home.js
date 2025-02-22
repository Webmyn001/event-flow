import React, { useEffect } from 'react'
import Service from './Service'
import Works from './Works'
import Certifications from './Certifications'
import AOS from "aos"
import "aos/dist/aos.css"

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    })
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{ 
            backgroundImage: `url(https://www.floor-sanding.com/wp-content/uploads/2023/08/red-accessories-in-home-decor.jpg)`,
            backgroundBlendMode: 'multiply'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
          <div 
            className="max-w-4xl space-y-8 text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-Playwrite mb-6">
              Welcome to Ayoola Interior Design
            </h1>
            <p className="text-xl md:text-2xl font-raleway leading-relaxed">
              Transform your space into a reflection of your style with our exclusive interior decor collection
            </p>


           {
            
           /* <button 
           For Vision and Mission
              className="bg-[#99010e] text-white px-8 py-3 rounded-lg text-lg font-medium
                        hover:bg-[#7a010b] transition-colors duration-300 shadow-lg"
            >
              Explore Collections
            </button>
        */}


          </div>
        </div>
      </div>

      {/* Page Sections */}
      <div className="space-y-20 py-20">
        <Service />
        <Works />
        <Certifications />
      </div>
    </div>
  )
}

export default Home