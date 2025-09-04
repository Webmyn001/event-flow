// components/Dashboard.js
import React, { useState } from 'react';
import { FaArrowLeft, FaSignOutAlt, FaUser, FaLock, FaFilePdf, FaFileAudio, FaFileImage, FaGoogle, FaCalendarAlt, FaClock, FaLink, FaTrash, FaPlus } from 'react-icons/fa';

const Dashboard = ({ onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Mock login - in a real app this would connect to a backend
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  // Mock data and state for materials and meet info
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Mechanics Lecture Notes', type: 'pdf', link: '' },
    { id: 2, title: 'Electricity Audio Explanation', type: 'audio', link: '' },
    { id: 3, title: 'Waves and Optics Diagram', type: 'image', link: '' },
  ]);

  const [meetInfo, setMeetInfo] = useState({
    topic: 'Quantum Mechanics Introduction',
    time: 'September 30, 2023, 10:00 AM',
    duration: '1 hour 30 minutes',
    link: 'https://meet.google.com/abc-def-ghi'
  });

  const [newMaterial, setNewMaterial] = useState({
    title: '',
    type: 'pdf',
    link: ''
  });

  const handleAddMaterial = (e) => {
    e.preventDefault();
    setMaterials([...materials, { ...newMaterial, id: materials.length + 1 }]);
    setNewMaterial({ title: '', type: 'pdf', link: '' });
  };

  const handleDeleteMaterial = (id) => {
    setMaterials(materials.filter(material => material.id !== id));
  };

  const handleMeetInfoUpdate = (e) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    alert('Meet information updated!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <button 
            onClick={onBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUser className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h2>
            <p className="text-gray-600">Enter your credentials to access the dashboard</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            
            {error && <p className="text-red-500 mb-4 bg-red-50 py-2 px-4 rounded-lg">{error}</p>}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800">Admin Dashboard</h2>
          <p className="text-gray-600 text-center mt-2">Manage learning materials and class schedule</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Materials Management */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Manage Learning Materials</h3>
            
            <form onSubmit={handleAddMaterial} className="mb-8 bg-blue-50 p-5 rounded-xl">
              <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                <FaPlus className="mr-2 text-indigo-600" />
                Add New Material
              </h4>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={newMaterial.title}
                  onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Type</label>
                <select
                  value={newMaterial.type}
                  onChange={(e) => setNewMaterial({...newMaterial, type: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="pdf">PDF</option>
                  <option value="image">Image</option>
                  <option value="audio">Audio</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Google Drive Link</label>
                <input
                  type="url"
                  value={newMaterial.link}
                  onChange={(e) => setNewMaterial({...newMaterial, link: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Add Material
              </button>
            </form>

            <h4 className="font-medium text-lg text-gray-800 mb-4">Current Materials</h4>
            <div className="space-y-4">
              {materials.map(material => (
                <div key={material.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg mr-4 ${
                      material.type === 'pdf' ? 'bg-red-100 text-red-600' :
                      material.type === 'audio' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {material.type === 'pdf' && <FaFilePdf className="w-5 h-5" />}
                      {material.type === 'audio' && <FaFileAudio className="w-5 h-5" />}
                      {material.type === 'image' && <FaFileImage className="w-5 h-5" />}
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">{material.title}</h5>
                      <p className="text-sm text-gray-500 capitalize">{material.type}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteMaterial(material.id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
                    title="Delete material"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Google Meet Management */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Manage Google Meet Schedule</h3>
            
            <form onSubmit={handleMeetInfoUpdate} className="bg-blue-50 p-5 rounded-xl">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Class Topic</label>
                <input
                  type="text"
                  value={meetInfo.topic}
                  onChange={(e) => setMeetInfo({...meetInfo, topic: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Date & Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={meetInfo.time}
                    onChange={(e) => setMeetInfo({...meetInfo, time: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Duration</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaClock className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={meetInfo.duration}
                    onChange={(e) => setMeetInfo({...meetInfo, duration: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Google Meet Link</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLink className="text-gray-400" />
                  </div>
                  <input
                    type="url"
                    value={meetInfo.link}
                    onChange={(e) => setMeetInfo({...meetInfo, link: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Update Schedule
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;