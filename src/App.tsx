import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, MessageCircle, User, Menu, Plus, Gavel } from 'lucide-react';
import CategoryBar from './components/CategoryBar';
import FeaturedListings from './components/FeaturedListings';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import AuctionListings from './components/AuctionListings';
import CategoryPage from './components/CategoryPage';

function HomePage() {
  const handleSubcategorySelect = (category: string, subcategory: string) => {
    console.log(`Selected ${subcategory} in ${category}`);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="bg-white shadow-sm py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="I am looking for..."
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[300px]">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Buy & Sell Anything in Uganda</h1>
            <p className="text-lg mb-6">Find amazing deals on electronics, fashion, home goods, and more!</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg text-base font-semibold hover:bg-gray-100">
              Start Shopping
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Categories and Listings */}
        <div className="flex gap-6">
          {/* Categories Column */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-32">
              <CategoryBar onSubcategorySelect={handleSubcategorySelect} />
            </div>
          </div>
          
          {/* Listings Column */}
          <div className="flex-1">
            <FeaturedListings />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-8">
        <HowItWorks />
      </div>
    </>
  );
}

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-blue-600">ZonoShop</span>
              </Link>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => navigate('/auctions')}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Gavel className="h-5 w-5 mr-1" />
                <span>Auctions</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                <Heart className="h-5 w-5 mr-1" />
                <span>Saved</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>Messages</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                <User className="h-5 w-5 mr-1" />
                <span>Account</span>
              </button>
              <button
                onClick={() => setShowAddProduct(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Plus className="h-5 w-5 mr-1" />
                SELL
              </button>
            </nav>
            
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auctions" element={<AuctionListings />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/category/:categorySlug/:subcategorySlug" element={<CategoryPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;