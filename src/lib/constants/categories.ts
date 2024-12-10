import { ShoppingBag, Car, Home, Shirt, Tv, Flower2, Baby, Gavel, Palette, UtensilsCrossed, Leaf, Briefcase, GraduationCap, Tag, MoreHorizontal } from 'lucide-react';
import type { Category } from '../types/category';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Electronics & Appliances',
    slug: 'electronics-appliances',
    icon: Tv,
    subcategories: [
      { name: 'Phones & Tablets', slug: 'phones-tablets' },
      { name: 'Computers & Laptops', slug: 'computers-laptops' },
      { name: 'TV & Audio', slug: 'tv-audio' },
      { name: 'Gaming', slug: 'gaming' },
      { name: 'Cameras', slug: 'cameras' },
      { name: 'Kitchen Appliances', slug: 'kitchen-appliances' },
      { name: 'Other Electronics', slug: 'other-electronics' }
    ]
  },
  {
    id: 2,
    name: 'Hot Deals',
    slug: 'hot-deals',
    icon: Tag,
    subcategories: [
      { name: 'Daily Deals', slug: 'daily-deals' },
      { name: 'Flash Sales', slug: 'flash-sales' },
      { name: 'Clearance', slug: 'clearance' },
      { name: 'Bundle Offers', slug: 'bundle-offers' },
      { name: 'Season Sales', slug: 'season-sales' }
    ]
  },
  {
    id: 3,
    name: 'Vehicles & Automotive',
    slug: 'vehicles-automotive',
    icon: Car,
    subcategories: [
      { name: 'Cars', slug: 'cars' },
      { name: 'Motorcycles', slug: 'motorcycles' },
      { name: 'Auto Parts', slug: 'auto-parts' },
      { name: 'Trucks & Trailers', slug: 'trucks-trailers' },
      { name: 'Vehicle Services', slug: 'vehicle-services' }
    ]
  },
  {
    id: 4,
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    icon: Home,
    subcategories: [
      { name: 'Houses for Sale', slug: 'houses-sale' },
      { name: 'Houses for Rent', slug: 'houses-rent' },
      { name: 'Land & Plots', slug: 'land-plots' },
      { name: 'Construction Materials', slug: 'construction-materials' },
      { name: 'Property Services', slug: 'property-services' }
    ]
  },
  {
    id: 5,
    name: 'Fashion',
    slug: 'fashion',
    icon: Shirt,
    subcategories: [
      { name: 'Men\'s Clothing', slug: 'mens-clothing' },
      { name: 'Women\'s Clothing', slug: 'womens-clothing' },
      { name: 'Shoes', slug: 'shoes' },
      { name: 'Bags & Accessories', slug: 'bags-accessories' },
      { name: 'Jewelry & Watches', slug: 'jewelry-watches' }
    ]
  },
  {
    id: 6,
    name: 'Home & Garden',
    slug: 'home-garden',
    icon: Flower2,
    subcategories: [
      { name: 'Furniture', slug: 'furniture' },
      { name: 'Home Decor', slug: 'home-decor' },
      { name: 'Garden', slug: 'garden' },
      { name: 'Home Improvement', slug: 'home-improvement' },
      { name: 'Household Items', slug: 'household-items' }
    ]
  },
  {
    id: 7,
    name: 'Health & Beauty',
    slug: 'health-beauty',
    icon: ShoppingBag,
    subcategories: [
      { name: 'Skincare', slug: 'skincare' },
      { name: 'Makeup', slug: 'makeup' },
      { name: 'Hair Care', slug: 'hair-care' },
      { name: 'Health Products', slug: 'health-products' },
      { name: 'Medical Equipment', slug: 'medical-equipment' }
    ]
  },
  {
    id: 8,
    name: 'Baby & Kids',
    slug: 'baby-kids',
    icon: Baby,
    subcategories: [
      { name: 'Baby Clothing', slug: 'baby-clothing' },
      { name: 'Baby Gear', slug: 'baby-gear' },
      { name: 'Toys', slug: 'toys' },
      { name: 'Children\'s Clothing', slug: 'childrens-clothing' },
      { name: 'School Supplies', slug: 'school-supplies' }
    ]
  },
  {
    id: 9,
    name: 'Arts & Culture',
    slug: 'arts-culture',
    icon: Palette,
    subcategories: [
      { name: 'Art Supplies', slug: 'art-supplies' },
      { name: 'Musical Instruments', slug: 'musical-instruments' },
      { name: 'Books & Magazines', slug: 'books-magazines' },
      { name: 'Collectibles', slug: 'collectibles' },
      { name: 'Handmade Items', slug: 'handmade-items' }
    ]
  },
  {
    id: 10,
    name: 'Food & Beverages',
    slug: 'food-beverages',
    icon: UtensilsCrossed,
    subcategories: [
      { name: 'Groceries', slug: 'groceries' },
      { name: 'Beverages', slug: 'beverages' },
      { name: 'Restaurant Equipment', slug: 'restaurant-equipment' },
      { name: 'Specialty Foods', slug: 'specialty-foods' },
      { name: 'Catering Services', slug: 'catering-services' }
    ]
  },
  {
    id: 11,
    name: 'Agriculture & Pets',
    slug: 'agriculture-pets',
    icon: Leaf,
    subcategories: [
      { name: 'Farm Equipment', slug: 'farm-equipment' },
      { name: 'Livestock', slug: 'livestock' },
      { name: 'Pet Supplies', slug: 'pet-supplies' },
      { name: 'Seeds & Plants', slug: 'seeds-plants' },
      { name: 'Farm Products', slug: 'farm-products' }
    ]
  },
  {
    id: 12,
    name: 'Jobs & Services',
    slug: 'jobs-services',
    icon: Briefcase,
    subcategories: [
      { name: 'Job Listings', slug: 'job-listings' },
      { name: 'Professional Services', slug: 'professional-services' },
      { name: 'Skilled Trade Services', slug: 'skilled-trade-services' },
      { name: 'Domestic Services', slug: 'domestic-services' },
      { name: 'Business Services', slug: 'business-services' }
    ]
  },
  {
    id: 13,
    name: 'Auctions',
    slug: 'auctions',
    icon: Gavel,
    subcategories: [
      { name: 'Live Auctions', slug: 'live-auctions' },
      { name: 'Upcoming Auctions', slug: 'upcoming-auctions' },
      { name: 'Closed Auctions', slug: 'closed-auctions' },
      { name: 'Featured Auctions', slug: 'featured-auctions' },
      { name: 'Property Auctions', slug: 'property-auctions' }
    ]
  },
  {
    id: 14,
    name: 'Others',
    slug: 'others',
    icon: MoreHorizontal,
    subcategories: [
      { name: 'Miscellaneous', slug: 'miscellaneous' },
      { name: 'Vintage & Antiques', slug: 'vintage-antiques' },
      { name: 'Office Equipment', slug: 'office-equipment' },
      { name: 'Industrial Equipment', slug: 'industrial-equipment' },
      { name: 'Other Categories', slug: 'other-categories' }
    ]
  }
];