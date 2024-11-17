import React from 'react';
import { Heart } from 'lucide-react';
import { dbOperations } from '../lib/db';

function formatPrice(price: number): string {
  return `UGX ${price.toLocaleString()}`;
}

function calculateDiscount(price: number, discountedPrice: number): number {
  return Math.round(((price - discountedPrice) / price) * 100);
}

function FeaturedListings() {
  const [listings, setListings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await dbOperations.getProducts();
        setListings(data);
      } catch (error) {
        console.error('Error loading listings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading listings...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Trending Ads</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {listings.map((listing) => (
            <div key={listing.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={listing.image_url}
                  alt={listing.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {listing.discountedPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                    -{calculateDiscount(listing.price, listing.discountedPrice)}%
                  </div>
                )}
                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">{listing.title}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-blue-600 font-semibold">
                    {formatPrice(listing.discountedPrice || listing.price)}
                  </span>
                  {listing.discountedPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(listing.price)}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-500">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedListings;