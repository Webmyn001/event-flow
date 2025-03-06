import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from "../Image/Logo.jpg"
import Navlinks from "./Navlinks"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={image1} 
              alt="logo" 
              className="h-12 w-12 p-1 border-2 border-indigo-500 rounded-lg"
            />
            <span className="text-xl font-bold text-indigo-600">Make It Halal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <Navlinks />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-indigo-600 hover:bg-gray-100 transition-colors"
          >
            {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg"
          >
            <ul className="px-4 py-6 space-y-4">
              <Navlinks alternative={true} handleClick={() => setOpen(false)} />
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header