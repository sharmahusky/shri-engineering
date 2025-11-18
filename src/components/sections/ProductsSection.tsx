import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@/components/ui';

const featuredProducts = [
  {
    id: '1',
    name: 'Self Cleaning Filters',
    description: 'Automated filtration systems with SS316/SS304 construction',
    href: '/products/filters/self-cleaning',
    image: '/assets/images/products/filters/self-cleaning.jpg',
  },
  {
    id: '2',
    name: 'Pressure Vessels',
    description: 'High-quality pressure vessels for industrial applications',
    href: '/products/tanks-vessels/pressure-vessels',
    image: '/assets/images/products/tanks/pressure-vessel.jpg',
  },
  {
    id: '3',
    name: 'Filter Housings',
    description: 'Single and multi-cartridge filter housings',
    href: '/products/filters/housings',
    image: '/assets/images/products/filters/housings.jpg',
  },
  {
    id: '4',
    name: 'Catalyst Filters',
    description: 'Specialized filters for catalyst and carbon recovery',
    href: '/products/filters/catalyst-carbon',
    image: '/assets/images/products/filters/catalyst.jpg',
  },
  {
    id: '5',
    name: 'Strainers',
    description: 'Y-type, T-type, and bucket type strainers',
    href: '/products/filters/strainers',
    image: '/assets/images/products/filters/strainers.jpg',
  },
  {
    id: '6',
    name: 'Filter Cartridges',
    description: 'Disposable and cleanable filter cartridges',
    href: '/products/filters/cartridges',
    image: '/assets/images/products/filters/cartridges.jpg',
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <Section background="neutral-50">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full mb-4">
          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
          <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">Our Products</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Industrial Solutions for Every Need
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          High-quality industrial tanks, filters, and filtration systems designed for your specific needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredProducts.map((product) => (
          <Card key={product.id} hover className="h-full flex flex-col group">
            <div className="h-2 bg-primary-900 w-full rounded-t-lg"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <CardTitle className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">
                {product.name}
              </CardTitle>
              <CardDescription className="text-base text-neutral-500 mt-2 leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-6">
              <Link href={product.href} className="block">
                <Button variant="ghost" className="w-full justify-between border-t border-neutral-100 pt-4 px-0 hover:bg-transparent hover:text-accent-600">
                  View Specifications
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Link href="/products">
          <Button size="lg">
            View All Products
            <svg className="ml-2 w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </Link>
      </div>
    </Section>
  );
};

