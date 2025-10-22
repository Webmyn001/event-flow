import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaSignOutAlt,
  FaFilePdf,
  FaFileAudio,
  FaFileImage,
  FaGoogle,
  FaTrash,
  FaUserGraduate,
  FaPlus,
  FaCalendarAlt,
  FaBook,
  FaUsers,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Toast Component
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

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-auto shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <FaExclamationTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-slate-600 mb-6">{message}</p>
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
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  const [materials, setMaterials] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState("materials");
  const [newMaterial, setNewMaterial] = useState({
    topic: "",
    type: "pdf",
    googledriveurl: "",
  });
  const [newSchedule, setNewSchedule] = useState({
    topic: "",
    date: "",
    time: "",
    duration: "",
    linkGoogleMeet: "",
  });

  // State for modals and toasts
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    type: '', // 'material' or 'schedule'
    id: null,
    title: ''
  });
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' // 'success' or 'error'
  });

  // Show toast function
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Hide toast function
  const hideToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

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

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const fetchAllData = async () => {
    try {
      const [materialsRes, schedulesRes, studentsRes] = await Promise.all([
        fetch("https://tutorial-backend-alpha.vercel.app/api/lectures"),
        fetch("https://tutorial-backend-alpha.vercel.app/api/schedules"),
        fetch("https://tutorial-backend-alpha.vercel.app/api/students"),
      ]);

      const materialsData = await materialsRes.json();
      const schedulesData = await schedulesRes.json();
      const studentsData = await studentsRes.json();

      setMaterials(Array.isArray(materialsData) ? materialsData : []);
      setSchedules(Array.isArray(schedulesData) ? schedulesData : []);
      setStudents(Array.isArray(studentsData) ? studentsData : []);
    } catch (err) {
      console.error("Error fetching data:", err);
      showToast('Error fetching data', 'error');
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // ✅ Add Lecture Note
  const handleAddMaterial = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("https://tutorial-backend-alpha.vercel.app/api/lectures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newMaterial),
      });

      if (res.ok) {
        fetchAllData();
        setNewMaterial({ topic: "", type: "pdf", googledriveurl: "" });
        showToast('Lecture note added successfully!');
      } else {
        showToast('Failed to add lecture note', 'error');
      }
    } catch (error) {
      console.error('Error adding material:', error);
      showToast('Error adding lecture note', 'error');
    }
  };

  // ✅ Delete Lecture Note
  const handleDeleteMaterial = async (id) => {
    const token = localStorage.getItem("adminToken");
    try {
      await fetch(`https://tutorial-backend-alpha.vercel.app/api/lectures/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAllData();
      showToast('Lecture note deleted successfully!');
    } catch (error) {
      console.error('Error deleting material:', error);
      showToast('Error deleting lecture note', 'error');
    }
  };

  // ✅ Add Schedule
  const handleAddSchedule = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("https://tutorial-backend-alpha.vercel.app/api/schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newSchedule),
      });

      if (res.ok) {
        fetchAllData();
        setNewSchedule({ topic: "", date: "", time: "", duration: "", linkGoogleMeet: "" });
        showToast('Class schedule added successfully!');
      } else {
        showToast('Failed to add schedule', 'error');
      }
    } catch (error) {
      console.error('Error adding schedule:', error);
      showToast('Error adding schedule', 'error');
    }
  };

  // ✅ Delete Schedule
  const handleDeleteSchedule = async (id) => {
    const token = localStorage.getItem("adminToken");
    try {
      await fetch(`https://tutorial-backend-alpha.vercel.app/api/schedules/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAllData();
      showToast('Schedule deleted successfully!');
    } catch (error) {
      console.error('Error deleting schedule:', error);
      showToast('Error deleting schedule', 'error');
    }
  };

  // Open delete confirmation modal
  const openDeleteModal = (type, id, title) => {
    setDeleteModal({
      isOpen: true,
      type,
      id,
      title
    });
  };

  // Close delete confirmation modal
  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      type: '',
      id: null,
      title: ''
    });
  };

  // Confirm delete action
  const confirmDelete = () => {
    if (deleteModal.type === 'material') {
      handleDeleteMaterial(deleteModal.id);
    } else if (deleteModal.type === 'schedule') {
      handleDeleteSchedule(deleteModal.id);
    }
    closeDeleteModal();
  };

  // Get icon based on file type
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500" />;
      case "audio":
        return <FaFileAudio className="text-green-500" />;
      case "image":
        return <FaFileImage className="text-blue-500" />;
      default:
        return <FaFilePdf className="text-gray-500" />;
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

        {/* Delete Confirmation Modal */}
        <ConfirmationModal
          isOpen={deleteModal.isOpen}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
          title={`Delete ${deleteModal.type === 'material' ? 'Lecture Note' : 'Schedule'}?`}
          message={`Are you sure you want to delete "${deleteModal.title}"? This action cannot be undone.`}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md"
            >
              <FaArrowLeft /> Back to Home
            </button>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-colors shadow-sm hover:shadow-md"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Lecture Notes</p>
                <p className="text-2xl font-bold text-slate-800">{materials.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <FaBook className="text-blue-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Scheduled Classes</p>
                <p className="text-2xl font-bold text-slate-800">{schedules.length}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <FaCalendarAlt className="text-green-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Students</p>
                <p className="text-2xl font-bold text-slate-800">{students.length}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <FaUsers className="text-purple-500 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab("materials")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === "materials"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <FaBook /> Lecture Notes
            </button>
            <button
              onClick={() => setActiveTab("schedules")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                activeTab === "schedules"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <FaCalendarAlt /> Class Schedules
            </button>
          </div>

          <div className="p-6">
            {/* Lecture Notes Section */}
            {activeTab === "materials" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-slate-800">Manage Lecture Notes</h3>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {materials.length} items
                  </span>
                </div>

                {/* Add Material Form */}
                <form
                  onSubmit={handleAddMaterial}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
                >
                  <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <FaPlus className="text-blue-500" /> Add New Lecture Note
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Enter topic name"
                      value={newMaterial.topic}
                      onChange={(e) =>
                        setNewMaterial({ ...newMaterial, topic: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <select
                      value={newMaterial.type}
                      onChange={(e) =>
                        setNewMaterial({ ...newMaterial, type: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="pdf">PDF Document</option>
                      <option value="image">Image</option>
                      <option value="audio">Audio File</option>
                    </select>
                  </div>
                  <input
                    type="url"
                    placeholder="Google Drive URL"
                    value={newMaterial.googledriveurl}
                    onChange={(e) =>
                      setNewMaterial({
                        ...newMaterial,
                        googledriveurl: e.target.value,
                      })
                    }
                    className="w-full mb-4 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                  >
                    Add Lecture Note
                  </button>
                </form>

                {/* Materials List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-700">Existing Notes</h4>
                  {materials.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                      <FaBook className="text-4xl mx-auto mb-3 text-slate-300" />
                      <p>No lecture notes added yet</p>
                    </div>
                  ) : (
                    materials.map((mat) => (
                      <div
                        key={mat._id}
                        className="flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                      >
                        <div className="flex items-center gap-3">
                          {getFileIcon(mat.type)}
                          <div>
                            <p className="font-medium text-slate-800">{mat.topic}</p>
                            <p className="text-sm text-slate-500 capitalize">{mat.type} file</p>
                          </div>
                        </div>
                        <button
                          onClick={() => openDeleteModal('material', mat._id, mat.topic)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete note"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Schedules Section */}
            {activeTab === "schedules" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-slate-800">Manage Class Schedules</h3>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {schedules.length} scheduled
                  </span>
                </div>

                {/* Add Schedule Form */}
                <form
                  onSubmit={handleAddSchedule}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100"
                >
                  <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <FaPlus className="text-green-500" /> Schedule New Class
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Class topic"
                      value={newSchedule.topic}
                      onChange={(e) =>
                        setNewSchedule({ ...newSchedule, topic: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="date"
                      value={newSchedule.date}
                      onChange={(e) =>
                        setNewSchedule({ ...newSchedule, date: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="time"
                      value={newSchedule.time}
                      onChange={(e) =>
                        setNewSchedule({ ...newSchedule, time: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 1 hour)"
                      value={newSchedule.duration}
                      onChange={(e) =>
                        setNewSchedule({ ...newSchedule, duration: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="url"
                    placeholder="Google Meet Link"
                    value={newSchedule.linkGoogleMeet}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, linkGoogleMeet: e.target.value })
                    }
                    className="w-full mb-4 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <FaGoogle /> Add Schedule
                  </button>
                </form>

                {/* Schedules List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-700">Upcoming Classes</h4>
                  {schedules.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                      <FaCalendarAlt className="text-4xl mx-auto mb-3 text-slate-300" />
                      <p>No classes scheduled yet</p>
                    </div>
                  ) : (
                    schedules.map((sch) => (
                      <div
                        key={sch._id}
                        className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <FaCalendarAlt className="text-green-500" />
                              <h5 className="font-semibold text-slate-800">{sch.topic}</h5>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-600">
                              <div>
                                <span className="font-medium">Date:</span> {formatDate(sch.date)}
                              </div>
                              <div>
                                <span className="font-medium">Time:</span> {formatTime(sch.time)}
                              </div>
                              <div>
                                <span className="font-medium">Duration:</span> {sch.duration}
                              </div>
                            </div>
                            <a
                              href={sch.linkGoogleMeet}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700 font-medium"
                            >
                              <FaGoogle /> Join Google Meet
                            </a>
                          </div>
                          <button
                            onClick={() => openDeleteModal('schedule', sch._id, sch.topic)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-4"
                            title="Delete schedule"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Students Section */}
        <div className="text-center">
          <Link
            to="/students"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-medium"
          >
            <FaUserGraduate className="text-lg" /> Students Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;