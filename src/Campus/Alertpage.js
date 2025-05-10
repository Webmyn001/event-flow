import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FiAlertCircle, FiCheckCircle, FiChevronDown, FiUpload, FiClock, FiLoader } from 'react-icons/fi';

const ReportScamPage = () => {
  const [isExpanded, setIsExpanded] = useState(null);
  const [formData, setFormData] = useState({
    scamType: '',
    description: '',
    contactInfo: '',
    files: null
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [scamReports, setScamReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // GET Recent Reports
  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.yourservice.com/reports');
      setScamReports(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch reports. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // POST Report
  const submitReport = async (formData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      const formPayload = new FormData();
      formPayload.append('scamType', formData.scamType);
      formPayload.append('description', formData.description);
      formPayload.append('contactInfo', formData.contactInfo);
      if (formData.files) {
        Array.from(formData.files).forEach(file => {
          formPayload.append('files', file);
        });
      }

      await axios.post('https://api.yourservice.com/reports', formPayload, config);
      await fetchReports(); // Refresh reports after submission
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      setError('Submission failed. Please check your connection and try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    await submitReport(formData);
    setFormData({ scamType: '', description: '', contactInfo: '', files: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3"
          >
            <FiAlertCircle className="text-red-600 w-8 h-8" />
            Report Scam Incident
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Help protect our community by reporting suspicious activities. All reports are anonymous and will be 
            investigated by campus security.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-3">
            <FiAlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Report Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Submit Report</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Scam Type *</label>
                <select
                  value={formData.scamType}
                  onChange={(e) => setFormData({ ...formData, scamType: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select scam type</option>
                  <option>Financial Fraud</option>
                  <option>Phishing</option>
                  <option>Fake Marketplace</option>
                  <option>Identity Theft</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                  placeholder="Provide detailed information about the incident..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
                <input
                  type="email"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Optional email for follow-up"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Evidence</label>
                <div className="flex items-center gap-3 flex-wrap">
                  <label className="cursor-pointer flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
                    <FiUpload className="w-4 h-4" />
                    <span>Choose Files</span>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => setFormData({ ...formData, files: e.target.files })}
                      className="hidden"
                    />
                  </label>
                  <span className="text-sm text-gray-500">
                    {formData.files?.length > 0 ? 
                      `${formData.files.length} file${formData.files.length > 1 ? 's' : ''} selected` : 
                      'No files selected'}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin w-4 h-4" />
                    Submitting...
                  </>
                ) : (
                  'Submit Report'
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Recent Scams */}
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Recent Reports</h2>
            {loading ? (
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <FiLoader className="animate-spin w-5 h-5" />
                Loading reports...
              </div>
            ) : (
              <div className="space-y-3">
                <AnimatePresence>
                  {scamReports.map((report) => (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <div 
                        className="p-3 sm:p-4 cursor-pointer" 
                        onClick={() => setIsExpanded(isExpanded === report.id ? null : report.id)}
                      >
                        <div className="flex justify-between items-center gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm sm:text-base truncate">{report.title}</h3>
                            <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-gray-500">
                              <FiClock className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{new Date(report.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded === report.id ? 180 : 0 }}
                          >
                            <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                          </motion.div>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ height: isExpanded === report.id ? 'auto' : 0, opacity: 1 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <div className="mt-3 flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              report.status === 'Active' ? 'bg-red-100 text-red-800' :
                              report.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {report.status}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-600 text-sm sm:text-base">{report.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white shadow-lg rounded-lg p-3 sm:p-4 flex items-center gap-2 text-sm sm:text-base"
            >
              <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Report submitted successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReportScamPage;