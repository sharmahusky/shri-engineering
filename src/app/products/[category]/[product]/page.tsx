import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button, Badge } from '@/components/ui';
import { SpecificationTable } from '@/components/molecules';
import { getProductBySlug } from '@/lib/constants/products';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, product } = await params;
  const productData = getProductBySlug(category, product);
  
  if (!productData) {
    return {
      title: 'Product Not Found | Shri Engineering',
    };
  }
  
  return {
    title: `${productData.name} | Shri Engineering`,
    description: productData.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { category, product } = await params;
  const productData = getProductBySlug(category, product);
  
  if (!productData) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link
              href={`/products/${category}`}
              className="text-white/80 hover:text-white text-body-sm"
            >
              ← Back to {productData.category}
            </Link>
          </div>
          <h1 className="text-display font-bold mb-4">{productData.name}</h1>
          <p className="text-body-lg opacity-90">{productData.description}</p>
        </div>
      </Section>

      {/* Product Details */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="w-full h-96 bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                {productData.images && productData.images.length > 0 ? (
                  <Image
                    src={productData.images[0]}
                    alt={productData.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-caption text-neutral-400">Product Image</span>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <Badge variant="primary" className="mb-4">
                  {productData.category}
                </Badge>
                <h2 className="text-h1 font-bold text-neutral-900 mb-4">Product Overview</h2>
                <p className="text-body-lg text-neutral-600 mb-6">
                  {productData.description}
                </p>
              </div>
              
              {productData.features && productData.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-h3 font-semibold text-neutral-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3">✓</span>
                        <span className="text-body text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Specifications */}
      {productData.specifications && Object.keys(productData.specifications).length > 0 && (
        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-8 text-center">
              Technical Specifications
            </h2>
            <SpecificationTable specifications={productData.specifications} />
          </div>
        </Section>
      )}

      {/* Applications */}
      {productData.applications && productData.applications.length > 0 && (
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-8 text-center">
              Applications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productData.applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-4 text-center border border-neutral-200 hover:border-primary transition-colors"
                >
                  <p className="text-body-sm font-medium text-neutral-900">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="primary">
        <div className="text-center text-white max-w-2xl mx-auto">
          <h2 className="text-h1 font-bold mb-4">Interested in This Product?</h2>
          <p className="text-body-lg mb-8 opacity-90">
            Contact us for more information, custom specifications, or to request a quote.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

