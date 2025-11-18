import { Section } from '@/components/layout';
import { ProductCard } from '@/components/molecules';
import { getProductsByCategory } from '@/lib/constants/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanks & Vessels | Shri Engineering | Industrial Storage Solutions',
  description: 'High-quality industrial tanks and vessels including pressure vessels, reactor tanks, conical storage tanks, and conical vessels.',
};

export default function TanksVesselsPage() {
  const tankProducts = getProductsByCategory('tanks-vessels');
  
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Tanks & Vessels</h1>
          <p className="text-body-lg opacity-90">
            High-quality industrial tanks and pressure vessels for storage and processing
          </p>
        </div>
      </Section>

      {/* Products Grid */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tankProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Key Features</h2>
            <p className="text-body-lg text-neutral-600">
              Why choose our tanks and vessels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-h4 font-semibold text-neutral-900 mb-2">Custom Designs</h3>
              <p className="text-body-sm text-neutral-600">
                Designed to meet your specific requirements and applications
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-h4 font-semibold text-neutral-900 mb-2">Quality Materials</h3>
              <p className="text-body-sm text-neutral-600">
                SS316, SS304, MS, and other quality materials for durability
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center border border-neutral-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-h4 font-semibold text-neutral-900 mb-2">ASME Standards</h3>
              <p className="text-body-sm text-neutral-600">
                Manufactured according to industry standards and certifications
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

