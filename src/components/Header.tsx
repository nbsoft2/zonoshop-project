import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Heart, MessageCircle, User, MapPin } from 'lucide-react';
import CategoryNav from './CategoryNav';

interface HeaderProps {
  onShowAuth: () => void;
  onShowAddProduct: () => void;
}

function Header({ onShowAuth, onShowAddProduct }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center h-16 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-8">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white">ZonoShop</span>
            </Link>

            {/* Location */}
            <button className="flex items-center px-2 py-1 text-sm hover:border border-transparent hover:border-white rounded-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300">Deliver to</span>
                <span className="font-bold">Uganda</span>
              </div>
            </button>

            {/* Search */}
            <div className="flex flex-1 mx-6">
              <div className="flex-1 flex">
                <div className="relative flex-1">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search ZonoShop"
                  />
                  <button className="absolute right-0 top-0 h-full px-4 bg-orange-400 hover:bg-orange-500 rounded-r-md">
                    <Search className="h-5 w-5 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Navigation */}
            <nav className="flex items-center space-x-6">
              <button className="flex items-center text-white hover:text-blue-400">
                <Heart className="h-5 w-5 mr-1" />
                <span>Saved</span>
              </button>
              <button className="flex items-center text-white hover:text-blue-400">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>Messages</span>
              </button>
              <button 
                onClick={onShowAuth}
                className="flex items-center text-white hover:text-blue-400"
              >
                <User className="h-5 w-5 mr-1" />
                <span>Sign In</span>
              </button>
              <button
                onClick={onShowAddProduct}
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                SELL
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryNav />
    </div>
  );
}

export default Header;