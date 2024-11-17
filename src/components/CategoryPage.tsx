import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbOperations } from '../lib/db';
import type { Product } from '../lib/db';
import { Heart } from 'lucide-react';

function formatPrice(price: number): string {
  return `UGX ${price.toLocaleString()}`;
}

function calculateDiscount(price: number, discountedPrice: number): number {
  return Math.round(((price - discountedPrice) / price) * 100);
}

function CategoryPage() {
  const { categorySlug, subcategorySlug } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // For now, we'll just load all products since we don't have category filtering
        // In a real app, you would filter by category/subcategory
        const data = await dbOperations.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [categorySlug, subcategorySlug]);

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {subcategorySlug 
            ? `${subcategorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
            : `${categorySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
          }
        </h1>
        <p className="text-gray-600 mt-1">{products.length} items found</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image_url}
                alt={product.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              {product.discountedPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                  -{calculateDiscount(product.price, product.discountedPrice)}%
                </div>
              )}
              <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 truncate">{product.title}</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-blue-600 font-semibold">
                  {formatPrice(product.discountedPrice || product.price)}
                </span>
                {product.discountedPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">{product.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;