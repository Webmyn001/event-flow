// components/ParticipantForm.js
import { useState } from 'react';
import axios from 'axios';
import Image from "../Image/Masjid-rahman.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faVenusMars, faBriefcase, faEnvelope, 
  faPhone, faHome, faPaperclip, faComments
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function ParticipantForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    occupation: '',
    email: '',
    whatsappNumber: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mosque-two.vercel.app/api/participant/post', formData);
      alert('Registration successful!');
      setFormData({
        fullName: '',
        gender: '',
        occupation: '',
        email: '',
        whatsappNumber: '',
        address: '',
      });
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-4 bg-white rounded-lg shadow-md font-sans">
      {/* Header Image */}
      <div className="mb-6">
        <img 
          src={Image} 
          alt="Masjid Rahman" 
          className="w-full  object-cover rounded-lg"
        />
      </div>

      {/* Payment Proof Section */}
      <div className="mb-8 text-center bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">
          <FontAwesomeIcon icon={faPaperclip} className="mr-2 text-blue-600" />
          Submit Payment Proof
        </h3>
        <a 
          href="https://wa.me/07064989803" 
          className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
          Send via WhatsApp
        </a>
      </div>

      {/* Registration Form */}
      <h2 className="text-3xl font-bold mb-6 font-Outfit text-center text-[#004D01]">
        I'TIKAF REGISTRATION FORM 
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-[#004D01]" />
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#004D01]"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <FontAwesomeIcon icon={faVenusMars} className="mr-2 text-[#004D01]" />
            Gender
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Occupation */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-[#004D01]" />
            Occupation
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#004D01]" />
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#004D01]" />
              WhatsApp Number
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-[#004D01]"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <FontAwesomeIcon icon={faHome} className="mr-2 text-[#004D01]" />
            Residential Address
          </label>
          <textarea
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
            rows="4"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#004D01] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3b813c]  transition-colors flex items-center justify-center"
        >
          Complete Registration
        </button>

        {/* Contact Enquiry */}
        <div className="text-center mt-6">
          <h3 className="text-gray-600 mb-2">
            Need Assistance? 
          </h3>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-[#004D01] text-white px-5 py-2 rounded-lg hover:bg-[#3b813c] transition-colors"
          >
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            Contact Our Support Team Here
          </Link>
        </div>
      </form>
    </div>
  );
}