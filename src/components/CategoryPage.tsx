import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CategoryFilters from './CategoryFilters';
import CategorySelector from './CategorySelector';
import FeaturedListings from './FeaturedListings';
import CarSubcategoryBar from './CarSubcategoryBar';
import ElectronicsCategoryHeader from './ElectronicsCategoryHeader';
import { ChevronRight } from 'lucide-react';

interface CategoryBreadcrumb {
  name: string;
  slug: string;
  count?: number;
}

const getCategoryBreadcrumbs = (categorySlug?: string, subcategorySlug?: string): CategoryBreadcrumb[] => {
  const breadcrumbs: CategoryBreadcrumb[] = [];
  
  if (categorySlug === 'vehicles') {
    breadcrumbs.push({ name: 'Vehicles', slug: 'vehicles', count: 83682 });
    if (subcategorySlug === 'cars') {
      breadcrumbs.push({ name: 'Cars', slug: 'cars', count: 27101 });
    }
  } else if (categorySlug === 'electronics') {
    breadcrumbs.push({ name: 'Electronics', slug: 'electronics', count: 120163 });
    if (subcategorySlug === 'computers-laptops') {
      breadcrumbs.push({ name: 'Laptops & Computers', slug: 'computers-laptops', count: 14332 });
    }
  }

  return breadcrumbs;
};

const CategoryPage = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const breadcrumbs = getCategoryBreadcrumbs(categorySlug, subcategorySlug);
  const isElectronics = categorySlug === 'electronics';

  return (
    <div>
      {isElectronics && <ElectronicsCategoryHeader />}

      {/* Category-specific subcategory bar */}
      {categorySlug === 'vehicles' && subcategorySlug === 'cars' && <CarSubcategoryBar />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Filters Column */}
          <div className="w-64 flex-shrink-0 space-y-6">
            {/* Category Selector */}
            <CategorySelector />
            
            {/* Filters */}
            <CategoryFilters 
              category={categorySlug || 'vehicles'} 
              subcategory={subcategorySlug}
            />
          </div>

          {/* Listings */}
          <div className="flex-1">
            <FeaturedListings 
              category={categorySlug}
              subcategory={subcategorySlug}
              showTrending={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;