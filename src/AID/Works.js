import React, { useEffect } from 'react'
import { FaInstagramSquare } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import Image1 from './Image/design1.jpg'
import Image2 from './Image/design2.webp'
import Image3 from './Image/design3.jpg'
import Image4 from './Image/design4.jfif'
import Image5 from './Image/design5.webp'
import Image6 from './Image/design6.jpg'
import Image7 from './Image/design7.jpg'
import Image8 from './Image/design8.webp'
import Image9 from './Image/AIDA.jpg'
import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";




function Works() {

    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])

    const Works = [
        {
            Image : Image1,
            Title : "Modern Ceiling Installation (POP)",
            Description : "",
        },   

        {
            Image : Image5,
            Title : "POP Light Design",
            Description : "",
        },

        {
            Image : Image6,
            Title : "Light Installation",
            Description : "",
        },

        {
            Image : Image8,
            Title : "Bedroom Settings (POP Design)",
            Description : "",
        },


        {
            Image : Image9,
            Title : "Double-Layered Ceiling Design",
            Description : "",
        }
    ]
  return (
    <div>
        <h1 className='text-3xl font-Outfit text-[#251e3d] py-1 font-bold text-center'>Recent Works</h1>

      
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5  md:grid md:grid-cols-3'>
        {
         Works.map((info, i)=> <div key={i}>
         <div className='bg-white  font-raleway shadow-lg w-[300px] pb-3' data-aos="flip-down">
         <img src={info.Image} alt='recent works' className='rounded-t-lg hover:scale-105  transition duration-500 w-[300px] h-[300px] object-cover' />
       <h2 className='py-3  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] transition-colors duration-700 text-white font-bold text-center w-[300px]'>{info.Title}</h2>
       <p className='bg-white w-[300px] text-[#251e3d] text-center px-2 h-fit pt-1 '>{info.Description}</p>
     
   

  <div className='flex justify-around py-2 items-center w-[300px]'>
   <div>
       <Link to="/contact">
   <button className='bg-[#251e3d] text-white text-sm py-1 px-1 rounded-md'>Contact Us</button>
       </Link>
   </div>
  
</div>

</div>
   </div>)
            }


            </div>
        </div>


         <h1 className='text-2xl pt-[30px] pb-1 text-[#251e3d] font-Outfit font-semibold text-center'>Videos</h1>
        <div className='flex justify-center pb-7 items-center'>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5  md:grid md:grid-cols-3'>

            {
         Works.map((info, i)=> <div key={i}>
         <div className='bg-white  font-raleway shadow-lg w-[300px] pb-3' data-aos="flip-down">
         <img src={info.Image} alt='recent works' className='rounded-t-lg hover:scale-105  transition duration-500 w-[300px] h-[300px] object-cover' />
       <h2 className='py-3  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] transition-colors duration-700 text-white font-bold text-center w-[300px]'>{info.Title}</h2>
       <p className='bg-white w-[300px] text-[#251e3d] text-center px-2 h-fit pt-1 '>{info.Description}</p>
     
   

  <div className='flex justify-around py-2 items-center w-[300px]'>
   <div>
       <Link to="/contact">
   <button className='bg-[#251e3d] text-white text-sm py-1 px-1 rounded-md'>Contact Us</button>
       </Link>
   </div>
  
</div>

</div>
   </div>)
            }

            
            </div>
        </div>



    </div>
  )
}

export default Works
