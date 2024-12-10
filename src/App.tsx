import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import CategoryPage from './components/CategoryPage';
import AuthModal from './components/AuthModal';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hot Deals Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Hot Deals</h2>
            <ProductGrid />
          </section>

          {/* Recent Listings */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Recent Listings</h2>
            <ProductGrid />
          </section>
        </div>
      </div>

      {/* How It Works */}
      <HowItWorks />
    </div>
  );
}

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="top-center" />
      
      <Header 
        onShowAuth={() => setShowAuthModal(true)}
        onShowAddProduct={() => setShowAddProduct(true)}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/category/:categorySlug/:subcategorySlug" element={<CategoryPage />} />
        </Routes>
      </main>

      <Footer />

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
}

export default App;