import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navlinks(props) {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Contact us", link: "/contact" }
  ]

  return (
    <>
      {Links.map((link, i) => (
        <motion.li 
          key={i}
          whileHover={{ scale: 1.05 }}
          className="list-none"
          onClick={props.handleClick}
        >
          <Link
            to={link.link}
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </>
  )
}

export default Navlinks