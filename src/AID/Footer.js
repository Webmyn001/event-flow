import React from 'react'
import { FaRegCopyright } from "react-icons/fa6"

function Footer() {


    const Year = new Date().getFullYear()
  return (
    <div className='bg-[#99010e] text-white font-Poppins text-sm '>
      <h3 className='flex justify-center items-center gap-x-1 py-1'> AID <FaRegCopyright/> {Year} </h3>
      <h3 className='text-center pb-1'>Ayoola Interior Design Ltd.</h3>
    </div>
  )
}

export default Footer
