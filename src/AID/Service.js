import React, { useEffect } from 'react'
import Image1 from './Image/AID1.jpg'
import Image2 from './Image/AID2.jpg'
import Image3 from './Image/AIDZ.jpg'
import Image4 from './Image/AID5.jpg'
import Image5 from './Image/AID6.jpg'
import Image6 from './Image/AID6I.jpg'

import AOS from "aos";
import "aos/dist/aos.css";



function Service() {
         

    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])

    const Works = [
        {
            Image : Image1,
            Title : "Ceilings for Residential Bedrooms",
            Description : "POP ceilings for bedrooms provide a modern, customizable design that is lightweight, durable, and visually appealing.",
        },

        {
            Image : Image2,
            Title : "Ornamental Columns and Pillars",
            Description : "Ornamental columns and pillars elevate interiors with stylish designs, bringing a refined and architectural charm to any space.",
        },

        {
            Image : Image3,
            Title : "Modern Ceiling Design",
            Description : "Latest ceiling designs feature modern styles with geometric patterns, layered textures, and materials like LED lighting and POP, creating sleek, functional, and stylish interiors.",
        },


        {
            Image : Image4,
            Title : "Wall Paneling and Decoration",
            Description : "Wall paneling and decoration add elegance, depth, and warmth to interiors using materials like wood, PVC, or MDF.",
        },

        {
            Image : Image5,
            Title : "Cove Lighting Instalation",
            Description : "Cove lighting installation involves recessed fixtures that deliver soft, indirect lighting, enhancing the room with a warm and modern ambiance.",
        },

        {
            Image : Image6,
            Title : " Furniture selection",
            Description : "Furniture selection involves choosing pieces that match a space's style, functionality, and layout, ensuring comfort and cohesion in the interior.",
        }
    ]
  return (
    <div>
        <h1 className='text-3xl font-Outfit text-[#251e3d] py-1 font-bold text-center'>Our Service</h1>
         <h3 className='text-2xl py-1 font-Outfit text-[#251e3d] font-bold text-center'>We offer The Best Serivces</h3>
      
        <div className='flex justify-center pt-0 py-4 items-center'>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5  md:grid md:grid-cols-3'>

            {
                Works.map((info, i)=> <div key={i}>
              <div className=' bg-white rounded-t-md shadow-lg mt-3 w-[300px] ' data-aos="flip-right">
                <img src={info.Image} alt={info.Title} className=' w-[370px] rounded-t-lg h-[300px] hover:scale-105  transition duration-500 object-cover' />


                  
            <div className='text-center font-raleway '>
                <h1 className='font-semibold  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] text-white text-[18px] py-2 px-1'>{info.Title}</h1>
                <p className='text-[15px] text-[#251e3d] py-1  px-2'>{info.Description}</p>
            </div>

        </div>
                </div>)
            }

            
            </div>
        </div>

         
    </div>
  )
}

export default Service
