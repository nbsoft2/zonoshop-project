import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'Vehicles',
    slug: 'vehicles',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/vehicles-x3.png',
    count: '83,683',
    subcategories: [
      { name: 'Cars', slug: 'cars' },
      { name: 'Buses & Microbuses', slug: 'buses-microbuses' },
      { name: 'Heavy Equipment', slug: 'heavy-equipment' },
      { name: 'Motorbikes & Scooters', slug: 'motorbikes-scooters' },
      { name: 'Trucks & Trailers', slug: 'trucks-trailers' },
      { name: 'Vehicle Parts', slug: 'vehicle-parts' },
      { name: 'Watercraft & Boats', slug: 'watercraft-boats' }
    ]
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/electronics-x3.png',
    count: '123,117',
    subcategories: [
      { name: 'Computer Monitors', slug: 'computer-monitors', count: '2,164' },
      { name: 'Computers & Laptops', slug: 'computers-laptops', count: '28,163' },
      { name: 'TV & DVD Equipment', slug: 'tv-dvd-equipment', count: '13,642' },
      { name: 'Security & Surveillance', slug: 'security-surveillance', count: '6,885' },
      { name: 'Video Game Consoles', slug: 'video-games', count: '1,804' },
      { name: 'Headphones', slug: 'headphones', count: '1,846' },
      { name: 'Computer Accessories', slug: 'computer-accessories', count: '10,203' },
      { name: 'Printers & Scanners', slug: 'printers-scanners', count: '6,311' },
      { name: 'Computer Hardware', slug: 'computer-hardware', count: '8,093' },
      { name: 'Cameras & Camcorders', slug: 'cameras', count: '4,883' },
      { name: 'Audio & Music Equipment', slug: 'audio-equipment', count: '7,057' },
      { name: 'Networking Products', slug: 'networking', count: '3,314' },
      { name: 'Video Games', slug: 'video-game-software', count: '1,519' }
    ]
  },
  {
    name: 'Property',
    slug: 'property',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/property-x3.png',
    count: '29,602',
    subcategories: [
      { name: 'Houses For Sale', slug: 'houses-for-sale' },
      { name: 'Houses For Rent', slug: 'houses-for-rent' },
      { name: 'Land & Plots', slug: 'land-plots' },
      { name: 'Commercial Property', slug: 'commercial-property' },
      { name: 'Event Centers', slug: 'event-centers' },
      { name: 'Short Let Property', slug: 'short-let-property' }
    ]
  },
  {
    name: 'Phones & Tablets',
    slug: 'phones-tablets',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/phones-x3.png',
    count: '65,859',
    subcategories: [
      { name: 'Mobile Phones', slug: 'mobile-phones' },
      { name: 'Tablets', slug: 'tablets' },
      { name: 'Smart Watches', slug: 'smart-watches' },
      { name: 'Mobile Phone Parts', slug: 'mobile-phone-parts' },
      { name: 'Phone Accessories', slug: 'phone-accessories' }
    ]
  },
  {
    name: 'Home & Furniture',
    slug: 'home-furniture',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/home-x3.png',
    count: '283,242',
    subcategories: [
      { name: 'Furniture', slug: 'furniture' },
      { name: 'Home Appliances', slug: 'home-appliances' },
      { name: 'Kitchen Appliances', slug: 'kitchen-appliances' },
      { name: 'Garden', slug: 'garden' },
      { name: 'Decor', slug: 'decor' },
      { name: 'Home Accessories', slug: 'home-accessories' }
    ]
  },
  {
    name: 'Health & Beauty',
    slug: 'health-beauty',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/health-x3.png',
    count: '26,149',
    subcategories: [
      { name: 'Skincare', slug: 'skincare' },
      { name: 'Haircare', slug: 'haircare' },
      { name: 'Makeup', slug: 'makeup' },
      { name: 'Fragrances', slug: 'fragrances' },
      { name: 'Sexual Wellness', slug: 'sexual-wellness' },
      { name: 'Vitamins & Supplements', slug: 'vitamins-supplements' }
    ]
  },
  {
    name: 'Fashion',
    slug: 'fashion',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/fashion-x3.png',
    count: '76,515',
    subcategories: [
      { name: 'Clothing', slug: 'clothing' },
      { name: 'Shoes', slug: 'shoes' },
      { name: 'Bags', slug: 'bags' },
      { name: 'Jewelry', slug: 'jewelry' },
      { name: 'Watches', slug: 'watches' },
      { name: 'Wedding Wear', slug: 'wedding-wear' }
    ]
  },
  {
    name: 'Jobs',
    slug: 'jobs',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/jobs-x3.png',
    count: '165',
    subcategories: [
      { name: 'Accounting & Finance', slug: 'accounting-finance' },
      { name: 'Engineering', slug: 'engineering' },
      { name: 'Healthcare', slug: 'healthcare' },
      { name: 'Sales', slug: 'sales' },
      { name: 'Teaching', slug: 'teaching' },
      { name: 'Restaurant & Bar', slug: 'restaurant-bar' }
    ]
  },
  {
    name: 'Services',
    slug: 'services',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/services-x3.png',
    count: '22,195',
    subcategories: [
      { name: 'Building Services', slug: 'building-services' },
      { name: 'Cleaning Services', slug: 'cleaning-services' },
      { name: 'Computer Services', slug: 'computer-services' },
      { name: 'Entertainment', slug: 'entertainment' },
      { name: 'Health & Beauty Services', slug: 'health-beauty-services' }
    ]
  },
  {
    name: 'Agriculture',
    slug: 'agriculture',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/agriculture-x3.png',
    count: '6,251',
    subcategories: [
      { name: 'Farm Machinery', slug: 'farm-machinery' },
      { name: 'Feeds & Supplements', slug: 'feeds-supplements' },
      { name: 'Livestock', slug: 'livestock' },
      { name: 'Meals & Drinks', slug: 'meals-drinks' },
      { name: 'Farm Produce', slug: 'farm-produce' }
    ]
  }
];

interface CategoryBarProps {
  onSubcategorySelect?: (category: string, subcategory: string) => void;
}

function CategoryBar({ onSubcategorySelect }: CategoryBarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    navigate(`/category/${categorySlug}`);
  };

  const handleSubcategoryClick = (categorySlug: string, subcategorySlug: string) => {
    navigate(`/category/${categorySlug}/${subcategorySlug}`);
    setSelectedCategory(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="divide-y divide-gray-200">
        {categories.map((category) => (
          <div
            key={category.name}
            onMouseEnter={() => setSelectedCategory(category.name)}
            onMouseLeave={() => setSelectedCategory(null)}
            className="relative group"
          >
            <button 
              onClick={() => handleCategoryClick(category.slug)}
              className={`w-full px-4 py-2 text-left transition-colors ${
                activeCategory === category.slug 
                  ? 'bg-blue-50 hover:bg-blue-100' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex-shrink-0">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <div className={`text-sm font-medium ${
                    activeCategory === category.slug ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </div>
                  <div className="text-xs text-gray-500">{category.count} ads</div>
                </div>
                <ChevronRight className={`w-4 h-4 ${
                  activeCategory === category.slug ? 'text-blue-600' : 'text-gray-400'
                }`} />
              </div>
            </button>

            {selectedCategory === category.name && (
              <div 
                className="absolute left-[calc(100%-8px)] top-0 w-64 bg-white shadow-lg border border-gray-200 rounded-lg z-20"
                style={{
                  marginLeft: '0',
                  transform: 'translateX(8px)'
                }}
              >
                <div className="py-2">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.slug}
                      onClick={() => handleSubcategoryClick(category.slug, subcategory.slug)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center"
                    >
                      <span>{subcategory.name}</span>
                      {subcategory.count && (
                        <span className="text-xs text-gray-500">{subcategory.count}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;