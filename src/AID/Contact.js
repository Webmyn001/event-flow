import React, { useEffect } from 'react'
import Image from './Image/manager5.jpg'

import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {

  
    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])

  return (
    <div >
        <h1 className='text-3xl sm:text-4xl py-3 text-[#251e3d] font-Outfit pb-6 text-center font-bold'>Contact Us</h1>
        <div className='flex text-[#251e3d] font-raleway flex-col justify-center items-center'>
            <h2 className='font-semibold font-Playwrite text-xl '>Chief Executive Officer</h2>

            <div className='md:flex md:flex-row md:gap-x-[70px] md:h-[250px] md:items-center h-[400px]  flex flex-col items-center justify-center gap-y-3'>
                <div>
                <img src={Image} alt='Manager' className='rounded-full object-cover h-[180px] w-[180px]' data-aos="zoom-in"/>
                </div>
                
                <div className='text-center md:text-left'>
                <h2 className='font-bold pb-3  text-xl'>Oladejo Abdul-Salam</h2>
                 
                 <h4 className='font-bold pt-6 sm:pt-0 py-1'>Phone:</h4>
                 <h6>(+234) 9036918823</h6>

                 <h4 className='font-bold pt-3 py-1 '>Email:</h4>
                 <h6>oladejoabdulsalam5@gmail.com</h6>
                </div>

            </div>
        </div>


        <div className='pt-4 flex font-Outfit text-[#251e3d] flex-col justify-center items-center'>
            <h1 className='font-bold  text-[18px]'>Contact Form</h1>
            <form>
              <div>
                <h6>Your Name</h6>
                <input  type='text' placeholder='Your Name' required className='border-2 rounded-lg border-[#251e3d] focus:outline-0 py-5 text-[13px] mt-1 w-[300px] h-[40px] md:w-[350px] md:h-[50px] p-1 ' />
            </div>

            <div className='mt-3'>
                <h6>Your Email</h6>
                <input  type='text' placeholder='Your Email' required className='border-2 rounded-lg border-[#251e3d] focus:outline-0  w-[300px] h-[40px] text-[13px] md:w-[350px] md:h-[50px] p-1 ' />
            </div>


            <div className='mt-3'>
                <h6>Your Message</h6>
                <textarea  type='text' placeholder='Your Message' required className='border-2 border-[#251e3d] rounded-lg focus:outline-0  w-[300px] h-[100px] text-[13px] md:w-[350px] md:h-[150px] p-1 ' />
            </div>
            </form>

        </div>

                   <div className='flex font-raleway justify-center  py-4 pb-8 items-center md:justify-center md:w-full'>
                     <button className='bg-[#251e3d] text-white hover:bg-transparent px-2 py-1 transition-colors border border-black rounded-md hover:text-[#251e3d] duration-700'>Send Message</button>
                   </div>
      
    </div>
  )
}

export default Contact
