import { FiArrowLeft, FiStar, FiAlertTriangle, FiShare2, FiHeart, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const ListingDetails = () => {

    const { state } = useLocation();
    console.log(state)
  // Dummy data - Replace with API call
  const listing = {
    id: 1,
    title: "MacBook Pro 2020 (16GB/512GB)",
    price: "₦280,000",
    category: "Electronics",
    description: "Like-new condition, purchased 6 months ago. Comes with original box and accessories. Battery health 98%.",
    urgent: true,
    seller: {
      name: "Sarah Johnson",
      rating: 4.9,
      verified: true,
      itemsSold: 42,
      memberSince: 2022
    },
    images: ["https://picsum.photos/536/354", "https://picsum.photos/536/354", "https://picsum.photos/536/354"], // Add image URLs
    meetupSpots: ["Library Main Entrance", "Student Union Building"],
    postedAt: "3 hours ago"
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();

  // Modern color scheme
  const colors = {
    primary: '#3B82F6',
    secondary: '#6366F1',
    accent: '#EF4444',
    background: '#F8FAFC',
    text: '#1E293B'
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link 
          to="/listings" 
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <FiArrowLeft className="inline-block" />
          <span className="font-medium">Back to Listings</span>
        </Link>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery Section */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square">
              {listing.urgent && (
                <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <FiAlertTriangle className="inline-block" />
                  Urgent Sale
                </div>
              )}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {listing.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl transition-all duration-200 ${
                    selectedImage === index 
                      ? 'ring-2 ring-blue-500 ring-offset-2' 
                      : 'hover:ring-1 hover:ring-gray-300'
                  }`}
                >
                  <div className="w-full h-full bg-gray-200 rounded-xl" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            {/* Title and Price */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">{listing.title}</h1>
              <div className="flex items-baseline gap-4">
                <p className="text-3xl font-bold text-blue-600">{listing.price}</p>
                <span className="text-sm text-gray-500">Posted {listing.postedAt}</span>
              </div>
              <div className="inline-flex bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                Category: {listing.category}
              </div>
            </div>

            {/* Seller Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{listing.seller.name}</h3>
                    {listing.seller.verified && (
                      <FiCheckCircle className="text-green-600 w-5 h-5" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1 text-amber-500">
                      <FiStar className="w-4 h-4" />
                      <span>{listing.seller.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{listing.seller.itemsSold} sales</span>
                    <span>•</span>
                    <span>Member since {listing.seller.memberSince}</span>
                  </div>
                </div>
              </div>
              <Link 
                to={`/transactions/${listing.id}`}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center transition-colors"
              >
                Contact Seller
              </Link>
            </div>

            {/* Product Description */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h3>
              <p className="text-gray-600 leading-relaxed">{listing.description}</p>
            </div>

            {/* Meetup Locations */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FiMapPin className="text-red-500 w-6 h-6" />
                Meetup Locations
              </h3>
              <div className="space-y-3">
                {listing.meetupSpots.map((spot, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 p-3 bg-gray-50 rounded-lg">
                    <FiMapPin className="text-gray-400 flex-shrink-0" />
                    <span>{spot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-2xl lg:hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-bold text-blue-600 text-lg">{listing.price}</p>
              <p className="text-gray-600 text-sm truncate">{listing.title}</p>
            </div>
            <Link 
              to={`/transactions/${listing.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-colors"
            >
              Contact Seller
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;