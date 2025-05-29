import { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

const initialEventDetails = {
  name: 'Global Tech Summit 2024',
  location: 'San Francisco Convention Center',
  date: '2024-10-15',
  logo: null,
  description: 'The premier technology conference bringing together industry leaders and innovators',
};

export default function EventManagement() {
  const [eventDetails, setEventDetails] = useState(initialEventDetails);
  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventDetails({ ...eventDetails, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to update event details
    console.log('Event details updated:', eventDetails);
    alert('Event details updated successfully!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Event Details Form */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
              <input
                type="text"
                name="name"
                value={eventDetails.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={eventDetails.location}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={eventDetails.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={eventDetails.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Logo</label>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label className="flex items-center justify-center w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 bg-white cursor-pointer">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-gray-500">Upload Logo</span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-500">Recommended size: 500x500px</p>
              </div>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Update Event Details
            </button>
          </form>
        </div>
        
        {/* Event Schedule Management */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Schedule</h3>
          <EventForm />
          <div className="mt-8">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
}