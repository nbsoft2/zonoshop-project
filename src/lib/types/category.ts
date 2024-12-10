import { LucideIcon } from 'lucide-react';

export interface Subcategory {
  name: string;
  slug: string;
  count?: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: LucideIcon;
  subcategories: Subcategory[];
  count?: number;
}