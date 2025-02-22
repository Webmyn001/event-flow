import React, { useEffect, useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import AOS from "aos"
import "aos/dist/aos.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import ManagerImage from './Image/manager5.jpg'

function Contact() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  })

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const Time = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      })

      await axios.post("https://aid-server.vercel.app/api/message/add", {
        ...formData,
        Time: `Submitted at: ${Time}`
      })

      alert('Thank you! Your message has been sent.')
      setFormData({ Name: '', Email: '', Message: '' })
      setTimeout(() => navigate("/"), 2000)
    } catch (err) {
      console.error(err)
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b pt-14 from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#99010e] mb-12" data-aos="fade-down">
          Get in Touch
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <img 
              src={ManagerImage} 
              alt="Manager" 
              className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-[#99010e]"
              data-aos="zoom-in"
            />
            
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-2xl font-bold text-[#99010e]">Oladejo Abdul-Salam</h2>
              <p className="text-lg text-gray-600">Chief Executive Officer</p>
              
              <div className="space-y-2">
                <ContactItem 
                  label="Phone" 
                  value="+234 903 691 8823" 
                  href="tel:+2349036918823" 
                />
                <ContactItem 
                  label="Email" 
                  value="aidconcepts01@gmail.com" 
                  href="mailto:aidconcepts01@gmail.com" 
                />
                <ContactItem 
                  label="WhatsApp" 
                  value="Chat with us" 
                  href="https://wa.me/+2349036918823"
                  icon={<IoLogoWhatsapp className="text-2xl text-[#25D366]" />}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-center text-[#99010e] mb-8" data-aos="fade-down">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              {[
                { name: 'Name', label: 'Your Name', type: 'text' },
                { name: 'Email', label: 'Your Email', type: 'email' },
                { name: 'Message', label: 'Your Message', type: 'textarea' }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#251e3d] focus:border-transparent transition-all"
                      placeholder={field.label}
                      rows="4"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#251e3d] focus:border-transparent transition-all"
                      placeholder={field.label}
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#99010e] text-white py-3 px-6 rounded-lg font-medium hover:text-[#99010e] hover:border-2 hover-border-[#99010e] hover:bg-white disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Oval height={24} width={24} color="#fff" />
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactItem = ({ label, value, href, icon }) => (
  <div className="flex items-center gap-2">
    <span className="font-semibold text-gray-700">{label}:</span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#251e3d] hover:text-[#99010e] transition-colors flex items-center gap-1"
    >
      {value} {icon}
    </a>
  </div>
)

export default Contact