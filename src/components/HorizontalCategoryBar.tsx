import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../lib/constants/categories';
import type { Category } from '../lib/types/category';

interface HorizontalCategoryBarProps {
  onSubcategorySelect?: (category: string, subcategory: string) => void;
}

function HorizontalCategoryBar({ onSubcategorySelect }: HorizontalCategoryBarProps) {
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
    <div className="bg-white">
      <div className="flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
        {CATEGORIES.map((category: Category) => (
          <div
            key={category.name}
            onMouseEnter={() => setSelectedCategory(category.name)}
            onMouseLeave={() => setSelectedCategory(null)}
            className="relative group flex-shrink-0"
          >
            <button 
              onClick={() => handleCategoryClick(category.slug)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                activeCategory === category.slug 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {selectedCategory === category.name && (
              <div 
                className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg border border-gray-200 rounded-lg z-20"
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
                        <span className="text-xs text-gray-500">{subcategory.count.toLocaleString()} ads</span>
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

export default HorizontalCategoryBar;