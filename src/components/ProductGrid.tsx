import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  condition: string;
  category: string;
  slug: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro Max',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400',
    location: 'Kampala',
    condition: 'New',
    category: 'electronics',
    slug: 'iphone-13-pro-max'
  },
  {
    id: '2',
    title: 'Toyota Camry 2020',
    price: 45000000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=400',
    location: 'Entebbe',
    condition: 'Used',
    category: 'vehicles',
    slug: 'toyota-camry-2020'
  },
  {
    id: '3',
    title: 'MacBook Pro M1',
    price: 3500000,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=400',
    location: 'Kampala',
    condition: 'New',
    category: 'electronics',
    slug: 'macbook-pro-m1'
  },
  {
    id: '4',
    title: 'Sony PlayStation 5',
    price: 2200000,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400',
    location: 'Jinja',
    condition: 'New',
    category: 'electronics',
    slug: 'playstation-5'
  },
  {
    id: '5',
    title: 'Samsung 4K Smart TV',
    price: 1800000,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400',
    location: 'Kampala',
    condition: 'New',
    category: 'electronics',
    slug: 'samsung-4k-tv'
  },
  {
    id: '6',
    title: 'Honda CBR 600RR',
    price: 15000000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400',
    location: 'Gulu',
    condition: 'Used',
    category: 'vehicles',
    slug: 'honda-cbr-600rr'
  },
  {
    id: '7',
    title: 'Canon EOS R5',
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1621520291095-aa6c7137f048?auto=format&fit=crop&q=80&w=400',
    location: 'Mbarara',
    condition: 'New',
    category: 'electronics',
    slug: 'canon-eos-r5'
  },
  {
    id: '8',
    title: 'DJI Mavic Air 2',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1600512642417-ae14ed21f844?auto=format&fit=crop&q=80&w=400',
    location: 'Kampala',
    condition: 'New',
    category: 'electronics',
    slug: 'dji-mavic-air-2'
  }
];

function ProductGrid() {
  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {SAMPLE_PRODUCTS.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.category}/${product.slug}`}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative aspect-w-4 aspect-h-3">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <button 
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  // Add to favorites logic here
                }}
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 truncate">{product.title}</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-blue-600 font-semibold">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                <span>{product.location}</span>
                <span>{product.condition}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;