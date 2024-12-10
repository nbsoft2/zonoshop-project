import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, Car, Home, Shirt, Tv, Flower2, Baby, 
  Gavel, Palette, UtensilsCrossed, Leaf, Briefcase, 
  GraduationCap, Tag, MoreHorizontal 
} from 'lucide-react';

const CATEGORIES = [
  // Row 1
  [
    { name: 'Electronics & Appliances', icon: Tv, slug: 'electronics-appliances' },
    { name: 'Vehicles & Automotive', icon: Car, slug: 'vehicles-automotive' },
    { name: 'Real Estate & Construction', icon: Home, slug: 'real-estate-construction' },
    { name: 'Fashion', icon: Shirt, slug: 'fashion' },
    { name: 'Home & Garden', icon: Flower2, slug: 'home-garden' },
    { name: 'Health & Beauty', icon: ShoppingBag, slug: 'health-beauty' },
    { name: 'Baby & Kids', icon: Baby, slug: 'baby-kids' }
  ],
  // Row 2
  [
    { name: 'Arts & Culture', icon: Palette, slug: 'arts-culture' },
    { name: 'Food & Beverages', icon: UtensilsCrossed, slug: 'food-beverages' },
    { name: 'Agriculture & Pets', icon: Leaf, slug: 'agriculture-pets' },
    { name: 'Jobs & Services', icon: Briefcase, slug: 'jobs-services' },
    { name: 'Education & Stationery', icon: GraduationCap, slug: 'education' },
    { name: 'Auction', icon: Gavel, slug: 'auctions' },
    { name: 'Hot Deals', icon: Tag, slug: 'hot-deals' },
    { name: 'Others', icon: MoreHorizontal, slug: 'others' }
  ]
];

function CategoryNav() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    navigate(`/category/${slug}`);
  };

  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="max-w-7xl mx-auto">
        {CATEGORIES.map((row, rowIndex) => (
          <div 
            key={rowIndex}
            className="flex items-center justify-between px-4 py-1"
          >
            {row.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-md transition-colors hover:bg-gray-700 ${
                    activeCategory === category.slug ? 'bg-gray-700' : ''
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm whitespace-nowrap">{category.name}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryNav;