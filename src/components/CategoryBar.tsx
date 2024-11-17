import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Vehicles',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/vehicles-x3.png',
    count: '83,683',
    slug: 'vehicles',
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
    name: 'Property',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/property-x3.png',
    count: '29,602',
    slug: 'property',
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
    icon: 'https://assets.jijistatic.com/art/attributes/categories/phones-x3.png',
    count: '65,859',
    slug: 'phones-tablets',
    subcategories: [
      { name: 'Mobile Phones', slug: 'mobile-phones' },
      { name: 'Tablets', slug: 'tablets' },
      { name: 'Smart Watches', slug: 'smart-watches' },
      { name: 'Mobile Phone Parts', slug: 'mobile-phone-parts' },
      { name: 'Phone Accessories', slug: 'phone-accessories' }
    ]
  },
  {
    name: 'Electronics',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/electronics-x3.png',
    count: '123,090',
    slug: 'electronics',
    subcategories: [
      { name: 'Computers', slug: 'computers' },
      { name: 'TV & Audio', slug: 'tv-audio' },
      { name: 'Security & Surveillance', slug: 'security-surveillance' },
      { name: 'Gaming', slug: 'gaming' },
      { name: 'Printers & Scanners', slug: 'printers-scanners' }
    ]
  },
  {
    name: 'Home & Furniture',
    icon: 'https://assets.jijistatic.com/art/attributes/categories/home-x3.png',
    count: '283,242',
    slug: 'home-furniture',
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
    icon: 'https://assets.jijistatic.com/art/attributes/categories/health-x3.png',
    count: '26,149',
    slug: 'health-beauty',
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
    icon: 'https://assets.jijistatic.com/art/attributes/categories/fashion-x3.png',
    count: '76,515',
    slug: 'fashion',
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
    icon: 'https://assets.jijistatic.com/art/attributes/categories/jobs-x3.png',
    count: '165',
    slug: 'jobs',
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
    icon: 'https://assets.jijistatic.com/art/attributes/categories/services-x3.png',
    count: '22,195',
    slug: 'services',
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
    icon: 'https://assets.jijistatic.com/art/attributes/categories/agriculture-x3.png',
    count: '6,251',
    slug: 'agriculture',
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
  const navigate = useNavigate();

  const handleCategoryClick = (categorySlug: string) => {
    navigate(`/category/${categorySlug}`);
  };

  const handleSubcategoryClick = (categorySlug: string, subcategorySlug: string) => {
    navigate(`/category/${categorySlug}/${subcategorySlug}`);
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
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                selectedCategory === category.name ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 flex-shrink-0">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="ml-2 flex-1">
                  <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.count} ads</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </button>

            {selectedCategory === category.name && (
              <div 
                className="absolute left-[calc(100%-1px)] top-0 w-56 bg-white shadow-lg border border-gray-200 rounded-r-lg -mt-[1px]"
                style={{ borderLeft: '1px solid #fff' }}
              >
                <div className="py-1">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.slug}
                      onClick={() => handleSubcategoryClick(category.slug, subcategory.slug)}
                      className="w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {subcategory.name}
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