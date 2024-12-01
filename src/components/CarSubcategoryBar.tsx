import React from 'react';

const carBrands = [
  {
    name: 'Toyota',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/toyota.png',
    count: 17772
  },
  {
    name: 'Subaru',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/subaru.png',
    count: 2951
  },
  {
    name: 'Mercedes-Benz',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/mercedes-benz.png',
    count: 1471
  },
  {
    name: 'Nissan',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/nissan.png',
    count: 937
  },
  {
    name: 'Volkswagen',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/volkswagen.png',
    count: 909
  },
  {
    name: 'BMW',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/bmw.png',
    count: 415
  },
  {
    name: 'Land Rover',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/land-rover.png',
    count: 417
  },
  {
    name: 'Mitsubishi',
    logo: 'https://assets.jijistatic.com/art/attributes/categories/cars2x-tinifield/mitsubishi.png',
    count: 839
  }
];

const CarSubcategoryBar = () => {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="font-semibold">Popular Car Brands</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {carBrands.map((brand) => (
            <button
              key={brand.name}
              className="flex flex-col items-center space-y-2 hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {brand.name}
                </div>
                <div className="text-xs text-gray-500">
                  {brand.count.toLocaleString()} ads
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSubcategoryBar;