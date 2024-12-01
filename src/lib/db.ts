// Category-specific database and types
export interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number | null;
  location: string;
  category_id: number;
  subcategory: string;
  user_id: number;
  image_url: string;
  attributes: Record<string, any>;
}

export interface CategoryListings {
  [category: string]: {
    [subcategory: string]: Listing[];
  };
}

export const categoryListings: CategoryListings = {
  vehicles: {
    cars: [
      {
        id: 1,
        title: 'Toyota Land Cruiser V8 2022',
        description: 'Brand new, fully loaded, sunroof, leather seats',
        price: 350000000,
        discountedPrice: 340000000,
        location: 'Kampala',
        category_id: 1,
        subcategory: 'cars',
        user_id: 1,
        image_url: 'https://images.unsplash.com/photo-1675707295681-de5ac4670ff6?auto=format&fit=crop&q=80&w=400',
        attributes: {
          make: 'Toyota',
          model: 'Land Cruiser',
          year: 2022,
          mileage: 0,
          transmission: 'Automatic',
          fuel: 'Petrol',
          condition: 'Brand New',
          color: 'White',
          engineSize: '4.6L'
        }
      }
    ]
  },
  electronics: {
    'computers-laptops': [
      {
        id: 1,
        title: 'Dell XPS 15 (2023)',
        description: 'Intel Core i9, 32GB RAM, 1TB SSD, RTX 4070',
        price: 6500000,
        discountedPrice: 6200000,
        location: 'Kampala',
        category_id: 3,
        subcategory: 'computers-laptops',
        user_id: 1,
        image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400',
        attributes: {
          brand: 'Dell',
          model: 'XPS 15',
          processor: 'Intel Core i9-13900H',
          ram: '32GB',
          storage: '1TB SSD',
          gpu: 'NVIDIA RTX 4070',
          condition: 'Brand New'
        }
      }
    ],
    'computer-monitors': [
      {
        id: 2,
        title: 'Samsung Odyssey G7 32" Gaming Monitor',
        description: '240Hz, 1440p, Curved Gaming Monitor',
        price: 2200000,
        discountedPrice: null,
        location: 'Kampala',
        category_id: 3,
        subcategory: 'computer-monitors',
        user_id: 1,
        image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400',
        attributes: {
          brand: 'Samsung',
          model: 'Odyssey G7',
          size: '32"',
          resolution: '2560x1440',
          refreshRate: '240Hz',
          panel: 'VA',
          condition: 'Brand New'
        }
      }
    ]
  }
};

// Category-specific filters
export interface FilterOption {
  label: string;
  count?: number;
  range?: [number | null, number | null];
}

export interface Filter {
  id: string;
  label: string;
  type: 'range' | 'select' | 'multiselect';
  min?: number;
  max?: number;
  options?: FilterOption[];
  presets?: FilterOption[];
}

export interface CategoryFilters {
  [category: string]: {
    [subcategory: string]: Filter[];
  };
}

export const categoryFilters: CategoryFilters = {
  electronics: {
    'computers-laptops': [
      {
        id: 'computers-laptops-price',
        label: 'Price Range',
        type: 'range',
        min: 500000,
        max: 10000000,
        presets: [
          { label: 'Under 1M', range: [0, 1000000] },
          { label: '1M - 2M', range: [1000000, 2000000] },
          { label: '2M - 5M', range: [2000000, 5000000] },
          { label: 'Above 5M', range: [5000000, null] }
        ]
      },
      {
        id: 'computers-laptops-brand',
        label: 'Brand',
        type: 'select',
        options: [
          { label: 'Dell', count: 2164 },
          { label: 'HP', count: 1922 },
          { label: 'Lenovo', count: 1471 },
          { label: 'Apple', count: 937 },
          { label: 'Acer', count: 909 }
        ]
      },
      {
        id: 'computers-laptops-condition',
        label: 'Condition',
        type: 'multiselect',
        options: [
          { label: 'Brand New', count: 1221 },
          { label: 'Used - Like New', count: 2642 },
          { label: 'Used - Good', count: 3526 }
        ]
      }
    ],
    'computer-monitors': [
      {
        id: 'computer-monitors-price',
        label: 'Price Range',
        type: 'range',
        min: 100000,
        max: 3000000,
        presets: [
          { label: 'Under 300K', range: [0, 300000] },
          { label: '300K - 500K', range: [300000, 500000] },
          { label: '500K - 1M', range: [500000, 1000000] },
          { label: 'Above 1M', range: [1000000, null] }
        ]
      },
      {
        id: 'computer-monitors-brand',
        label: 'Brand',
        type: 'select',
        options: [
          { label: 'Samsung', count: 864 },
          { label: 'LG', count: 722 },
          { label: 'Dell', count: 471 },
          { label: 'HP', count: 337 },
          { label: 'Acer', count: 209 }
        ]
      },
      {
        id: 'computer-monitors-size',
        label: 'Screen Size',
        type: 'multiselect',
        options: [
          { label: '19-22"', count: 421 },
          { label: '23-25"', count: 642 },
          { label: '27"', count: 526 },
          { label: '32"', count: 321 },
          { label: '34" & Above', count: 254 }
        ]
      }
    ]
  }
};

export const getListings = (category?: string, subcategory?: string): Listing[] => {
  if (!category) return [];
  if (!subcategory) {
    return Object.values(categoryListings[category] || {}).flat();
  }
  return categoryListings[category]?.[subcategory] || [];
};

export const getFilters = (category?: string, subcategory?: string): Filter[] => {
  if (!category) return [];
  if (!subcategory) {
    return Object.values(categoryFilters[category] || {}).flat();
  }
  return categoryFilters[category]?.[subcategory] || [];
};