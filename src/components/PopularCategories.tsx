import React from 'react';
import { Car, Home, Smartphone, Tv, Shirt, Briefcase, Wrench, Package } from 'lucide-react';

const categories = [
  { name: 'Vehicles', icon: Car, count: '25,420' },
  { name: 'Property', icon: Home, count: '18,305' },
  { name: 'Phones', icon: Smartphone, count: '32,150' },
  { name: 'Electronics', icon: Tv, count: '28,740' },
  { name: 'Fashion', icon: Shirt, count: '45,900' },
  { name: 'Jobs', icon: Briefcase, count: '12,600' },
  { name: 'Services', icon: Wrench, count: '15,800' },
  { name: 'Others', icon: Package, count: '22,450' },
];

function PopularCategories() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white rounded-lg p-3 text-center hover:shadow-sm transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full mb-2">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-sm font-medium mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} ads</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;