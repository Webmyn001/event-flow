import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiFilter, FiSearch, FiAlertTriangle, FiStar } from 'react-icons/fi';

// Category mapping for URL parameters
const categoryMap = {
  textbooks: 'Textbooks',
  electronics: 'Electronics',
  dorm: 'Dorm Essentials',
  services: 'Services',
  all: 'All'
};

const BrowseListings = () => {
  // URL Parameter Handling
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'all';

  // State initialization from URL
  const [selectedCategory, setSelectedCategory] = useState(
    categoryMap[urlCategory.toLowerCase()] || 'All'
  );
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [filteredListings, setFilteredListings] = useState([]);

  // Dummy data
  const allListings = [
    { 
      id: 1,
      title: "Calculus Textbook (3rd Ed)",
      price: "₦7,500",
      category: "Textbooks",
      urgent: false,
      rating: 4.5,
      datePosted: new Date('2024-03-20')
    },
    { 
      id: 2,
      title: "Like New MacBook Pro 2020",
      price: "₦280,000",
      category: "Electronics",
      urgent: true,
      rating: 4.8,
      datePosted: new Date('2024-03-15')
    },
  ];

  // Update URL when category changes
  useEffect(() => {
    const newCategory = selectedCategory.toLowerCase().replace(' ', '-');
    if (newCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory]);

  // Filter and sort logic
  useEffect(() => {
    let results = [...allListings];

    // Search filter
    if (searchQuery) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      results = results.filter(item => item.category === selectedCategory);
    }

    // Urgent filter
    if (showUrgentOnly) {
      results = results.filter(item => item.urgent);
    }

    // Price filter
    const parsePrice = (priceString) => Number(priceString.replace(/[^0-9]/g, ''));
    results = results.filter(item => {
      const price = parsePrice(item.price);
      const min = priceRange.min ? parsePrice(priceRange.min) : 0;
      const max = priceRange.max ? parsePrice(priceRange.max) : Infinity;
      return price >= min && price <= max;
    });

    // Sorting
    switch(selectedSort) {
      case 'price-low-high':
        results.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'price-high-low':
        results.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        results.sort((a, b) => b.datePosted - a.datePosted);
    }

    setFilteredListings(results);
  }, [searchQuery, selectedCategory, showUrgentOnly, priceRange, selectedSort]);

  return (
    <div className="min-h-screen bg-[#f8fafc]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-2">
            {selectedCategory === 'All' ? 'All Listings' : `${selectedCategory} Listings`}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for items or services..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 hidden md:block">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-[#1e293b]">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3 text-gray-600">Category</h4>
                <select 
                  className="w-full p-2 border rounded-lg"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {['All', 'Textbooks', 'Electronics', 'Dorm Essentials', 'Services'].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3 text-gray-600">Price Range (₦)</h4>
                <div className="flex flex-col gap-2">
                  <input
                    type="number"
                    placeholder="Min price"
                    className="w-full p-2 border rounded-lg"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                  />
                  <input
                    type="number"
                    placeholder="Max price"
                    className="w-full p-2 border rounded-lg"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                  />
                </div>
              </div>

              {/* Urgent Filter */}
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="urgentOnly"
                  checked={showUrgentOnly}
                  onChange={(e) => setShowUrgentOnly(e.target.checked)}
                  className="accent-[#dc2626]"
                />
                <label htmlFor="urgentOnly" className="text-sm text-[#1e293b]">
                  Urgent Sales Only
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting Controls */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600">
                {filteredListings.length} result{filteredListings.length !== 1 && 's'} found
              </span>
              <select 
                className="p-2 rounded-lg border border-gray-200"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    {listing.urgent && (
                      <div className="absolute top-2 left-2 bg-[#fee2e2] text-[#dc2626] px-2 py-1 rounded-full text-xs font-medium">
                        Urgent Sale
                      </div>
                    )}
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
                  </div>
                  
                  <h3 className="font-semibold mb-2 text-[#1e293b]">{listing.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[#2563eb] font-bold text-lg">{listing.price}</p>
                    <div className="flex items-center gap-1">
                      <FiStar className="text-[#eab308]" />
                      <span className="text-sm text-gray-600">{listing.rating}</span>
                    </div>
                  </div>

                  <div className='flex justify-between items-center'>
                  <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {listing.category}
                  </span>

                  <span className="inline-block mt-2 px-3 py-1 bg-green-600 text-white rounded-full text-sm">
  <Link 
    to="/details" 
    state={{ listing : listing}}
  >
    Buy Now {listing.id}
  </Link>
</span>

                  </div>
                  
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredListings.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No listings match your filters</p>
                <button 
                  className="mt-4 text-[#2563eb] hover:underline"
                  onClick={() => {
                    setSelectedCategory('All');
                    setShowUrgentOnly(false);
                    setPriceRange({ min: '', max: '' });
                    setSearchQuery('');
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseListings;