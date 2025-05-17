import { useState, useEffect } from 'react';
import { FiCheckCircle, FiStar, FiZap, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AdvertisementBanner = () => {
  const advertisements = [
    {
      id: 1,
      image: 'https://picsum.photos/536/354?student',
      name: "Sarah Johnson",
      status: "Graduating Student",
      rating: 4.9,
      caption: "📚 Final Year Textbooks - 50% OFF!",
      tags: ["Verified Seller", "200+ Transactions", "Campus Pickup"]
    },
    {
      id: 2,
      image: 'https://picsum.photos/536/354?laptop,student',
      name: "Tech Hub Campus Store",
      status: "Official Partner",
      rating: 4.8,
      caption: "💻 Student Laptop Deals - 0% Interest Installments",
      tags: ["Premium Seller", "Warranty Included", "Free Setup"]
    },
    {
      id: 3,
      image: 'https://picsum.photos/536/354/?food,tray',
      name: "Campus Kitchen",
      status: "Certified Vendor",
      rating: 4.7,
      caption: "🍱 Daily Meals - ₦500 Student Discount!",
      tags: ["Hygeine Certified", "30-min Delivery", "Meal Plans"]
    },
    {
      id: 4,
      image: 'https://picsum.photos/536/354/?dorm,room',
      name: "Dorm Essentials",
      status: "Trusted Seller",
      rating: 4.9,
      caption: "🛏️ Graduation Clearance - Furniture & Appliances",
      tags: ["Cash on Delivery", "Installation Help", "1-year Warranty"]
    }
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentAdIndex(prev => (prev + 1) % advertisements.length);
    resetProgress();
  };

  const handlePrev = () => {
    setCurrentAdIndex(prev => (prev - 1 + advertisements.length) % advertisements.length);
    resetProgress();
  };

  const resetProgress = () => {
    setProgress(100);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentAdIndex(prev => (prev + 1) % advertisements.length);
      resetProgress();
    }, 8000);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - (100 / 8)));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPaused]);

  const currentAd = advertisements[currentAdIndex];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div 
        className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1.5 bg-gray-100 w-full z-20">
          <div 
            className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between z-10">
          <button
            onClick={handlePrev}
            className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Image Section */}
          <div className="relative lg:w-1/2 h-64 lg:h-full group overflow-hidden">
            <img 
              src={currentAd.image}
              alt={currentAd.caption}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 lg:p-6">
              <div className="flex items-center gap-2 mb-2">
                <FiZap className="text-white w-5 h-5 flex-shrink-0" />
                <span className="text-white text-sm font-medium">
                  Campus Exclusive · {currentAd.status}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {currentAd.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FiStar className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{currentAd.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-600">{currentAd.status}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <FiStar className="w-4 h-4" />
                      <span className="text-sm font-medium">{currentAd.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {currentAd.caption}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <Link to="/details" className="block">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all font-semibold text-lg shadow-lg hover:shadow-indigo-200/50 active:scale-95 flex items-center justify-center gap-3">
                  Explore Offer
                  <span className="text-xl">→</span>
                </button>
              </Link>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Campus-Verified · 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;