import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <div className="bg-white rounded-2xl mt-[40px] shadow-lg p-8">
          <h1 className="text-3xl font-bold  text-indigo-600 mb-8 text-center">
            Contact Us
          </h1>

          <div className="space-y-6">
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-gray-50">
              <a href="https://wa.me/+2349123476605" className="flex items-center gap-4">
                <IoLogoWhatsapp className="text-3xl text-green-500" />
                <div>
                  <h2 className="font-semibold text-gray-800">WhatsApp</h2>
                  <p className="text-gray-600 text-sm">+234 912 347 6605</p>
                </div>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-gray-50">
              <a href="mailto:makeithalal18@gmail.com" className="flex items-center gap-4">
                <AiOutlineMail className="text-3xl text-red-500" />
                <div>
                  <h2 className="font-semibold text-gray-800">Email</h2>
                  <p className="text-gray-600 text-sm">makeithalal18@gmail.com</p>
                </div>
              </a>
            </motion.div>

            <div className="p-4 rounded-xl bg-gray-50">
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-3xl text-indigo-500" />
                <div>
                  <h2 className="font-semibold text-gray-800">Location</h2>
                  <p className="text-gray-600 text-sm">Ajadi Central Mosque, Ajadi, Ologuneru, Ibadan.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50">
              <div className="flex items-center gap-4">
                <BsFillTelephoneFill className="text-3xl text-indigo-500" />
                <div>
                  <h2 className="font-semibold text-gray-800">Phone Numbers</h2>
                  <p className="text-gray-600 text-sm">
                    09123476605, 08139122219, 09055022646, 09064334413, 09064631703
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact