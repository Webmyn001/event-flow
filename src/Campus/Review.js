import { FiStar, FiCheckCircle, FiShoppingBag, FiMessageSquare } from 'react-icons/fi';
import { useState } from 'react';

const RatingsReviews = () => {
  // Mock data - Replace with API data later
  const [reviews] = useState([
    {
      id: 1,
      buyer: "Temi A.",
      rating: 5,
      comment: "Item was exactly as described! Fast delivery.",
      item: "Calculus Textbook",
      date: "March 15, 2024",
      verified: true
    },
    {
      id: 2,
      buyer: "Chike O.",
      rating: 4,
      comment: "Good condition, minor scratches",
      item: "Wireless Headphones",
      date: "March 12, 2024",
      verified: true
    }
  ]);

  // Success metrics (mock data)
  const salesData = {
    totalSales: 42,
    successRate: 95,
    averageRating: 4.8,
    completedTransactions: [
      { id: 1, item: "Textbook", date: "2024-03-15", buyer: "Temi A." },
      { id: 2, item: "Laptop", date: "2024-03-14", buyer: "James O." }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Sales Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FiShoppingBag className="text-2xl text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{salesData.totalSales}</div>
              <div className="text-gray-600">Total Sales</div>
            </div>
          </div>
        </div>

        {/* Success Rate Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FiCheckCircle className="text-2xl text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{salesData.successRate}%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Average Rating Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiStar className="text-2xl text-yellow-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">{salesData.averageRating}/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b mb-6">
        <button className="px-6 py-3 font-medium border-b-2 border-blue-600 text-blue-600">
          <FiMessageSquare className="inline mr-2" /> Reviews ({reviews.length})
        </button>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-xl shadow-sm">
        {reviews.map(review => (
          <div key={review.id} className="p-6 border-b last:border-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium">
                  {review.buyer}
                  {review.verified && (
                    <FiCheckCircle className="inline ml-2 text-green-500" />
                  )}
                </h3>
                <p className="text-gray-600 text-sm">{review.item}</p>
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={`${i < review.rating ? 'fill-current' : ''}`} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <div className="text-sm text-gray-500">{review.date}</div>
          </div>
        ))}
      </div>

      {/* Recent Sales Preview */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Recent Successful Sales</h2>
        <div className="space-y-4">
          {salesData.completedTransactions.map(transaction => (
            <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">{transaction.item}</div>
                <div className="text-sm text-gray-600">{transaction.date}</div>
              </div>
              <div className="text-sm text-gray-600">{transaction.buyer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingsReviews;