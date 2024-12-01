import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface CategoryOption {
  name: string;
  slug: string;
  count: number;
  icon?: string;
}

const categoryOptions: Record<string, CategoryOption[]> = {
  electronics: [
    { name: 'Computer Monitors', slug: 'computer-monitors', count: 2164 },
    { name: 'Computers & Laptops', slug: 'computers-laptops', count: 28163 },
    { name: 'TV & DVD Equipment', slug: 'tv-dvd-equipment', count: 13642 },
    { name: 'Security & Surveillance', slug: 'security-surveillance', count: 6885 },
    { name: 'Video Game Consoles', slug: 'video-games', count: 1804 },
    { name: 'Headphones', slug: 'headphones', count: 1846 },
    { name: 'Computer Accessories', slug: 'computer-accessories', count: 10203 },
    { name: 'Printers & Scanners', slug: 'printers-scanners', count: 6311 },
    { name: 'Computer Hardware', slug: 'computer-hardware', count: 8093 },
    { name: 'Cameras & Camcorders', slug: 'cameras', count: 4883 },
    { name: 'Audio & Music Equipment', slug: 'audio-equipment', count: 7057 },
    { name: 'Networking Products', slug: 'networking', count: 3314 },
    { name: 'Video Games', slug: 'video-game-software', count: 1519 }
  ]
};

const CategorySelector = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const options = categoryOptions[categorySlug || ''] || [];

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!options.length) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <button 
        className="w-full p-4 border-b border-gray-200 flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-semibold">Subcategories</h3>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <>
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subcategories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
            <div className="p-2">
              <div className="divide-y divide-gray-100">
                {filteredOptions.map((option) => (
                  <Link
                    key={option.slug}
                    to={`/category/${categorySlug}/${option.slug}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      subcategorySlug === option.slug ? 'bg-blue-50 text-blue-700' : ''
                    }`}
                  >
                    <span className="font-medium">{option.name}</span>
                    <span className="text-sm text-gray-500">
                      {option.count.toLocaleString()}
                    </span>
                  </Link>
                ))}
                {filteredOptions.length === 0 && (
                  <div className="px-4 py-3 text-sm text-gray-500 text-center">
                    No subcategories found
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CategorySelector;