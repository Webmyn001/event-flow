import React, { useEffect } from 'react'
import Image1 from "./Image/certificate.jpg"
import Image2 from "./Image/certificate1.jpg"
import Image3 from "./Image/cert3.jpg"


import AOS from "aos";
import "aos/dist/aos.css";


function Certifications() {
    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])

  return (
    
    <div>
        <h1 className='font-bold text-3xl py-1 text-[#251e3d] font-Outfit text-center'>Certifications</h1>
        <div>
            <div className='flex flex-col sm:flex sm:flex-row gap-5 sm:gap-y-8 pt-2 py-5 justify-center items-center' data-aos="flip-down">
                <img src={Image1} alt='Certificate' className='h-[300px] w-[300px] rounded-lg object-cover hover:scale-95  transition duration-500' />
                <img src={Image2} alt='Certificate' className='h-[300px] w-[300px] rounded-lg object-cover hover:scale-95  transition duration-500' />
                <img src={Image3} alt='Certificate' className='h-[300px] w-[300px] rounded-lg object-cover hover:scale-95  transition duration-500' />

            </div>
        </div> 
    </div>
  )
}

export default Certifications
