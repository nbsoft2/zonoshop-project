import React from 'react';
import { Search, Heart } from 'lucide-react';

const ElectronicsCategoryHeader = () => {
  return (
    <div className="bg-white shadow-sm mb-6">
      {/* Search Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search in Electronics"
              className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="absolute right-3 top-3 flex items-center space-x-2">
              <Heart className="h-5 w-5 text-blue-600 cursor-pointer" />
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Header and Stats */}
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Electronics</h1>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">120,163</span> ads
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsCategoryHeader;