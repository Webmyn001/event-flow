import React from 'react'
import { FaRegCopyright } from "react-icons/fa6"

function Footer() {


    const Year = new Date().getFullYear()
  return (
    <div className='bg-[#276221] text-white font-Poppins text-sm '>
      <h3 className='flex justify-center items-center gap-x-1 py-1'> MSSN OAU <FaRegCopyright/> {Year} </h3>
      <h3 className='text-center pb-1'>Islamic Affairs Board</h3>
    </div>
  )
}

export default Footer
