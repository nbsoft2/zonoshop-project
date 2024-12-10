import { LucideIcon, ShoppingBag, Car, Home, Shirt, Tv, Flower2, Baby, 
  Gavel, Palette, UtensilsCrossed, Leaf, Briefcase, 
  GraduationCap, Tag, MoreHorizontal } from 'lucide-react';

export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  icon: LucideIcon;
  slug: string;
  subcategories: Subcategory[];
}

export const CATEGORIES: Category[][] = [
  // Row 1
  [
    {
      name: 'Electronics & Appliances',
      icon: Tv,
      slug: 'electronics-appliances',
      subcategories: [
        { name: 'Phones & Tablets', slug: 'phones-tablets' },
        { name: 'Computers & Laptops', slug: 'computers-laptops' },
        { name: 'TV & Audio', slug: 'tv-audio' },
        { name: 'Gaming', slug: 'gaming' },
        { name: 'Kitchen Appliances', slug: 'kitchen-appliances' }
      ]
    },
    {
      name: 'Vehicles & Automotive',
      icon: Car,
      slug: 'vehicles-automotive',
      subcategories: [
        { name: 'Cars', slug: 'cars' },
        { name: 'Motorcycles', slug: 'motorcycles' },
        { name: 'Auto Parts', slug: 'auto-parts' },
        { name: 'Commercial Vehicles', slug: 'commercial-vehicles' }
      ]
    },
    {
      name: 'Real Estate & Construction',
      icon: Home,
      slug: 'real-estate-construction',
      subcategories: [
        { name: 'Houses for Sale', slug: 'houses-sale' },
        { name: 'Apartments for Rent', slug: 'apartments-rent' },
        { name: 'Land & Plots', slug: 'land-plots' },
        { name: 'Commercial Property', slug: 'commercial-property' }
      ]
    },
    {
      name: 'Fashion',
      icon: Shirt,
      slug: 'fashion',
      subcategories: [
        { name: "Men's Fashion", slug: 'mens-fashion' },
        { name: "Women's Fashion", slug: 'womens-fashion' },
        { name: 'Jewelry & Watches', slug: 'jewelry-watches' },
        { name: 'Bags & Shoes', slug: 'bags-shoes' }
      ]
    },
    {
      name: 'Home & Garden',
      icon: Flower2,
      slug: 'home-garden',
      subcategories: [
        { name: 'Furniture', slug: 'furniture' },
        { name: 'Home Decor', slug: 'home-decor' },
        { name: 'Garden', slug: 'garden' },
        { name: 'Home Improvement', slug: 'home-improvement' }
      ]
    },
    {
      name: 'Health & Beauty',
      icon: ShoppingBag,
      slug: 'health-beauty',
      subcategories: [
        { name: 'Skincare', slug: 'skincare' },
        { name: 'Makeup', slug: 'makeup' },
        { name: 'Hair Care', slug: 'hair-care' },
        { name: 'Health Products', slug: 'health-products' }
      ]
    },
    {
      name: 'Baby & Kids',
      icon: Baby,
      slug: 'baby-kids',
      subcategories: [
        { name: 'Baby Clothing', slug: 'baby-clothing' },
        { name: 'Baby Gear', slug: 'baby-gear' },
        { name: 'Toys', slug: 'toys' },
        { name: 'School Supplies', slug: 'school-supplies' }
      ]
    }
  ],
  // Row 2
  [
    {
      name: 'Arts & Culture',
      icon: Palette,
      slug: 'arts-culture',
      subcategories: [
        { name: 'Art Supplies', slug: 'art-supplies' },
        { name: 'Musical Instruments', slug: 'musical-instruments' },
        { name: 'Books & Magazines', slug: 'books-magazines' },
        { name: 'Collectibles', slug: 'collectibles' }
      ]
    },
    {
      name: 'Food & Beverages',
      icon: UtensilsCrossed,
      slug: 'food-beverages',
      subcategories: [
        { name: 'Groceries', slug: 'groceries' },
        { name: 'Beverages', slug: 'beverages' },
        { name: 'Restaurant Equipment', slug: 'restaurant-equipment' },
        { name: 'Specialty Foods', slug: 'specialty-foods' }
      ]
    },
    {
      name: 'Agriculture & Pets',
      icon: Leaf,
      slug: 'agriculture-pets',
      subcategories: [
        { name: 'Farm Equipment', slug: 'farm-equipment' },
        { name: 'Livestock', slug: 'livestock' },
        { name: 'Pet Supplies', slug: 'pet-supplies' },
        { name: 'Seeds & Plants', slug: 'seeds-plants' }
      ]
    },
    {
      name: 'Jobs & Services',
      icon: Briefcase,
      slug: 'jobs-services',
      subcategories: [
        { name: 'Job Listings', slug: 'job-listings' },
        { name: 'Professional Services', slug: 'professional-services' },
        { name: 'Skilled Trade Services', slug: 'skilled-trade-services' },
        { name: 'Business Services', slug: 'business-services' }
      ]
    },
    {
      name: 'Education & Stationery',
      icon: GraduationCap,
      slug: 'education',
      subcategories: [
        { name: 'Textbooks', slug: 'textbooks' },
        { name: 'Office Supplies', slug: 'office-supplies' },
        { name: 'Online Courses', slug: 'online-courses' },
        { name: 'Study Materials', slug: 'study-materials' }
      ]
    },
    {
      name: 'Auction',
      icon: Gavel,
      slug: 'auctions',
      subcategories: [
        { name: 'Live Auctions', slug: 'live-auctions' },
        { name: 'Upcoming Auctions', slug: 'upcoming-auctions' },
        { name: 'Property Auctions', slug: 'property-auctions' },
        { name: 'Vehicle Auctions', slug: 'vehicle-auctions' }
      ]
    },
    {
      name: 'Hot Deals',
      icon: Tag,
      slug: 'hot-deals',
      subcategories: [
        { name: 'Daily Deals', slug: 'daily-deals' },
        { name: 'Flash Sales', slug: 'flash-sales' },
        { name: 'Clearance', slug: 'clearance' },
        { name: 'Bundle Offers', slug: 'bundle-offers' }
      ]
    },
    {
      name: 'Others',
      icon: MoreHorizontal,
      slug: 'others',
      subcategories: [
        { name: 'Miscellaneous', slug: 'miscellaneous' },
        { name: 'Vintage & Antiques', slug: 'vintage-antiques' },
        { name: 'Office Equipment', slug: 'office-equipment' },
        { name: 'Industrial Equipment', slug: 'industrial-equipment' }
      ]
    }
  ]
];