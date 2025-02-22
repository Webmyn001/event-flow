import React, { useEffect, useState } from 'react'

import axios from 'axios'


import AOS from "aos";
import "aos/dist/aos.css";




function Works() {

    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])
  

     const [RecentWork, setRecentWork] = useState([])

    useEffect(() => {
        axios.get("https://aid-server.vercel.app/api/advert/get").then(
        res => { 
          setRecentWork(res.data)
        } 
        ).catch (err => {
        console.log(err)
        })
        }, [])

    
  return (
    <div>
        <h1 className='text-3xl  text-[#251e3d] py-3 font-bold text-center'>Recent Works</h1>
      
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4 ">
          {RecentWork.map((info, i) => (
            <div 
              key={i} // Better to use unique ID instead of index if available
              className="group relative flex flex-col transition-shadow hover:shadow-xl"
              data-aos="fade-left"
              data-aos-delay={i * 50} // Staggered animations
            >
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={info.image} 
                  alt={info.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col flex-1 bg-white p-4">
                <h2 className="text-lg font-bold text-center text-white bg-[#99010e] transition-colors duration-300 group-hover:bg-white group-hover:text-[#99010e] py-3 border-b border-[#99010e]">
                  {info.title}
                </h2>
      
                <h2 className='text-center py-2 font-Playwrite font-semibold text-[15px] text-[#99010e]'>Price: {info.price}</h2>
      
              </div>
            </div>
          ))}
        </div>
        </div>

    </div>
  )
}

export default Works
