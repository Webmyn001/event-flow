// components/booking/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
    pickupCity: '',
    dropoffCity: '',
    goodsType: '',
    description: '',
    deliveryDate: '',
    notes: ''
  });

  const cities = [
    'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 
    'Benin City', 'Jos', 'Enugu', 'Abeokuta', 'Warri'
  ];

  const goodsTypes = [
    'Documents', 'Textbooks', 'Clothing', 'Electronics', 
    'Food Items', 'Personal Items', 'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would integrate with Paystack
    console.log('Form submitted:', formData);
    // Redirect to payment page
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-indigo-600 py-4 px-6">
            <h2 className="text-2xl font-bold text-white">Book a Delivery</h2>
            <p className="text-indigo-100">Fill in the details below to schedule your delivery</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sender Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Sender Information</h3>
              </div>
              
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="senderPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  id="senderPhone"
                  name="senderPhone"
                  value={formData.senderPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="08012345678"
                />
              </div>
              
              {/* Receiver Information */}
              <div className="md:col-span-2 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Receiver Information</h3>
              </div>
              
              <div>
                <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver's Full Name *
                </label>
                <input
                  type="text"
                  id="receiverName"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Jane Smith"
                />
              </div>
              
              <div>
                <label htmlFor="receiverPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver's Phone Number *
                </label>
                <input
                  type="tel"
                  id="receiverPhone"
                  name="receiverPhone"
                  value={formData.receiverPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="08087654321"
                />
              </div>
              
              {/* Delivery Details */}
              <div className="md:col-span-2 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Delivery Details</h3>
              </div>
              
              <div>
                <label htmlFor="pickupCity" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup City *
                </label>
                <select
                  id="pickupCity"
                  name="pickupCity"
                  value={formData.pickupCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select a city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="dropoffCity" className="block text-sm font-medium text-gray-700 mb-1">
                  Drop-off City *
                </label>
                <select
                  id="dropoffCity"
                  name="dropoffCity"
                  value={formData.dropoffCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select a city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="goodsType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Goods *
                </label>
                <select
                  id="goodsType"
                  name="goodsType"
                  value={formData.goodsType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select goods type</option>
                  {goodsTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Item Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Describe the items you're sending"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Any special instructions for delivery"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;