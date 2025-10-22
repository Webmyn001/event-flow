import { useEffect, useState } from "react";
import axios from "axios";
import { 
  FiTrash2, 
  FiUserPlus,
  FiUsers,
  FiUser,
  FiKey,
  FiPlus,
  FiAlertTriangle 
} from "react-icons/fi";

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
        <div className="w-5 h-5 bg-white text-green-500 rounded-full flex items-center justify-center">
          ✓
        </div>
      ) : (
        <FiAlertTriangle className="text-xl" />
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
            <FiAlertTriangle className="h-6 w-6 text-red-600" />
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

const StudentsSection = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    studentId: null,
    studentName: ''
  });
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  // Show toast function
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Hide toast function
  const hideToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  // Open delete confirmation modal
  const openDeleteModal = (studentId, studentName) => {
    setDeleteModal({
      isOpen: true,
      studentId,
      studentName
    });
  };

  // Close delete confirmation modal
  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      studentId: null,
      studentName: ''
    });
  };

  // ✅ Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("https://tutorial-backend-alpha.vercel.app/api/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      showToast('Error loading students', 'error');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ Add student (with admin auth)
  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!name || !accessCode) {
      showToast('Please fill in both fields', 'error');
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("adminToken");

    try {
      await axios.post(
        "https://tutorial-backend-alpha.vercel.app/api/students",
        { name, accessCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");
      setAccessCode("");
      fetchStudents();
      showToast('Student added successfully!');
    } catch (error) {
      console.error("Error adding student:", error);
      if (error.response?.status === 401) {
        showToast('Unauthorized. Please log in again.', 'error');
      } else {
        showToast('Failed to add student', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete student (with admin auth)
  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");

    try {
      await axios.delete(`https://tutorial-backend-alpha.vercel.app/api/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchStudents();
      showToast('Student deleted successfully!');
    } catch (error) {
      console.error("Error deleting student:", error);
      if (error.response?.status === 401) {
        showToast('Unauthorized. Please log in again.', 'error');
      } else {
        showToast('Failed to delete student', 'error');
      }
    }
  };

  // Confirm delete action
  const confirmDelete = () => {
    handleDelete(deleteModal.studentId);
    closeDeleteModal();
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
          title="Delete Student?"
          message={`Are you sure you want to delete "${deleteModal.studentName}"? This action cannot be undone.`}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Management
            </h1>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600">Total Students</p>
            <p className="text-2xl font-bold text-slate-800">{students.length}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Students</p>
                <p className="text-2xl font-bold text-slate-800">{students.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <FiUsers className="text-blue-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Access Codes</p>
                <p className="text-2xl font-bold text-slate-800">{students.length}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <FiKey className="text-green-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Manage</p>
                <p className="text-2xl font-bold text-slate-800">Students</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <FiUserPlus className="text-purple-500 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-b border-slate-200 px-6 py-4">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <FiUserPlus className="text-blue-500" /> Add New Student
            </h3>
          </div>

          {/* Add Student Form */}
          <form onSubmit={handleAddStudent} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Student Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter student name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Access Code
                </label>
                <div className="relative">
                  <FiKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter access code"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Adding Student...
                </>
              ) : (
                <>
                  <FiPlus className="text-lg" />
                  Add Student
                </>
              )}
            </button>
          </form>
        </div>

        {/* Students List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <FiUsers className="text-green-500" /> Student List
              </h3>
              <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {students.length} students
              </span>
            </div>
          </div>

          <div className="p-6">
            {students.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                <FiUsers className="text-4xl mx-auto mb-3 text-slate-300" />
                <p className="text-lg mb-2">No students added yet</p>
                <p className="text-sm">Add your first student using the form above</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {students.map((student) => (
                  <div
                    key={student._id}
                    className="flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <FiUser className="text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{student.name}</p>
                        <p className="text-sm text-slate-500">Access Code: {student.accessCode}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => openDeleteModal(student._id, student.name)}
                      className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete student"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-blue-50 rounded-2xl p-6 mt-8 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
            💡 Management Tips
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <p className="font-medium mb-1">Student Access</p>
              <ul className="space-y-1">
                <li>• Students use access codes to login</li>
                <li>• Each code should be unique</li>
                <li>• Share codes securely with students</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">Best Practices</p>
              <ul className="space-y-1">
                <li>• Use full student names</li>
                <li>• Keep access codes simple but secure</li>
                <li>• Regularly update student list</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSection;