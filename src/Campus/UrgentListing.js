// UrgentListings.jsx
import { ListingsLayout, ListingCard } from './ListingLayout';
import { FiZap } from 'react-icons/fi';

const UrgentListings = () => {
  // Urgent listings data
  const urgentItems = [
    {
      id: 1,
      title: "MacBook Pro 2022",
      price: "₦680,000",
      category: "Urgent",
      image: "https://picsum.photos/536/354",
      timeLeft: "2hrs left",
      seller: "QuickDeals NG"
    },


    {
        id: 1,
        title: "MacBook Pro 2022",
        price: "₦680,000",
        category: "Urgent",
        image: "https://picsum.photos/536/354",
        timeLeft: "2hrs left",
        seller: "QuickDeals NG"
      },


      {
        id: 1,
        title: "MacBook Pro 2022",
        price: "₦680,000",
        category: "Urgent",
        image: "https://picsum.photos/536/354",
        timeLeft: "2hrs left",
        seller: "QuickDeals NG"
      },



      {
        id: 1,
        title: "MacBook Pro 2022",
        price: "₦680,000",
        category: "Urgent",
        image: "https://picsum.photos/536/354",
        timeLeft: "2hrs left",
        seller: "QuickDeals NG"
      },



      {
        id: 1,
        title: "MacBook Pro 2022",
        price: "₦680,000",
        category: "Urgent",
        image: "https://picsum.photos/536/354",
        timeLeft: "2hrs left",
        seller: "QuickDeals NG"
      },
    // Add 9 more urgent items
    // ...
  ];

  return (
    <ListingsLayout
      category={{
        title: "Urgent Sales",
        description: "Time-sensitive deals requiring quick action",
        icon: <FiZap className="w-8 h-8" />
      }}
      accentColor="from-red-500 to-orange-400"
    >
      {urgentItems.map(item => (
        <ListingCard 
          key={item.id}
          item={item}
          accentColor="bg-gradient-to-r from-red-500 to-orange-400"
        />
      ))}
    </ListingsLayout>
  );
};

export default UrgentListings;