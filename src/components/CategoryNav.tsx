import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../lib/constants/categories';
import type { Category } from '../lib/constants/categories';

function CategoryNav() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    navigate(`/category/${slug}`);
  };

  const handleSubcategoryClick = (categorySlug: string, subcategorySlug: string) => {
    navigate(`/category/${categorySlug}/${subcategorySlug}`);
    setHoveredCategory(null);
  };

  return (
    <div className="bg-gray-800 text-white py-1">
      <div className="max-w-7xl mx-auto">
        {CATEGORIES.map((row, rowIndex) => (
          <div 
            key={rowIndex}
            className="flex items-center justify-between px-4 py-0.5"
          >
            {row.map((category: Category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.slug}
                  className="relative group"
                  onMouseEnter={() => setHoveredCategory(category.slug)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    onClick={() => handleCategoryClick(category.slug)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-t-md transition-colors hover:bg-gray-700 ${
                      hoveredCategory === category.slug ? 'bg-white text-gray-800' : ''
                    } ${activeCategory === category.slug ? 'bg-gray-700' : ''}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm whitespace-nowrap">{category.name}</span>
                  </button>

                  {/* Subcategories dropdown */}
                  {hoveredCategory === category.slug && (
                    <div 
                      className="absolute left-0 top-[calc(100%-1px)] w-64 bg-white rounded-b-lg rounded-tr-lg shadow-lg z-50 border-t-2 border-gray-100"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setHoveredCategory(category.slug);
                      }}
                    >
                      <div className="py-1">
                        {category.subcategories.map((subcategory) => (
                          <button
                            key={subcategory.slug}
                            onClick={() => handleSubcategoryClick(category.slug, subcategory.slug)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                          >
                            {subcategory.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryNav;