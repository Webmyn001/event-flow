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
import {MdWorkspacePremium } from 'react-icons/md'
import AdvertisementBanner from './Advertisment';
import ReportButton from './ReportButton';
import axios from 'axios';

const HomePage = () => {
    const premiumSliderRef = useRef(null);
    const urgentSliderRef = useRef(null);
    const servicesSliderRef = useRef(null);

  // Food items data
  const foodItems = [
    { id: 1, name: "Premium Rice", price: "₦500/cup", image: "https://picsum.photos/536/354" },
    { id: 2, name: "Brown Beans", price: "₦700/cup", image: "https://picsum.photos/536/354" },
    { id: 3, name: "Quality Garri", price: "₦300/cup", image: "https://picsum.photos/536/354" },
    { id: 4, name: "Golden Spaghetti", price: "₦400/pack", image: "https://picsum.photos/536/354" },
  ];

  // Urgent listings data
  const urgentListings = [
    { id: 1, title: "Calculus Textbook", price: "₦5,000", urgency: "12h left", image: "https://picsum.photos/536/354" },
    { id: 2, title: "Gaming Laptop", price: "₦120,000", urgency: "6h left", image: "https://picsum.photos/536/354" },
    { id: 3, title: "Designer Handbag", price: "₦25,000", urgency: "18h left", image: "https://picsum.photos/536/354" },
    { id: 4, title: "Bicycle", price: "₦45,000", urgency: "24h left", image: "https://picsum.photos/536/354" },
    { id: 2, title: "Gaming Laptop", price: "₦120,000", urgency: "6h left", image: "https://picsum.photos/536/354" },
    { id: 3, title: "Designer Handbag", price: "₦25,000", urgency: "18h left", image: "https://picsum.photos/536/354" },
    { id: 4, title: "Bicycle", price: "₦45,000", urgency: "24h left", image: "https://picsum.photos/536/354" },
  ];

  // recurring services data
  const recurringServices = [
    { 
      id: 1, 
      title: "Hostel Laundry Service", 
      price: "₦500/week", 
      image: "https://picsum.photos/536/354",
      description: "Professional washing & ironing with 24h turnaround"
    },
    { 
      id: 2, 
      title: "Campus Grocery Delivery", 
      price: "₦3,500/week", 
      image: "https://picsum.photos/536/354",
      description: "Weekly essential food items from campus vendors"
    },
    { 
      id: 3, 
      title: "Lecture Notes Printing", 
      price: "₦50/set", 
      image: "https://picsum.photos/536/354",
      description: "Quality printed notes with binding and delivery"
    },
    { 
      id: 4, 
      title: "Drinking Water Supply", 
      price: "₦1,200/month", 
      image: "https://picsum.photos/536/354",
      description: "Daily 20L water dispenser delivery"
    },
    { 
      id: 5, 
      title: "Hair Salon Bookings", 
      price: "₦2,500/month", 
      image: "https://picsum.photos/536/354",
      description: "Weekly styling appointments at campus salon"
    },
    { 
      id: 6, 
      title: "Cooking Gas Refills", 
      price: "₦4,000/refill", 
      image: "https://picsum.photos/536/354",
      description: "6kg gas cylinder delivery & pickup"
    },
    { 
      id: 7, 
      title: "Stationery Supplies", 
      price: "₦1,000/month", 
      image: "https://picsum.photos/536/354",
      description: "Monthly customized stationery package"
    },
    { 
      id: 8, 
      title: "WiFi Data Plans", 
      price: "₦2,500/month", 
      image: "https://picsum.photos/536/354",
      description: "Unlimited campus area WiFi access"
    }
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

  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };









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
  }, []); // Empty dependency array means this runs once on mount

  if (isLoading) {
    return <div className="text-center py-4">Loading reviews...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {error}
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏫</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Obafemi Awolowo University
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Campus<span className="text-yellow-400">Crave</span>
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Fajuyi Hall's Official Student Marketplace
          </p>
          <Link 
            to="/listings"
            className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all text-sm md:text-base"
          >
            Start Trading <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <AdvertisementBanner/>

      {/* Premium Listings Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
              <MdWorkspacePremium className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Premium Listings</h2>
          </div>
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

        <div 
          ref={premiumSliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        >
          {urgentListings.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <div/>
                <img alt={item.title} src={item.image} className='object-cover h-[300px]'/>
                <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Premium
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-purple-600 mb-4">{item.price}</p>
              <Link
                to="/details"
                state={item}
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 text-center rounded-lg hover:opacity-90 transition-opacity"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/premiumlistings" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-[14px] text-white px-6 py-2 rounded-full "
          >
            View Full Premium Listings →
          </Link>
        </div>
      </section>


       {/* Urgent Listings Section */}
       <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-red-500 to-orange-400 p-2 rounded-lg">
              <FiAlertTriangle className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Urgent Listings</h2>
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

        <div 
          ref={urgentSliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        >
          {urgentListings.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <div/>
                <img alt={item.title} src={item.image} className='object-cover h-[300px]'/>
                <span className="absolute top-3 left-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FiAlertTriangle className="w-4 h-4" /> {item.urgency}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-red-600 mb-4">{item.price}</p>
              <Link
                to="/details"
                state={item}
                className="block w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 text-center rounded-lg hover:opacity-90 transition-opacity"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/urgentlistings" 
            className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-[14px] text-white px-6 py-2 rounded-full "
          >
            View Full Urgent Listings →
          </Link>
        </div>
      </section>


      {/* Recurring Services Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-400 p-2 rounded-lg">
              <FiRepeat className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Recurring Services</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollSlider(servicesSliderRef, 'prev')}
              className="p-2 hover:bg-amber-100 rounded-full text-amber-600"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollSlider(servicesSliderRef, 'next')}
              className="p-2 hover:bg-amber-100 rounded-full text-amber-600"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={servicesSliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        >
          {recurringServices.map((service) => (
            <div 
              key={service.id}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <div />
                <img alt={service.title} src={service.image} className='object-cover h-[300px]'/>
                <span className="absolute top-3 left-3 bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm">
                  Recurring
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-amber-600 font-bold mb-2">{service.price}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
              <Link
                to="/details"
                state={{ service }}
                className="block w-full bg-gradient-to-r from-amber-600 to-yellow-400 text-white py-2 text-center rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/viplistings" 
            className="inline-block bg-gradient-to-r text-[14px] from-amber-600 to-yellow-400 text-white px-6 py-2 rounded-full "
          >
            View Full Recurring Listings →
          </Link>
        </div>
      </section>

      <ReportButton />



       {/* Food Items Section */}
       <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🛍️ Trade With Us</h2>
              <p className="text-gray-600 mb-6">
                Get daily affordable meals and groceries delivered straight to your hall! 
                Enjoy student-exclusive prices with guaranteed quality.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-3xl text-red-500" />
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p className="text-sm text-gray-600">Fajuyi Hall Shopping Complex</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {foodItems.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                <img alt={item.title} src={item.image} className='object-cover h-[250px] w-fit aspect-square rounded-lg mb-4'/>
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <p className="text-indigo-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              <FiShoppingBag className="inline mr-2" />
              Order Now (Contact Seller)
            </button>
          </div>
        </div>
      </section>

      
       

      
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