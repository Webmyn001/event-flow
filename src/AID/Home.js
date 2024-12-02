import React, { useEffect } from 'react'
import Service from './Service'
import Works from './Works'
import Certifications from './Certifications'


import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  
  useEffect(()=> {
    AOS.init({duration:2000})

},[])
  return (
    <div>
    <div className="object-cover  w-[100%s] h-[500px]" style={{backgroundImage: "url('https://www.floor-sanding.com/wp-content/uploads/2023/08/red-accessories-in-home-decor.jpg')"}}>
      
      <div className='flex flex-col  justify-center  items-center h-[400px]' data-aos="flip-left">
        <div className='bg-black opacity-60' >
        <div className='font-bold text-center py-2 px-2 font-outfit text-white text-xl font-Playwrite'>
        <h1 className='text-white'>Welcome to Ayooloa Interior Design.</h1>
      </div>
       <div className='text-white text-center pt-4 pb-2 px-2 w-[350px] font-semibold font-raleway text-xl'>
          <h1>Transform your space into a reflection of your style with our exclusive interior decor collection</h1>
        </div>
       </div>
      </div>
     </div> 
           <Service/> 
           <Works/>
           <Certifications/>
      
          {/* Footer Information */}
    <div className='bg-[#99010e] text-white text-[15px]'>
          <div></div>
     </div>

    </div>
  )
}

export default Home
