import React, {  useState } from 'react'
import { AiOutlineCopyright } from "react-icons/ai"
import { IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5'

function Footer() {
  const [date] = useState(new Date()) // Removed interval for better performance

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wide">Make It Halaal</span>
            <AiOutlineCopyright className="text-sm" />
            <span>{date.getUTCFullYear()}</span>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-1 text-sm">
            <a href="mailto:makeithalal18@gmail.com" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <IoMailOutline />
              makeithalal18@gmail.com
            </a>
            <a href="tel:+2349123476605" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <IoLogoWhatsapp />
              +234 912 347 6605
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="https://wa.me/+2349123476605" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <IoLogoWhatsapp className="text-xl" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer