import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://rabbit-rust.vercel.app/api/student');
      setStudents(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching students:', err);
      setError('Failed to load student data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to remove this student?')) {
      return;
    }

    try {
      setDeletingId(id);
      await axios.delete(`https://rabbit-rust.vercel.app/api/student/${id}`);
      
      // REFRESH THE PAGE AFTER SUCCESSFUL DELETION
      window.location.reload();
    } catch (err) {
      console.error('Error deleting student:', err);
      alert('Failed to delete student. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto text-center"
      >
        <p className="text-emerald-800 font-medium">Loading students...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto text-center"
      >
        <p className="text-red-600 font-medium">{error}</p>
        <button 
          onClick={fetchStudents}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
        >
          Retry
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-emerald-800">Student List</h2>
        <p className="text-gray-600">{students.length} students enrolled</p>
      </div>
      
      <div className="overflow-x-auto">
        {students.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No students found</p>
            <button 
              onClick={fetchStudents}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Refresh
            </button>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student, index) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {console.log(student)}
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.JoinedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    
                    <button 
                      onClick={() => handleDelete(student._id)}
                      disabled={deletingId === student._id}
                      className={`text-red-600 hover:text-red-900 ${
                        deletingId === student.id ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {deletingId === student.id ? 'Deleting...' : 'Delete Student'}
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
};

export default StudentList;