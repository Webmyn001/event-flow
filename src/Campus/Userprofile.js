import { FiCheckCircle, FiEdit, FiLogOut, FiPackage, FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
  const [listings, setListings] = useState([
    { 
      id: 1, 
      title: "MacBook Pro 2020", 
      price: "₦280,000", 
      status: "active",
      email: "sarah.j@example.com",
      date: "2024-03-15"
    },
    { 
      id: 2, 
      title: "Calculus Textbook", 
      price: "₦7,500", 
      status: "sold",
      email: "sarah.j@example.com",
      date: "2024-03-14"
    },
  ]);
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedEmail = localStorage.getItem('userEmail')?.trim();
        if (!storedEmail) {
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/api/auth/users');
        const users = response.data;
        const matchedUser = users.find(user => 
          user.email?.toLowerCase() === storedEmail.toLowerCase()
        );
        setCurrentUser(matchedUser || null);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleAuth = () => {
    localStorage.removeItem('Login');
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    window.dispatchEvent(new Event('storage'));
navigate('/');
  };



  // from back end users
  const profileData = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar: "https://picsum.photos/536/356",
    memberSince: "March 2022",
    status: "PRO",
    verified: true
  };

  const toggleListingStatus = (listingId) => {
    setListings(listings.map(listing => 
      listing.id === listingId 
        ? { ...listing, status: listing.status === 'active' ? 'sold' : 'active' }
        : listing
    ));
  };
  console.log(currentUser)

    return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header with Actions */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
              <div className="flex gap-4">
                <Link
                  to="/publish"
                  className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <FiPlus className="mr-1" /> Publish New
                </Link>
                <button 
                  onClick={handleAuth}
                  className="flex items-center px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <FiLogOut className="mr-1" />
                  Logout
                </button>
              </div>
            </div>
    
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="relative">
                  <img 
                    src={profileData.avatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-100"
                  />
                  {profileData.verified && (
                    <FiCheckCircle className="absolute bottom-2 right-2 text-xl bg-white rounded-full text-green-500" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">{currentUser.name}</h1>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      profileData.status === 'PRO' 
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {profileData.status} Member
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      {currentUser.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Member Since:</span>
                      {currentUser.memberSince}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Department:</span>
                      {currentUser.course}, Part {currentUser.year}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="font-medium">Address:</span>
                      {currentUser.hostel}
                    </p>
                  </div>
                </div>
                
                <button className="self-start p-2 hover:bg-gray-100 rounded-lg">
                    <Link to="/profilepage">
                  <FiEdit className="text-2xl text-gray-600" />
                    </Link>
                </button>
              </div>
            </div>

      {/* Listings Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FiPackage className="text-blue-500" />
          My Listings ({listings.length})
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.filter(l => l.email === profileData.email).map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-gray-800">{listing.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  listing.status === 'active' 
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {listing.status}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-blue-600 font-bold text-lg">{listing.price}</p>
                <p className="text-sm text-gray-500">{listing.date}</p>
              </div>
              
              <label className="mt-4 flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded cursor-pointer">
                <input
                  type="checkbox"
                  checked={listing.status === 'sold'}
                  onChange={() => toggleListingStatus(listing.id)}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                Mark as Sold
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;