/**
 * Product types
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription?: string;
  images: string[];
  specifications: ProductSpecification;
  applications: string[];
  features?: string[];
}

export interface ProductSpecification {
  moc?: string[]; // Material of Construction
  lineSize?: string;
  rating?: string;
  innerElement?: string;
  type?: string;
  configuration?: string;
  connectionType?: string;
  hydroTestPressure?: string;
  flowRate?: string;
  design?: string;
  size?: string;
  outerDiameter?: string;
  innerDiameter?: string;
  micronRating?: string;
  media?: string[];
  variant?: string;
  filterRating?: string;
  valves?: string;
}

/**
 * Service types
 */
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  features: string[];
  industries: string[];
}

/**
 * Client types
 */
export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

/**
 * Certification types
 */
export interface Certification {
  id: string;
  name: string;
  description: string;
  logo: string;
  validUntil?: string;
  certificateNumber?: string;
}

/**
 * Navigation types
 */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/**
 * Contact form types
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
  productInterest?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productId?: string;
  productName?: string;
  quantity?: string;
  specifications?: string;
  message?: string;
}

