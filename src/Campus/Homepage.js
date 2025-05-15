import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiAlertTriangle, 
  FiRepeat, 
  FiStar, 
  FiHelpCircle, 
  FiMapPin, 
  FiShoppingBag, 
  FiUsers, 
  FiChevronLeft, 
  FiChevronRight, 
  FiEdit
} from 'react-icons/fi';
import { MdWorkspacePremium } from 'react-icons/md';
import AdvertisementBanner from './Advertisment';
import ReportButton from './ReportButton';
import axios from 'axios';
import { motion } from 'framer-motion';

// Animation constants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 120 
    } 
  }
};

const cardHoverVariants = {
  hover: { 
    y: -8,
    transition: { 
      type: 'spring', 
      stiffness: 400 
    }
  }
};

const HomePage = () => {
  const premiumSliderRef = useRef(null);
  const urgentSliderRef = useRef(null);
  const servicesSliderRef = useRef(null);

  // Sample data
  const foodItems = [
    { id: 1, name: "Premium Rice", price: "500/cup", image: "https://picsum.photos/536/354" },
    { id: 2, name: "Brown Beans", price: "700/cup", image: "https://picsum.photos/536/354" },
    { id: 3, name: "Quality Garri", price: "300/cup", image: "https://picsum.photos/536/354" },
    { id: 4, name: "Golden Spaghetti", price: "400/pack", image: "https://picsum.photos/536/354" },
  ];

  const urgentListings = [
    { id: 1, title: "Calculus Textbook", price: "5,000", urgency: "12h left", image: "https://picsum.photos/536/354" },
    { id: 2, title: "Gaming Laptop", price: "120,000", urgency: "6h left", image: "https://picsum.photos/536/354" },
    { id: 3, title: "Designer Handbag", price: "25,000", urgency: "18h left", image: "https://picsum.photos/536/354" },
    { id: 4, title: "Bicycle", price: "45,000", urgency: "24h left", image: "https://picsum.photos/536/354" },
  ];

  const recurringServices = [
    { 
      id: 1, 
      title: "Hostel Laundry Service", 
      price: "500/week", 
      image: "https://picsum.photos/536/354",
      description: "Professional washing & ironing with 24h turnaround"
    },
    { 
      id: 2, 
      title: "Campus Grocery Delivery", 
      price: "3,500/week", 
      image: "https://picsum.photos/536/354",
      description: "Weekly essential food items from campus vendors"
    },
    { 
      id: 3, 
      title: "Lecture Notes Printing", 
      price: "50/set", 
      image: "https://picsum.photos/536/354",
      description: "Quality printed notes with binding and delivery"
    },
    { 
      id: 4, 
      title: "Drinking Water Supply", 
      price: "1,200/month", 
      image: "https://picsum.photos/536/354",
      description: "Daily 20L water dispenser delivery"
    },
  ];

  const faqs = [
    { 
      question: "How do I verify my student status?",
      answer: "Use your official OAU email address during registration and upload a clear photo of your current student ID card."
    },
    { 
      question: "Is there buyer protection?",
      answer: "Yes! All transactions are protected through our campus escrow system. Funds are only released after successful delivery."
    },
    { 
      question: "How fast are deliveries?",
      answer: "Most deliveries within Fajuyi Hall happen within 2-4 hours. Off-campus deliveries vary by location."
    },
    { 
      question: "Can I sell services?",
      answer: "Absolutely! You can offer tutoring, laundry services, repairs, and other student-friendly services."
    },
  ];

  // Slider scroll functionality
  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Reviews state management
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews/');
        setReviews(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch reviews');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  //if (isLoading) return <div className="text-center py-4">Loading reviews...</div>;
  //if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center space-y-6"
        >
        
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent"
          >
            Campus<span className="text-white">Crave</span> Marketplace
          </motion.h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Safe . Reliable . Student-Focused Training
          </p>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <h2 
              
              className="inline-flex items-center bg-white/90 backdrop-blur-sm text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Crave for it and Get it Quickly.
            </h2>
          </motion.div>
        </motion.div>
      </section>

      <AdvertisementBanner />

      {/* Premium Listings Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg shadow-md">
              <MdWorkspacePremium className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Premium Listings</h2>
          </motion.div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollSlider(premiumSliderRef, 'prev')}
              className="p-2 hover:bg-purple-100 rounded-full text-purple-600"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollSlider(premiumSliderRef, 'next')}
              className="p-2 hover:bg-purple-100 rounded-full text-purple-600"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          ref={premiumSliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {urgentListings.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden mb-4"
                variants={cardHoverVariants}
              >
                <img 
                  alt={item.title} 
                  src={item.image} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm shadow-sm">
                  Premium
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-purple-600 mb-4">{item.price}</p>
              <Link
                to="/details"
                state={item}
                className="block w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 text-center rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link 
            to="/premiumlistings" 
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Explore Premium Listings →
          </Link>
        </div>
      </section>

      {/* Urgent Listings Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-400 p-2 rounded-lg shadow-md">
              <FiAlertTriangle className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Urgent Listings</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollSlider(urgentSliderRef, 'prev')}
              className="p-2 hover:bg-red-100 rounded-full text-red-500"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollSlider(urgentSliderRef, 'next')}
              className="p-2 hover:bg-red-100 rounded-full text-red-500"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          ref={urgentSliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {urgentListings.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden mb-4"
                variants={cardHoverVariants}
              >
                <img 
                  alt={item.title} 
                  src={item.image} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <FiAlertTriangle className="w-4 h-4" /> {item.urgency}
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-red-600 mb-4">{item.price}</p>
              <Link
                to="/details"
                state={item}
                className="block w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 text-center rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Buy Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link 
            to="/urgentlistings" 
            className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            View Urgent Listings →
          </Link>
        </div>
      </section>

      {/* Report Button */}
      <ReportButton />

      {/* Recurring Services Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-2 rounded-lg shadow-md">
              <FiRepeat className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recurring Services</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollSlider(servicesSliderRef, 'prev')}
              className="p-2 hover:bg-amber-100 rounded-full text-amber-500"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollSlider(servicesSliderRef, 'next')}
              className="p-2 hover:bg-amber-100 rounded-full text-amber-500"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          ref={servicesSliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {recurringServices.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden mb-4"
                variants={cardHoverVariants}
              >
                <img 
                  alt={service.title} 
                  src={service.image} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm shadow-sm">
                  Recurring
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-xl font-bold text-amber-600 mb-2">{service.price}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
              <Link
                to="/details"
                state={{ service }}
                className="block w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white py-3 text-center rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Subscribe Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link 
            to="/recurringservices" 
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Browse Services →
          </Link>
        </div>
      </section>

         {/* Food Items Section */}
         <section className="max-w-6xl mx-auto py-12 px-4">
        <motion.div 
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[2.5rem] shadow-xl p-8 md:p-12 transition-all hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row gap-8 mb-10"
          >
            <div className="flex-1 space-y-5 max-w-prose">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
              >
                🛍️ Campus Market Hub
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-lg md:text-xl leading-relaxed font-[450]"
              >
                Discover daily affordable meals and groceries delivered straight to your hall! 
                Enjoy exclusive student prices with premium quality guaranteed.
              </motion.p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/3 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-indigo-50"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="p-3 bg-indigo-100 rounded-xl"
                >
                  <FiMapPin className="text-xl text-indigo-600" />
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Our Location</p>
                  <p className="text-gray-600 mt-1.5">Fajuyi Hall Shopping Complex</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          >
            {foodItems.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <motion.div 
                  variants={cardHoverVariants}
                  className="relative overflow-hidden rounded-xl mb-4 aspect-square"
                >
                  <img 
                    alt={item.name} 
                    src={item.image} 
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2 text-center">{item.name}</h3>
                <p className="text-indigo-600 font-bold text-xl text-center">₦{item.price}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Link to="/contactseller">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-[2rem] font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-3 shadow-lg"
            >
              <FiShoppingBag className="text-xl" />
              Order Now - Contact Seller
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

          {/* Report Button  */}
      <ReportButton />

           {/* Reviews Section */}
<section className="max-w-6xl mx-auto py-8 md:py-12 px-4">
  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <FiUsers className="text-2xl md:text-3xl text-indigo-600" />
        <h2 className="text-xl md:text-2xl font-bold">Student Experiences</h2>
      </div>

      <Link to="/reviewpage">
      <button 
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
      >
        <FiEdit />
        Share Your Experience
      </button>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div key={review._id} className="bg-gray-50 p-4 rounded-xl">
          <div className="mb-4">
            <p className="font-bold">{review.name}</p>
            <p className="text-sm text-gray-500">
              {review.course} ({review.level})
            </p>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(review.ratings)].map((_, i) => (
              <FiStar key={i} className="text-yellow-400 w-4 h-4" />
            ))}
          </div>
          <p className="text-gray-700 mb-2">"{review.review}"</p>
          <p className="text-sm text-gray-400">
            {new Date(review.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto py-8 md:py-12 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <FiHelpCircle className="text-2xl md:text-3xl text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;