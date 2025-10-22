import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaFilePdf,
  FaFileAudio,
  FaFileImage,
  FaCalendarAlt,
  FaClock,
  FaLink,
  FaArrowRight,
  FaGoogle,
  FaSignOutAlt,
  FaBook,
  FaUserGraduate,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

// Toast Component (same as dashboard)
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    } px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm`}>
      {type === 'success' ? (
        <FaCheckCircle className="text-xl" />
      ) : (
        <FaExclamationTriangle className="text-xl" />
      )}
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-200 transition-colors"
      >
        ×
      </button>
    </div>
  );
};

// Confirmation Modal for Logout
const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-auto shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <FaExclamationTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Logout?</h3>
          <p className="text-slate-600 mb-6">Are you sure you want to logout? You'll need to log in again to access your materials.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const ClassroomPage = () => {
  const navigate = useNavigate();
  const [lectures, setLectures] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [logoutModal, setLogoutModal] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  // Date formatting function
  const formatDate = (dateString) => {
    if (!dateString) return "Invalid date";
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";
    
    const options = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Format time to 12-hour format with AM/PM
  const formatTime = (timeString) => {
    if (!timeString) return "Invalid time";
    
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // Calculate join time (5 minutes before scheduled time)
  const getJoinTime = (timeString) => {
    if (!timeString) return "Invalid time";
    
    const [hours, minutes] = timeString.split(':');
    let hour = parseInt(hours);
    let minute = parseInt(minutes);
    
    // Subtract 5 minutes
    minute -= 5;
    if (minute < 0) {
      minute += 60;
      hour -= 1;
      if (hour < 0) hour = 23;
    }
    
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  // Show toast function
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Hide toast function
  const hideToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  useEffect(() => {
    const name = localStorage.getItem("studentName");
    const access = localStorage.getItem("studentAccess");

    if (!access) {
      navigate("/login");
    } else {
      setStudentName(name);
      fetchLectures();
      fetchSchedules();
    }
  }, [navigate]);

  const fetchLectures = async () => {
    try {
      const res = await axios.get("https://tutorial-backend-alpha.vercel.app/api/lectures");
      setLectures(res.data);
    } catch (err) {
      console.error("Error fetching lectures:", err);
      showToast('Error loading lecture materials', 'error');
    }
  };

  const fetchSchedules = async () => {
    try {
      const res = await axios.get("https://tutorial-backend-alpha.vercel.app/api/schedules");
      setSchedules(res.data);
    } catch (err) {
      console.error("Error fetching schedules:", err);
      showToast('Error loading class schedules', 'error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentAccess");
    navigate("/");
    showToast('Logged out successfully');
  };

  const openLogoutModal = () => {
    setLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  // Get icon based on file type
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-xl" />;
      case "audio":
        return <FaFileAudio className="text-green-500 text-xl" />;
      case "image":
        return <FaFileImage className="text-blue-500 text-xl" />;
      default:
        return <FaFilePdf className="text-gray-500 text-xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Toast Notification */}
        {toast.show && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={hideToast} 
          />
        )}

        {/* Logout Confirmation Modal */}
        <LogoutModal
          isOpen={logoutModal}
          onClose={closeLogoutModal}
          onConfirm={handleLogout}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Classroom
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
              <p className="text-sm text-slate-600">Welcome back</p>
              <p className="font-semibold text-slate-800">{studentName}</p>
            </div>
            <button
              onClick={openLogoutModal}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-colors shadow-sm hover:shadow-md"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Available Lectures</p>
                <p className="text-2xl font-bold text-slate-800">{lectures.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <FaBook className="text-blue-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Upcoming Classes</p>
                <p className="text-2xl font-bold text-slate-800">{schedules.length}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <FaCalendarAlt className="text-green-500 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Lectures Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-4">
              <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <FaBook className="text-blue-500" /> Lecture Notes
              </h3>
            </div>
            <div className="p-6">
              {lectures.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <FaBook className="text-4xl mx-auto mb-3 text-slate-300" />
                  <p>No lecture materials uploaded yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {lectures.map((lecture) => (
                    <div
                      key={lecture._id}
                      className="flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          {getFileIcon(lecture.type)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{lecture.topic}</p>
                          <p className="text-sm text-slate-500 capitalize">{lecture.type} file</p>
                        </div>
                      </div>
                      <a
                        href={lecture.googledriveurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md"
                      >
                        View <FaArrowRight className="text-sm" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Schedules Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-4">
              <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <FaCalendarAlt className="text-green-500" /> Class Schedules
              </h3>
            </div>
            <div className="p-6">
              {schedules.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <FaCalendarAlt className="text-4xl mx-auto mb-3 text-slate-300" />
                  <p>No class schedules available</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {schedules.map((schedule) => (
                    <div
                      key={schedule._id}
                      className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-xl text-white shadow-lg"
                    >
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-green-500 rounded-lg">
                            <FaCalendarAlt className="text-xl" />
                          </div>
                          <h4 className="font-bold text-lg">{schedule.topic}</h4>
                        </div>
                        
                        <div className="space-y-2 pl-11">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-green-200" />
                            <span className="text-green-100">
                              {formatDate(schedule.date)} • {formatTime(schedule.time)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaLink className="text-green-200" />
                            <span className="text-green-100">
                              Duration: {schedule.duration}
                            </span>
                          </div>
                          
                          {/* 5-minute reminder */}
                          <div className="flex items-start gap-2 mt-3 p-3 bg-green-500 rounded-lg">
                            <FaExclamationTriangle className="text-yellow-300 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-yellow-100 text-sm font-medium">
                                Join 5 Minutes Early
                              </p>
                              <p className="text-green-100 text-xs">
                                Please join by {getJoinTime(schedule.time)} to ensure you don't miss anything
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href={schedule.linkGoogleMeet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg w-full justify-center"
                      >
                        <FaGoogle className="text-lg" />
                        Join Google Meet
                        <FaArrowRight className="text-sm" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <FaUserGraduate className="text-purple-500" /> Quick Reminders
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">📚 Study Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Review materials before class</li>
                <li>• Take notes during lectures</li>
                <li>• Ask questions when needed</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">⏰ Class Etiquette</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Join 5 minutes early</li>
                <li>• Mute when not speaking</li>
                <li>• Prepare questions in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;