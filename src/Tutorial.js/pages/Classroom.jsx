// components/ClassroomPage.js
import React, { useState } from 'react';
import { FaLock, FaGoogle, FaFilePdf, FaFileAudio, FaFileImage, FaCalendarAlt, FaClock, FaLink, FaArrowRight } from 'react-icons/fa';

const ClassroomPage = ({ onBack }) => {
  const [accessCode, setAccessCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  // In a real application, this would be verified against a backend
  const validCodes = ['NTI2023', 'IJMBE2023', 'PHYSICSLEARN'];

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (validCodes.includes(accessCode.toUpperCase())) {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid access code. Please try again.');
    }
  };

  // Mock data - in a real app this would come from an API
  const materials = [
    { id: 1, title: 'Mechanics Lecture Notes', type: 'pdf', link: 'https://drive.google.com/file/d/12345/view' },
    { id: 2, title: 'Electricity Audio Explanation', type: 'audio', link: 'https://drive.google.com/file/d/67890/view' },
    { id: 3, title: 'Waves and Optics Diagram', type: 'image', link: 'https://drive.google.com/file/d/54321/view' },
  ];

  const classSchedule = {
    topic: 'Quantum Mechanics Introduction',
    time: 'September 30, 2023, 10:00 AM',
    duration: '1 hour 30 minutes',
    meetLink: 'https://meet.google.com/abc-def-ghi'
  };

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLock className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Classroom Access</h2>
            <p className="text-gray-600">Enter your access code to continue</p>
          </div>
          <form onSubmit={handleVerifyCode}>
            <div className="mb-6">
              <label htmlFor="accessCode" className="block text-gray-700 font-medium mb-2">Access Code</label>
              <input
                type="password"
                id="accessCode"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your code"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4 bg-red-50 py-2 px-4 rounded-lg">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Verify and Enter
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-6 text-center">
            Don't have an access code? Please contact your instructor to receive one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Welcome to Your Physics Classroom</h2>
          <p className="text-gray-600 text-lg">Access your learning materials and class schedule below.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Materials Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Learning Materials</h3>
            <div className="space-y-4">
              {materials.map(material => (
                <div key={material.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      material.type === 'pdf' ? 'bg-red-100 text-red-600' :
                      material.type === 'audio' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {material.type === 'pdf' && <FaFilePdf className="w-5 h-5" />}
                      {material.type === 'audio' && <FaFileAudio className="w-5 h-5" />}
                      {material.type === 'image' && <FaFileImage className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg text-gray-800 mb-1">{material.title}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 capitalize">{material.type}</span>
                        <a 
                          href={material.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors duration-200"
                        >
                          View
                          <FaArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Meet Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Class Schedule</h3>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-500 rounded-lg mr-3">
                    <FaCalendarAlt className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl">Next Class: {classSchedule.topic}</h4>
                </div>
                <div className="space-y-2 pl-11">
                  <p className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2" />
                    {classSchedule.time}
                  </p>
                  <p className="flex items-center">
                    <FaLink className="w-4 h-4 mr-2" />
                    {classSchedule.duration}
                  </p>
                </div>
              </div>
              
              <a 
                href={classSchedule.meetLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-indigo-700 hover:bg-gray-100 font-medium py-3 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <FaGoogle className="w-5 h-5 mr-2" />
                Join Google Meet
                <FaArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <p className="text-blue-100 text-sm mt-4">
                Please join 5 minutes before the scheduled time to ensure everything is working properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;