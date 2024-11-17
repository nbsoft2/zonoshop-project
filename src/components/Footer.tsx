import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {/* About Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">About ZonoShop</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:support@zonoshop.com" className="hover:text-white flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    support@zonoshop.com
                  </a>
                </li>
                <li>
                  <a href="tel:+256700000000" className="hover:text-white flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +256 700 000 000
                  </a>
                </li>
                <li><Link to="/safety-tips" className="hover:text-white">Safety Tips</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16">
            {/* Our Apps Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Our Apps</h3>
              <div className="space-y-3">
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on App Store" 
                    className="h-8"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-8"
                  />
                </a>
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-1 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm w-40"
                />
                <button className="px-3 py-1 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              © {new Date().getFullYear()} ZonoShop. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
              <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
              <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
              <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;