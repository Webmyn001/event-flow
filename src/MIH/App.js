import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'
import Contact from './MIH/Contact'
import Home from './MIH/Home'
import Footer from './MIH/Footer'
import Header from './MIH/header/Navbar'

function App() {
  const [Message, setMessage] = useState([])

  const getMessage = async () => {
    try {
      const res = await axios.get("https://test-backend-api-two.vercel.app/api/msg/")
      setMessage(res.data)
    } catch (err) {
      console.error("Error fetching messages:", err)
    }
  }

  useEffect(() => {
    getMessage()
  }, [])

  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Home Message={Message} />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}