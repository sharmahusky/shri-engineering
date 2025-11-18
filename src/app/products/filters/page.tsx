import { Section } from '@/components/layout';
import { ProductCard } from '@/components/molecules';
import { getProductsByCategory } from '@/lib/constants/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filters | Shri Engineering | Industrial Filtration Systems',
  description: 'Comprehensive range of industrial filters including self-cleaning filters, catalyst filters, filter housings, strainers, cartridges, and filter bags.',
};

export default function FiltersPage() {
  const filterProducts = getProductsByCategory('filters');
  
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Industrial Filters</h1>
          <p className="text-body-lg opacity-90">
            Comprehensive range of filtration solutions for various industrial applications
          </p>
        </div>
      </Section>

      {/* Products Grid */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>

      {/* Applications Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Applications</h2>
            <p className="text-body-lg text-neutral-600">
              Our filters are used across various industries and applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Water Treatment',
              'Chemical Processing',
              'Pharmaceutical',
              'Food & Beverage',
              'Oil & Gas',
              'Paint & Ink',
              'Solvents',
              'Catalyst Recovery',
            ].map((application) => (
              <div
                key={application}
                className="bg-white rounded-lg p-4 text-center border border-neutral-200 hover:border-primary transition-colors"
              >
                <h3 className="text-body-sm font-semibold text-neutral-900">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

