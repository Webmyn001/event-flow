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
import Image9 from './Image/design9.webp'
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
            Title : "Rainforest de Olive",
            Description : "22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage.",
            Price : " $200"
        },   

        {
            Image : Image5,
            Title : "Rainforest de Olive",
            Description : "22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage.",
            Price : " $200"
        },

        {
            Image : Image6,
            Title : "Rainforest de Olive",
            Description : "22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage.",
            Price : " $200"
        },

        {
            Image : Image8,
            Title : "Rainforest de Olive",
            Description : "22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage.",
            Price : " $200"
        },


        {
            Image : Image9,
            Title : "Rainforest de Olive",
            Description : "22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage.",
            Price : " $200"
        }
    ]
  return (
    <div>
        <h1 className='text-3xl font-Outfit text-[#251e3d] py-1 font-bold text-center'>Recent Works</h1>

      
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5  md:grid md:grid-cols-3'>
            {
                Works.map((info, i)=> <div key={i}>
              <div className='bg-white  font-raleway shadow-lg w-[300px] pb-3' data-aos="flip-up">
                <img src={info.Image} alt='ronaldo' className='rounded-t-lg hover:scale-105  transition duration-500 w-[300px] h-[300px] object-cover' />
                <h2 className='py-3  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] transition-colors duration-700 text-white font-bold text-center w-[300px]'>{info.Title}</h2>
                <p className='bg-white w-[300px] text-[#251e3d] text-center px-2 h-fit py-3 '>{info.Description}</p>
                  
            <div className='text-center text-[#251e3d]  pb-2'>
                <h1 className='font-bold'>Price</h1>
                <h1 className='font-semibold'>{info.Price}</h1>
            </div>

            <div className='flex justify-around items-center w-[300px]'>
                <div>
                    <Link to="/contact">
                <button className='bg-[#251e3d] text-white text-sm py-1 px-1 rounded-md'>Contact Us</button>
                    </Link>
                </div>
                <div className='flex gap-x-2 text-2xl'>
                    <a href='https://wa.me/+23490363918823'>
                 <h1 className='text-[#4FCE5D]'><IoLogoWhatsapp/></h1>
                    </a>
                 <h1 className='text-[#ee2a7b]'><FaInstagramSquare/></h1>
                 <h1 className='text-[#1877f2]'> <FaFacebook/></h1> 
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
         <div className='bg-white  font-raleway shadow-lg w-[300px] pb-3' data-aos="fade-left">
         <img src={info.Image} alt='recent works' className='rounded-t-lg hover:scale-105  transition duration-500 w-[300px] h-[300px] object-cover' />
       <h2 className='py-3  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] transition-colors duration-700 text-white font-bold text-center w-[300px]'>{info.Title}</h2>
       <p className='bg-white w-[300px] text-[#251e3d] text-center px-2 h-fit pt-1 '>{info.Description}</p>
     
   <div className='text-center text-[#251e3d] text-[18px]  pb-2'>
      <h1 className='font-bold'>Price</h1>
      <h1 className='font-semibold'>{info.Price}</h1>
   </div>

  <div className='flex justify-around items-center w-[300px]'>
   <div>
       <Link to="/contact">
   <button className='bg-[#251e3d] text-white text-sm py-1 px-1 rounded-md'>Contact Us</button>
       </Link>
   </div>
   <div className='flex gap-x-2 text-2xl'>
       <a href='https://wa.me/+2349036918823'>
    <h1 className='text-[#4FCE5D]'><IoLogoWhatsapp/></h1>
       </a>
    <h1 className='text-[#ee2a7b]'><FaInstagramSquare/></h1>
    <h1 className='text-[#1877f2]'> <FaFacebook/></h1> 
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
