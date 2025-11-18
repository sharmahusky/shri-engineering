/**
 * Navigation configuration and constants
 */

import { NavItem, SocialLink, ContactInfo } from '@/types/common';

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Filter Cartridges',
        href: '/products/filter-cartridges',
      },
      {
        label: 'Filter Bags',
        href: '/products/filter-bags',
      },
      {
        label: 'Industrial Equipment',
        href: '/products/industrial-equipment',
      },
      {
        label: 'Engineering Services',
        href: '/products/engineering-services',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_NAVIGATION = {
  products: [
    { label: 'Filter Cartridges', href: '/products/filter-cartridges' },
    { label: 'Filter Bags', href: '/products/filter-bags' },
    { label: 'Industrial Equipment', href: '/products/industrial-equipment' },
    { label: 'Engineering Services', href: '/products/engineering-services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'Terms', href: '/terms' },
  ],
};

export const COMPANY_INFO: ContactInfo = {
  email: 'sales@sriengineering.org',
  phone: '+91 72288 31722',
  address: 'Shri Engineering',
  country: 'India',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://facebook.com/shriengineering',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/company/shriengineering',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/shriengineering',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/shriengineering',
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'filter-cartridges',
    name: 'Filter Cartridges',
    slug: 'filter-cartridges',
    href: '/products/filter-cartridges',
  },
  {
    id: 'filter-bags',
    name: 'Filter Bags',
    slug: 'filter-bags',
    href: '/products/filter-bags',
  },
  {
    id: 'industrial-equipment',
    name: 'Industrial Equipment',
    slug: 'industrial-equipment',
    href: '/products/industrial-equipment',
  },
  {
    id: 'engineering-services',
    name: 'Engineering Services',
    slug: 'engineering-services',
    href: '/products/engineering-services',
  },
];

export const BREADCRUMB_HOME = {
  label: 'Home',
  href: '/',
};

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  BLOG: '/blog',
  FAQ: '/faq',
  TERMS: '/terms',
  PRIVACY: '/privacy',
} as const;

