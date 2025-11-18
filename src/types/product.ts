/**
 * Product-related TypeScript types and interfaces
 */

export type ProductCategory =
  | 'filter-cartridges'
  | 'filter-bags'
  | 'industrial-equipment'
  | 'engineering-services';

export type ProductSubcategory =
  | 'cleanable-cartridges'
  | 'disposable-cartridges'
  | 'standard-filter-bags'
  | 'specialty-filter-bags'
  | 'reactor-tanks'
  | 'conical-storage-tanks'
  | 'conical-vessels'
  | 'pipe-line-systems'
  | 'sheet-fixing-work'
  | 'pan-disc-granulator'
  | 'custom-solutions';

export interface ProductSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProductApplication {
  name: string;
  description: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  slug?: string;
  category: ProductCategory;
  subcategory?: ProductSubcategory;
  description: string;
  shortDescription?: string;
  image: ProductImage | string;
  gallery?: ProductImage[];
  specifications: ProductSpecification[];
  applications: (ProductApplication | string)[];
  features?: string[];
  benefits?: string[];
  technicalData?: Record<string, string>;
  relatedProducts?: string[]; // Product IDs
  inquiryForm?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductCategoryDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: ProductImage;
  products: Product[];
  icon?: string;
}

export interface ProductFilter {
  category?: ProductCategoryDetail;
  subcategory?: ProductSubcategory;
  search?: string;
  sortBy?: 'name' | 'newest' | 'popular';
  page?: number;
  pageSize?: number;
}

export interface ProductInquiry {
  id?: string;
  productId: string;
  productName: string;
  customerName: string;
  email: string;
  phone: string;
  message: string;
  quantity?: string;
  specifications?: string;
  createdAt?: Date;
}

export interface ProductReview {
  id: string;
  productId: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  author: string;
  verified: boolean;
  createdAt: Date;
}

export interface ProductStats {
  totalProducts: number;
  totalCategories: number;
  totalInquiries: number;
  averageRating: number;
}

export interface CategoryStats {
  category: ProductCategory;
  productCount: number;
  inquiryCount: number;
}

