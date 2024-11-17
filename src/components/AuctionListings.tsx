import React from 'react';
import { Heart, Clock } from 'lucide-react';
import { dbOperations } from '../lib/db';
import type { Auction } from '../lib/db';

function formatPrice(price: number): string {
  return `UGX ${price.toLocaleString()}`;
}

function getTimeLeft(endTime: Date): string {
  const now = new Date();
  const timeLeft = endTime.getTime() - now.getTime();
  
  if (timeLeft <= 0) return 'Ended';
  
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m left`;
}

function AuctionListings() {
  const [auctions, setAuctions] = React.useState<Auction[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadAuctions = async () => {
      try {
        const data = await dbOperations.getAuctions();
        setAuctions(data);
      } catch (error) {
        console.error('Error loading auctions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAuctions();
  }, []);

  const handleBid = async (auctionId: number) => {
    const auction = auctions.find(a => a.id === auctionId);
    if (!auction) return;

    const bidAmount = prompt(`Enter your bid amount (current bid: ${formatPrice(auction.currentBid)})`);
    if (!bidAmount) return;

    const amount = parseInt(bidAmount.replace(/[^0-9]/g, ''));
    if (isNaN(amount) || amount <= auction.currentBid) {
      alert('Please enter a valid amount higher than the current bid');
      return;
    }

    try {
      const updatedAuction = await dbOperations.placeBid(auctionId, amount);
      setAuctions(auctions.map(a => a.id === auctionId ? updatedAuction : a));
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to place bid');
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading auctions...</div>;
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Live Auctions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {auctions.map((auction) => (
            <div key={auction.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={auction.image_url}
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {getTimeLeft(new Date(auction.endTime))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 truncate">{auction.title}</h3>
                <div className="mb-2">
                  <div className="text-gray-600 text-sm mb-1">Current Bid:</div>
                  <span className="text-blue-600 font-bold text-lg">
                    {formatPrice(auction.currentBid)}
                  </span>
                  <div className="text-gray-500 text-sm mt-1">
                    Starting at {formatPrice(auction.startingPrice)}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">{auction.location}</p>
                <button
                  onClick={() => handleBid(auction.id!)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuctionListings;