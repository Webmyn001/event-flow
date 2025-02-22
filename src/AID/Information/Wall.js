import React, { useEffect } from 'react'

import Image1 from '../Image/WC1.jpg'
import Image2 from '../Image/WC2.jpg'
import Image3 from '../Image/WC3.jpg'
import Image4 from '../Image/WC4.jpg'
import Image6 from '../Image/WC6.jpg'



import { Link, useLocation } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";



function Wall() {
  const location = useLocation()
  const data = location.state


  const Works = [
    {
        Image : Image1,
        Title : "Wall Console",
    },   
    
    {
        Image : Image2,
        Title : "Wall Console",
    },
    
    {
        Image : Image3,
        Title : "Wall Console",
    },
    
    {
        Image : Image4,
        Title : "Wall Console",
    },
    
    
    {
    Image : Image6,
    Title : "Wall Console",
    },  
    
    
    
    
    
    
    
    ]
    
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      offset: 50
    })
  }, [])

  const ServiceCard = ({ image, title }) => (
    <div 
      className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 text-center space-y-3">
        <h3 className="text-xl font-bold text-[#251e3d]">{title}</h3>
        <p className="text-gray-600 text-sm">
          We specialize in creating perfect climate solutions for your space
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-[#99010e] text-white px-6 py-2 rounded-md
                     hover:bg-[#7a010b] transition-colors duration-300 text-sm
                     font-medium"
        >
          Get Consultation
        </Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 pt-10 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-[#251e3d] " data-aos="fade-down">
          {data?.Title || "Our Air Conditioning Solutions"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Works.map((work, i) => (
            <ServiceCard 
              key={`ac-${i}`}
              image={work.Image}
              title={work.Title}
              data-aos-delay={i * 50}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wall