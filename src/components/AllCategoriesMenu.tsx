import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../lib/constants/categories';
import type { Category } from '../lib/types/category';

interface AllCategoriesMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function AllCategoriesMenu({ isOpen, onClose }: AllCategoriesMenuProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCategoryClick = (categorySlug: string) => {
    navigate(`/category/${categorySlug}`);
    onClose();
  };

  const handleSubcategoryClick = (categorySlug: string, subcategorySlug: string) => {
    navigate(`/category/${categorySlug}/${subcategorySlug}`);
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed left-0 top-[6.5rem] bottom-0 w-80 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">All Categories</h2>
          <div className="space-y-4">
            {CATEGORIES.map((category: Category) => (
              <div key={category.name} className="space-y-2">
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className="flex items-center space-x-3 w-full hover:text-blue-600 transition-colors"
                >
                  <category.icon className="h-5 w-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
                <div className="pl-8 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.slug}
                      onClick={() => handleSubcategoryClick(category.slug, subcategory.slug)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                    >
                      {subcategory.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCategoriesMenu;