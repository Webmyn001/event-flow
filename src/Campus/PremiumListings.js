// PremiumListings.jsx
import { ListingsLayout, ListingCard } from './ListingLayout';
import { FiStar } from 'react-icons/fi';

const PremiumListings = () => {
  // Premium listings data
  const premiumItems = [
    {
      id: 1,
      title: "Luxury Smartwatch Pro",
      price: "₦450,000",
      category: "Premium",
      image: "https://example.com/smartwatch.jpg",
      timeLeft: "6hrs left",
      seller: "TechLuxury NG"
    },
    // Add 9 more premium items with unique details
    // ...
  ];

  return (
    <ListingsLayout
      category={{
        title: "Premium Listings",
        description: "Exclusive high-value items with premium services",
        icon: <FiStar className="w-8 h-8" />
      }}
      accentColor="from-purple-600 to-blue-500"
    >
      {premiumItems.map(item => (
        <ListingCard 
          key={item.id}
          item={item}
          accentColor="bg-gradient-to-r from-purple-600 to-blue-500"
        />
      ))}
    </ListingsLayout>
  );
};

export default PremiumListings;