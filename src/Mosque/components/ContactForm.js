import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mosque-two.vercel.app/api/contact/post', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        number: '',
        message: ''
      });
    } catch (error) {
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-16 bg-white rounded-lg shadow-lg font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#004D01] mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg">
          Have questions or need assistance? Our team is ready to help you.
        </p>
      </header>

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
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
            placeholder="Olanrewaju Farooq"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              placeholder="olanrewajufarooq@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#004D01]" />
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
              placeholder="+234 812 345 6789"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <FontAwesomeIcon icon={faCommentDots} className="mr-2 text-[#004D01]" />
            Your Message
          </label>
          <textarea
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004D01]"
            rows="5"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#004D01] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3c8f3d] transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 text-center text-gray-600">
        <p className="mb-2">Prefer other contact methods?</p>
        <p>
          Call us directly: <span className="font-semibold text-[#004D01]">+234 706 498 9803</span>
        </p>
      </div>
    </div>
  );
}