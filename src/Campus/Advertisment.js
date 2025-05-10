import { useState, useEffect } from 'react';
import { FiCheckCircle, FiStar, FiZap } from 'react-icons/fi';


const AdvertisementBanner = () => {
  const advertisements = [
    {
      id: 1,
      image: 'https://picsum.photos/536/354',
      name: "Sarah Johnson",
      status: "Verified Seller • 4.9★",
      caption: "Final year textbooks at 50% off! Limited stock available"
    },
    {
      id: 2,
      image: 'https://picsum.photos/536/354',
      name: "Tech Hub Store",
      status: "Premium Seller • 4.8★",
      caption: "Laptops & Tablets - Student Special Discounts!"
    },
    {
      id: 3,
      image: 'https://picsum.photos/536/354',
      name: "Fajuyi Kitchen",
      status: "Certified Vendor • 200+ orders",
      caption: "Daily fresh meals delivered to your room - Order now!"
    },
    {
      id: 4,
      image: 'https://picsum.photos/536/354',
      name: "Dorm Essentials",
      status: "Trusted Seller • 4.7★",
      caption: "Graduating student furniture sale - Everything must go!"
    },
    {
      id: 5,
      image: 'https://picsum.photos/536/354',
      name: "Study Group Pro",
      status: "OAU Certified Tutors",
      caption: "Exam prep sessions starting at ₦1000/hour"
    },
    {
      id: 6,
      image: 'https://picsum.photos/536/354',
      name: "Campus Fashion",
      status: "Trending Store • 4.9★",
      caption: "Back-to-school fashion essentials - 30% student discount"
    }
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex(prev => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * advertisements.length);
        } while (newIndex === prev);
        return newIndex;
      });
      setProgress(100);
    }, 10000);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - (100 / 10)));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const currentAd = advertisements[currentAdIndex];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1.5 bg-gray-100 w-full z-20">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="grid md:grid-cols-5 gap-0 min-h-[300px]">
          {/* Image Section */}
          <div className="relative md:col-span-2 h-64 md:h-full group overflow-hidden">
            <img 
              src={currentAd.image}
              alt="Advertisement"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <FiZap className="text-white w-5 h-5 flex-shrink-0" />
                <span className="text-white text-sm font-medium">
                  Sponsored · {currentAd.status}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-3 flex flex-col justify-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiStar className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{currentAd.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{currentAd.status}</p>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {currentAd.caption}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg shadow-lg hover:shadow-purple-200/50 transition-shadow">
                View Full Details →
              </button>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Verified Campus Seller · Secure Transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;