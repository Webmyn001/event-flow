import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { Oval } from 'react-loader-spinner'
import { motion } from 'framer-motion'

function Home(props) {
  const [formData, setFormData] = useState({
    Name: '',
    Image: '',
    School: '',
    AcctName: '',
    AcctNo: '',
    bankName: '',
    ShortNote: '',
    Level: '',
    WhatsappNo: ''
  })

  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files)
    if (files.length < 1) {
      setFormData(prev => ({ ...prev, Image: null }))
      alert("Please select only 1 image")
      return
    }

    const newImages = []
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          newImages.push(reader.result)
          setFormData(prev => ({ ...prev, Image: newImages }))
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post("https://test-backend-api-two.vercel.app/api/form/add", formData)
      navigate("/")
      alert("Thank you! Response received. We will get back to you on WhatsApp.")
      window.location.reload()
    } catch (err) {
      console.error("Submission error:", err)
      alert("Unable to submit form. Please complete all required fields.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white rounded-lg shadow-xl mb-6"
        >
          <h1 className="text-center text-xl mt-[50px] font-heading py-3">
            MAKE IT HALAL RAMADAN RELIEF PROGRAM
          </h1>
        </motion.div>

        {/* Announcement Banner */}
        {props.Message.slice(0,1).map((info, i) => (
          <div key={i} className="bg-white rounded-lg p-3 shadow-md mb-8">
            <p className="text-sm text-gray-600 text-center animate-pulse">
              {info.Message}
            </p>
          </div>
        ))}

        {/* Form Container */}
        <motion.div 
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Form Header */}
          <div className="bg-indigo-50 py-4 px-6">
            <h1 className="text-center text-2xl font-heading text-indigo-600">
              بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
            </h1>
            <p className="text-center text-sm text-gray-600 mt-2">
              MOTO: Without love humanity is nothing
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                <InputField 
                  label="Full Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="School"
                  name="School"
                  value={formData.School}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Level"
                  name="Level"
                  value={formData.Level}
                  onChange={handleChange}
                />
              </div>

              {/* Document Upload Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Document Upload</h3>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    School ID card & Jamb Admission Letter
                  </label>
                  <p className="text-xs text-gray-500">
                    Kindly place your ID CARD on your Jamb admission letter and snap it. (Max 2mb)
                  </p>
                  <input
                    type="file"
                    name="Image"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    required
                  />
                </div>
              </div>

              {/* Bank Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Bank Details</h3>
                <InputField
                  label="Bank Name"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                />
                <InputField
                  label="Account Name"
                  name="AcctName"
                  value={formData.AcctName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Account Number"
                  name="AcctNo"
                  value={formData.AcctNo}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <InputField
                  label="Whatsapp Number (with country code)"
                  name="WhatsappNo"
                  value={formData.WhatsappNo}
                  onChange={handleChange}
                  placeholder="e.g +2348139116879"
                  maxLength={14}
                  required
                />
              </div>

              {/* Additional Info Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Short note on why you need it
                  <textarea
                    value={formData.ShortNote}
                    name="ShortNote"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    rows="4"
                    required
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                {Loading ? (
                  <Oval 
                    height={40}
                    width={40}
                    color="#4F46E5"
                    ariaLabel="loading"
                  />
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button 
                      type="submit"
                      className="w-full max-w-xs bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 text-white font-medium py-3 px-8 rounded-full transition-all"
                    >
                      Submit Application
                    </Button>
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Reusable Input Component
const InputField = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <input
      {...props}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm transition-all"
    />
  </label>
)

export default Home