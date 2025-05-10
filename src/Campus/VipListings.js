// VipServicesListings.jsx
import { ListingsLayout, ListingCard } from './ListingLayout';
import { FiShoppingBag } from 'react-icons/fi';

const VipServicesListings = () => {
  // VIP Services data
  const vipItems = [
    {
      id: 1,
      title: "Executive Car Service",
      price: "₦85,000/day",
      category: "VIP Service",
      image: "https://example.com/car-service.jpg",
      timeLeft: "3 slots left",
      seller: "Elite Services NG"
    },
    // Add 9 more VIP services
    // ...
  ];

  return (
    <ListingsLayout
      category={{
        title: "VIP Services",
        description: "Exclusive premium services for discerning clients",
        icon: <FiShoppingBag className="w-8 h-8" />
      }}
      accentColor="from-amber-600 to-yellow-400"
    >
      {vipItems.map(item => (
        <ListingCard 
          key={item.id}
          item={item}
          accentColor="bg-gradient-to-r from-amber-600 to-yellow-400"
        />
      ))}
    </ListingsLayout>
  );
};

export default VipServicesListings;