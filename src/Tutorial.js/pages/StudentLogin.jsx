import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { 
  FaLock, 
  FaArrowLeft, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope,
  FaUserGraduate,
  FaEye,
  FaEyeSlash,
  FaRocket,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

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

const StudentLogin = () => {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.get("http://localhost:5000/api/students");
      const students = res.data;

      const found = students.find(
        (s) => s.accessCode.toLowerCase() === accessCode.toLowerCase()
      );

      if (found) {
        // Save student info locally
        localStorage.setItem("studentName", found.name);
        localStorage.setItem("studentAccess", found.accessCode);
        setError("");
        showToast(`Welcome back, ${found.name}!`, 'success');
        
        // Navigate after a short delay to show the success message
        setTimeout(() => {
          navigate("/classroom");
        }, 1500);
      } else {
        setError("Invalid access code. Please check and try again.");
        showToast('Invalid access code. Please try again.', 'error');
      }
    } catch (err) {
      const errorMessage = "Server error. Please try again later.";
      setError(errorMessage);
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+2348033269810"; // Nigeria country code
    const message = "Hello! I would like to get an access code for the physics classroom.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8">
      {/* Toast Notification */}
      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}

      <div className="max-w-md w-full">

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
            <div className="w-20 h-10 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <FaLock className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Classroom Access
            </h2>
            <p className="text-blue-100 opacity-90">
              Enter your access code to continue your physics journey
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleVerifyCode}>
              <div className="mb-6">
                <label
                  htmlFor="accessCode"
                  className="block text-slate-700 font-semibold mb-3 text-lg"
                >
                  Access Code
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                    <FaUserGraduate className="text-xl" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="accessCode"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Enter your access code"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 mt-3 bg-red-50 py-3 px-4 rounded-lg border border-red-200 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-500 flex-shrink-0" />
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-lg flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <FaRocket className="text-lg" />
                    Enter Classroom
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="px-4 text-slate-500 text-sm">Need Help?</span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <p className="text-slate-600 text-center mb-6">
                Don't have an access code? Contact your instructor:
              </p>
              
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-[14px] text-white font-medium py-2 px-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl" />
                Contact via WhatsApp
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Quick Access Tips
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Access codes are case-insensitive</li>
                <li>• Keep your code secure and don't share it</li>
                <li>• Contact instructor if you've lost your code</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-slate-500 text-sm text-center mt-8">
          Secure access for NTI, IJMBE & JUPEB Physics Students
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;