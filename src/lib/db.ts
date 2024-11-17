// For now, we'll use in-memory storage since we don't have a proper database file
let products: any[] = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max - 256GB',
    description: 'Brand new, sealed in box',
    price: 3500000,
    discountedPrice: 3200000,
    location: 'Kampala',
    category_id: 3,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 2,
    title: 'Modern 3 Bedroom Apartment',
    description: 'Luxury apartment with great view',
    price: 1200000,
    discountedPrice: 1000000,
    location: 'Entebbe',
    category_id: 2,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 3,
    title: 'Toyota Land Cruiser 2022',
    description: 'Pristine condition, low mileage',
    price: 85000000,
    discountedPrice: 79000000,
    location: 'Kampala',
    category_id: 1,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1675707295681-de5ac4670ff6?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 4,
    title: 'MacBook Pro M2 - 1TB',
    description: 'Latest model, space gray',
    price: 4500000,
    discountedPrice: 4200000,
    location: 'Kampala',
    category_id: 4,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 5,
    title: 'Designer Sofa Set',
    description: 'Italian leather, 5-seater',
    price: 2800000,
    discountedPrice: 2400000,
    location: 'Jinja',
    category_id: 5,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 6,
    title: 'Samsung 75" QLED TV',
    description: '4K Ultra HD Smart TV',
    price: 5500000,
    discountedPrice: 4800000,
    location: 'Kampala',
    category_id: 4,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 7,
    title: 'Luxury Office Space',
    description: 'Prime location, fully furnished',
    price: 3500000,
    discountedPrice: 3200000,
    location: 'Kampala',
    category_id: 2,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 8,
    title: 'Canon EOS R5 Camera',
    description: 'Professional mirrorless camera',
    price: 7200000,
    discountedPrice: 6500000,
    location: 'Entebbe',
    category_id: 4,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 9,
    title: 'Yamaha Grand Piano',
    description: 'Concert quality instrument',
    price: 12000000,
    discountedPrice: 10500000,
    location: 'Kampala',
    category_id: 5,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 10,
    title: 'Rolex Submariner',
    description: 'Brand new, full set',
    price: 25000000,
    discountedPrice: 22000000,
    location: 'Kampala',
    category_id: 6,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 11,
    title: 'Tesla Model 3',
    description: '2023 model, fully loaded',
    price: 95000000,
    discountedPrice: 89000000,
    location: 'Kampala',
    category_id: 1,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  },
  {
    id: 12,
    title: 'Gaming PC Setup',
    description: 'RTX 4090, i9 processor',
    price: 8500000,
    discountedPrice: 7800000,
    location: 'Kampala',
    category_id: 4,
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  }
];

let auctions: any[] = [
  {
    id: 1,
    title: 'Vintage Rolex Watch',
    description: 'Rare 1956 Rolex Submariner',
    startingPrice: 15000000,
    currentBid: 16500000,
    endTime: new Date(Date.now() + 172800000), // 48 hours from now
    location: 'Kampala',
    user_id: 1,
    image_url: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=400',
    status: 'active'
  }
];

const categories = [
  { id: 1, name: 'Vehicles', slug: 'vehicles' },
  { id: 2, name: 'Property', slug: 'property' },
  { id: 3, name: 'Mobile Phones', slug: 'mobile-phones' },
  { id: 4, name: 'Electronics', slug: 'electronics' },
  { id: 5, name: 'Home & Garden', slug: 'home-garden' },
  { id: 6, name: 'Fashion', slug: 'fashion' },
  { id: 7, name: 'Jobs', slug: 'jobs' },
  { id: 8, name: 'Services', slug: 'services' },
  { id: 9, name: 'Auctions', slug: 'auctions' }
];

export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  location: string;
  category_id: number;
  user_id: number;
  image_url: string;
  status?: string;
}

export interface Auction {
  id?: number;
  title: string;
  description: string;
  startingPrice: number;
  currentBid: number;
  endTime: Date;
  location: string;
  user_id: number;
  image_url: string;
  status?: string;
}

export const dbOperations = {
  async createProduct(product: Product) {
    const newProduct = {
      ...product,
      id: products.length + 1,
      status: 'active'
    };
    products.push(newProduct);
    return newProduct;
  },

  async createAuction(auction: Auction) {
    const newAuction = {
      ...auction,
      id: auctions.length + 1,
      status: 'active'
    };
    auctions.push(newAuction);
    return newAuction;
  },

  async placeBid(auctionId: number, bidAmount: number) {
    const auction = auctions.find(a => a.id === auctionId);
    if (!auction) throw new Error('Auction not found');
    if (bidAmount <= auction.currentBid) throw new Error('Bid must be higher than current bid');
    if (new Date() > auction.endTime) throw new Error('Auction has ended');
    
    auction.currentBid = bidAmount;
    return auction;
  },

  async getProducts() {
    return products.map(product => ({
      ...product,
      category_name: categories.find(c => c.id === product.category_id)?.name,
      username: 'demo_user'
    }));
  },

  async getAuctions() {
    return auctions.map(auction => ({
      ...auction,
      username: 'demo_user'
    }));
  },

  async getProductsByCategory(categoryId: number) {
    return products
      .filter(p => p.category_id === categoryId)
      .map(product => ({
        ...product,
        category_name: categories.find(c => c.id === product.category_id)?.name,
        username: 'demo_user'
      }));
  },

  async getCategories() {
    return categories;
  }
};