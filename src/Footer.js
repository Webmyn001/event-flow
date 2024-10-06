import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className='bg-[#043A3A]   h-fit pb-4  pt-4 font-Bricolage text-white'>
      <div className='flex flex-col justify-center items-center sm:flex sm:justify-center sm:items-center sm:flex-row'>
        <div>
          <h1 className='text-[18px] sm:text-xl text-center font-bold'>Contact Us</h1>
          <div className='flex gap-x-2 pt-2 items-center justify-center'>
            <h3><CiMail/> </h3>
            <h3 className='w-[250px]'>bellomuhyideen001@gmail.com</h3>
          </div>

           <div className='flex gap-x-2 pt-2 items-center justify-center'>
            <h3><FaLocationDot/> </h3>
            <h3 className='w-[250px]'>No.2 Anwo Street, Ajadi, Ologuneru, Ibadan, Oyo State, Nigeria.</h3>
          </div>

           <div className='flex gap-x-2 pt-2 items-center justify-center'>
            <h3><IoCall/> </h3>
            <h3 className='w-[250px]'>09164028709</h3>
          </div>
        </div>

        </div>
    </div>

   <div className='bg-black text-center text-sm py-1 text-white h-fit'>
    <h1>Copyright 2024</h1>
    <h1>Webmyn</h1>
   </div>
    </div>
  )
}

export default Footer
