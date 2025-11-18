import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Shri Engineering | Industrial Tanks & Filters',
  description: 'Browse our comprehensive range of industrial products including filters, filter housings, tanks, vessels, strainers, and filtration systems.',
};

const productCategories = [
  {
    id: 'filters',
    name: 'Filters',
    description: 'Comprehensive range of industrial filters for various applications',
    href: '/products/filters',
    products: [
      'Self Cleaning Filters',
      'Catalyst/Carbon Filters',
      'Filter Housings',
      'Duplex Housings',
      'Strainers',
      'Filter Cartridges',
      'Filter Bags',
    ],
  },
  {
    id: 'tanks-vessels',
    name: 'Tanks & Vessels',
    description: 'High-quality tanks and pressure vessels for industrial use',
    href: '/products/tanks-vessels',
    products: [
      'Pressure Vessels',
      'Reactor Tanks',
      'Conical Storage Tanks',
      'Conical Vessels',
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Our Products</h1>
          <p className="text-body-lg opacity-90">
            High-quality industrial tanks, filters, and filtration systems designed for your specific needs
          </p>
        </div>
      </Section>

      {/* Product Categories */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} hover className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-h2">{category.name}</CardTitle>
                  <CardDescription className="text-body-lg">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-4">Products in this category:</h4>
                    <ul className="space-y-2">
                      {category.products.map((product, index) => (
                        <li key={index} className="text-body-sm text-neutral-600 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={category.href} className="mt-auto">
                    <Button variant="outline" className="w-full">
                      View {category.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Why Choose Our Products</h2>
            <p className="text-body-lg text-neutral-600">
              Quality, reliability, and customization at the core
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <CardTitle>Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SS316, SS304, MS, PP, UPVC, and more
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <CardTitle>Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed to meet your specific requirements
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <CardTitle>ISO Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ISO 9001:2015 certified quality management
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h1 font-bold text-neutral-900 mb-4">Need Help Choosing?</h2>
          <p className="text-body-lg text-neutral-600 mb-8">
            Our team is here to help you find the right product for your application.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

