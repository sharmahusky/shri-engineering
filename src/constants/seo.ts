/**
 * SEO metadata and constants
 */

import { SEOMetadata } from '@/types/common';

export const SITE_NAME = 'Shri Engineering';
export const SITE_URL = 'https://sriengineering.org';
export const SITE_DESCRIPTION =
  'Industrial filtration solutions and equipment manufacturing. Filter cartridges, filter bags, reactor tanks, and engineering services.';

export const DEFAULT_SEO: SEOMetadata = {
  title: `${SITE_NAME} - Industrial Filtration & Equipment Solutions`,
  description: SITE_DESCRIPTION,
  keywords: [
    'industrial filtration',
    'filter cartridges',
    'filter bags',
    'reactor tanks',
    'industrial equipment',
    'engineering services',
  ],
  ogType: 'website',
};

export const PAGE_SEO: Record<string, SEOMetadata> = {
  home: {
    title: `${SITE_NAME} - Industrial Filtration & Equipment Solutions`,
    description:
      'Leading manufacturer of industrial filtration products and equipment. Filter cartridges, bags, reactor tanks, and custom engineering solutions.',
    keywords: [
      'industrial filtration',
      'equipment solutions',
      'filter cartridges',
      'industrial equipment',
    ],
  },
  products: {
    title: `Products - ${SITE_NAME}`,
    description:
      'Browse our complete range of industrial filtration products and equipment solutions.',
    keywords: ['industrial products', 'filtration equipment', 'industrial solutions'],
  },
  filterCartridges: {
    title: `Filter Cartridges - ${SITE_NAME}`,
    description:
      'High-quality cleanable and disposable filter cartridges for industrial applications.',
    keywords: [
      'filter cartridges',
      'cleanable cartridges',
      'disposable cartridges',
      'industrial filters',
    ],
  },
  filterBags: {
    title: `Filter Bags - ${SITE_NAME}`,
    description:
      'Durable filter bags for industrial dust collection and filtration systems.',
    keywords: ['filter bags', 'dust collection', 'industrial bags', 'filtration bags'],
  },
  industrialEquipment: {
    title: `Industrial Equipment - ${SITE_NAME}`,
    description:
      'Reactor tanks, conical storage tanks, and industrial vessels for manufacturing.',
    keywords: [
      'reactor tanks',
      'storage tanks',
      'industrial vessels',
      'conical tanks',
    ],
  },
  engineeringServices: {
    title: `Engineering Services - ${SITE_NAME}`,
    description:
      'Custom industrial solutions including pipe work, sheet fixing, and equipment manufacturing.',
    keywords: [
      'engineering services',
      'pipe work',
      'sheet fixing',
      'custom solutions',
    ],
  },
  about: {
    title: `About Us - ${SITE_NAME}`,
    description:
      'Learn about Shri Engineering, our mission, values, and commitment to industrial excellence.',
    keywords: ['about us', 'company', 'industrial manufacturer', 'engineering'],
  },
  contact: {
    title: `Contact Us - ${SITE_NAME}`,
    description:
      'Get in touch with Shri Engineering for inquiries, quotes, and support.',
    keywords: ['contact', 'inquiry', 'support', 'quote'],
  },
  services: {
    title: `Services - ${SITE_NAME}`,
    description:
      'Comprehensive industrial filtration and engineering services including consultation, fabrication, and maintenance.',
    keywords: [
      'industrial services',
      'engineering services',
      'filtration services',
      'technical support',
    ],
  },
};

export const SCHEMA_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'shriengineering24522@gmail.com',
  telephone: '+91 72288 31722',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://facebook.com/shriengineering',
    'https://linkedin.com/company/shriengineering',
    'https://twitter.com/shriengineering',
    'https://instagram.com/shriengineering',
  ],
};

export const SCHEMA_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  telephone: '+91 72288 31722',
  email: 'shriengineering24522@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

export const OPEN_GRAPH_DEFAULTS = {
  type: 'website',
  locale: 'en_US',
  siteName: SITE_NAME,
};

export const TWITTER_CARD_DEFAULTS = {
  card: 'summary_large_image',
  creator: '@shriengineering',
};

