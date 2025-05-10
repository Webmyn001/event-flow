import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiPhone, FiBook, FiHome, FiCamera, FiSave } from 'react-icons/fi';
import axios from 'axios';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    campusId: '',
    profilePhoto: '',
    course: '',
    year: '',
    hostel: '',
    emergencyContact: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [example, setexample] = useState('please worki oo');




  const payload = {
    ...userData,
    example: example
  };
// console.log(payload)
  // Get user ID and token
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
 console.log(userId)
  // Fetch existing user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auth/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (err) {
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, token]);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
    console.log(userData)
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prev => ({ ...prev, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/auth/${userId}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      setSuccess('Profile updated successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed');
    }
  };

  if (loading) return <div className="text-center p-4">Loading profile...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Update Your Profile</h1>

      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Photo */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-200">
              {userData.profilePhoto ? (
                <img src={userData.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <FiUser className="w-full h-full p-4 text-gray-400" />
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm cursor-pointer">
              <FiCamera className="text-blue-600" />
              <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
          <p className="text-gray-600">Click camera to update photo</p>
        </div>

        {/* Form Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Full Name</label>
              <div className="flex items-center gap-2">
                <FiUser className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Phone Number</label>
              <div className="flex items-center gap-2">
                <FiPhone className="text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Campus ID</label>
              <input
                type="text"
                name="campusId"
                value={userData.campusId}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Campus ID"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-2">Course</label>
              <div className="flex items-center gap-2">
                <FiBook className="text-gray-400" />
                <input
                  type="text"
                  name="course"
                  value={userData.course}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Course of study"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Year</label>
              <select
                name="year"
                value={userData.year}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-white"
              >
                <option value="">Select Year</option>
                {[1, 2, 3, 4, 5].map(year => (
                  <option key={year} value={year}>Year {year}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Hostel</label>
              <div className="flex items-center gap-2">
                <FiHome className="text-gray-400" />
                <input
                  type="text"
                  name="hostel"
                  value={userData.hostel}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Hostel address"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2">Emergency Contact</label>
          <input
            type="tel"
            name="emergencyContact"
            value={userData.emergencyContact}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Emergency contact"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <FiSave /> Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;