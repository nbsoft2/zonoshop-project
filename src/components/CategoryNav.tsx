import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { CATEGORIES } from '../lib/constants/categories';
import type { Category } from '../lib/types/category';
import AllCategoriesMenu from './AllCategoriesMenu';

function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    navigate(`/category/${categorySlug}`);
  };

  const handleSubcategoryClick = (categorySlug: string, subcategorySlug: string) => {
    navigate(`/category/${categorySlug}/${subcategorySlug}`);
    setActiveCategory(null);
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-10 px-4">
          <button 
            className="flex items-center h-full px-3 hover:bg-gray-700"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            <Menu className="h-5 w-5 mr-2" />
            <span className="font-medium">All Categories</span>
          </button>

          <div className="flex items-center space-x-1 ml-4">
            {CATEGORIES.slice(0, 8).map((category: Category) => (
              <div
                key={category.name}
                className="relative group h-full"
                onMouseEnter={() => setActiveCategory(category.slug)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button 
                  className={`h-full px-3 flex items-center hover:bg-gray-700 transition-colors ${
                    activeCategory === category.slug ? 'bg-gray-700' : ''
                  }`}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <span className="text-sm whitespace-nowrap">{category.name}</span>
                </button>

                {activeCategory === category.slug && (
                  <div className="absolute left-0 top-full w-64 bg-white shadow-lg border border-gray-200 rounded-b-lg z-20">
                    <div className="py-2">
                      {category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory.slug}
                          onClick={() => handleSubcategoryClick(category.slug, subcategory.slug)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex justify-between items-center"
                        >
                          <span>{subcategory.name}</span>
                          {subcategory.count && (
                            <span className="text-xs text-gray-500">
                              {subcategory.count.toLocaleString()}
                            </span>
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
      </div>

      <AllCategoriesMenu 
        isOpen={showAllCategories}
        onClose={() => setShowAllCategories(false)}
      />
    </div>
  );
}

export default CategoryNav;