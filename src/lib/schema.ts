/**
 * JSON-LD Schema utilities for SEO
 */

import { Product } from '@/types/product';
import { SITE_NAME, SITE_URL } from '@/constants/seo';

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: 'sales@sriengineering.org',
    telephone: '+91 72288 31722',
    description: 'Industrial filtration solutions and equipment manufacturing',
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
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    telephone: '+91 72288 31722',
    email: 'sales@sriengineering.org',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };
}

/**
 * Generate Product schema
 */
export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `${SITE_URL}/products/${product.category}/${product.id}`,
    image: `${SITE_URL}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate ContactPoint schema
 */
export function generateContactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+91 72288 31722',
    contactType: 'Customer Service',
    email: 'shriengineering24522@gmail.com',
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

