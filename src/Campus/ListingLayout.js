// ListingsLayout.jsx
import { Link } from 'react-router-dom';
import { FiClock, FiStar, FiZap, FiShoppingBag } from 'react-icons/fi';

// Shared layout component
const ListingsLayout = ({ children, category, accentColor }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${accentColor} shadow-lg`}>
          <div className="flex items-center gap-4 text-white">
            {category.icon}
            <h1 className="text-3xl font-bold">{category.title}</h1>
          </div>
          <p className="mt-2 text-white/90">{category.description}</p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Listing Card Component
const ListingCard = ({ item, accentColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative aspect-square">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-t-xl"
        />
        {/* Badge */}
        <span className={`absolute top-3 left-3 px-3 py-1 ${accentColor} text-white rounded-full text-sm`}>
          {item.category}
        </span>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <p className="text-xl font-bold text-gray-900">{item.price}</p>
        </div>

        {/* Time Left / Status */}
        {item.timeLeft && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <FiClock className="w-4 h-4" />
            <span>{item.timeLeft} left</span>
          </div>
        )}

        {/* Action Button */}
        <Link
          to="/details"
          state={item}
          className={`w-full block text-center py-2 px-4 ${accentColor} hover:opacity-90 text-white rounded-lg font-medium transition-all`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export { ListingsLayout, ListingCard };