import React, { useEffect } from 'react'

import Image1 from '../Image/D1.jpg'
import Image2 from '../Image/D2.jpg'
import Image3 from '../Image/D3.jpg'
import Image4 from '../Image/D4.jpg'
import Image5 from '../Image/D5.webp'

import { Link, useLocation } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

function HomeDecor() {

    const location = useLocation()
    const data = location.state
    
    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])

    const Works = [
        {
            Image : Image1,
            Title : "Home Decor",
        },   

        {
            Image : Image2,
            Title : "Home Decor",
        },

        {
            Image : Image3,
            Title : "Home Decor",
        },

        {
            Image : Image4,
            Title : "Home Decor",
        },


        {
            Image : Image5,
            Title : "Home Decor",
       }
    ]
  return (
    <div>
        <h1 className='text-3xl font-Playwrite text-[#251e3d] py-3 font-bold text-center'>{data.Title}</h1>

      
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 py-4  sm:grid sm:grid-cols-2 gap-5  md:grid md:grid-cols-3'>
        {
         Works.map((info, i)=> <div key={i}>
         <div className='bg-white  font-raleway  shadow-lg w-[300px] pb-3' data-aos="fade-left">
         <img src={info.Image} alt='recent works' className='rounded-t-lg hover:scale-95  transition duration-500 w-[300px] h-[300px] object-cover' />
       <h2 className='py-3  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] transition-colors duration-700 text-white font-bold text-center w-[300px]'>{info.Title}</h2>
       <p className='bg-white w-[300px] text-sm text-[#251e3d] text-center px-2 h-fit pt-1 '>We're here to help – reach out if you're interested!</p>

  <div className='flex justify-around py-2 items-center w-[300px]'>
   <div>
       <Link to="/contact">
   <button className='bg-[#251e3d] text-white hover:bg-white hover:text-[#251e3d] hover:border-2 hover:border-[#251e3d] text-sm py-1 px-1 rounded-md'>Contact Us</button>
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


export default HomeDecor
