import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import Link from '@/components/atoms/Link';
import JsonLd from '@/components/atoms/JsonLd';
import Card from '@/components/molecules/Card';
import PageLayout from '@/components/templates/PageLayout';
import { getProductById, getCategories } from '@/data/products';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/schema';

interface ProductPageProps {
  params: {
    category: string;
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Shri Engineering`,
    description: product.description,
  };
}

export function generateStaticParams() {
  const categories = getCategories();
  const products = require('@/data/products').products;

  return products.map((product: { id: string; category: string }) => ({
    category: product.category,
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  const categories = getCategories();
  const category = categories.find((c) => c.id === params.category);

  if (!product || !category) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://sriengineering.org' },
    { name: 'Products', url: 'https://sriengineering.org/products' },
    { name: category.name, url: `https://sriengineering.org/products/${category.id}` },
    { name: product.name, url: `https://sriengineering.org/products/${category.id}/${product.id}` },
  ];

  return (
    <>
      <JsonLd schema={generateProductSchema(product)} />
      <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />
      <PageLayout>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" color="primary">
              Home
            </Link>
            <span className="text-neutral-400">/</span>
            <Link href="/products" color="primary">
              Products
            </Link>
            <span className="text-neutral-400">/</span>
            <Link href={`/products/${category.id}`} color="primary">
              {category.name}
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <Badge color="primary" variant="solid" className="mb-4">
                  {category.name}
                </Badge>
                <Text as="h1" size="4xl" weight="bold" color="neutral" className="mb-4">
                  {product.name}
                </Text>
                <Text as="p" size="lg" color="neutral-light">
                  {product.description}
                </Text>
              </div>

              {/* Specifications */}
              <Card shadow="md" className="mb-10">
                <Card.Header>
                  <Text as="h2" size="xl" weight="bold" color="neutral">
                    Specifications
                  </Text>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-40">
                          <Text as="span" size="sm" weight="semibold" color="primary">
                            {spec.name}
                          </Text>
                        </div>
                        <div className="flex-grow">
                          <Text as="span" size="sm" color="neutral-light">
                            {spec.value}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <Card shadow="md">
                  <Card.Header>
                    <Text as="h2" size="xl" weight="bold" color="neutral">
                      Applications
                    </Text>
                  </Card.Header>
                  <Card.Body>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <Badge key={index} color="secondary" variant="outline">
                          {typeof app === 'string' ? app : app.name}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card shadow="lg" className="sticky top-24">
                <Card.Header>
                  <Text as="h3" size="lg" weight="bold" color="neutral">
                    Interested?
                  </Text>
                </Card.Header>
                <Card.Body>
                  <Text as="p" size="sm" color="neutral-light" className="mb-6">
                    Get more information about this product or request a quote.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Link href="/contact" className="w-full">
                    <Button variant="solid" color="primary" fullWidth>
                      Contact Us
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
    </>
  );
}

