import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Text from '@/components/atoms/Text';
import ProductLayout from '@/components/templates/ProductLayout';
import ProductGrid from '@/components/organisms/ProductGrid';
import { getProductsByCategory, getCategories } from '@/data/products';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = getCategories();
  const category = categories.find((c) => c.id === params.category);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} | Shri Engineering`,
    description: category.description,
  };
}

export function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = getCategories();
  const category = categories.find((c) => c.id === params.category);
  const products = getProductsByCategory(params.category);

  if (!category || products.length === 0) {
    notFound();
  }

  return (
    <ProductLayout
      title={category.name}
      description={category.description}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: category.name, href: `/products/${category.id}` },
      ]}
    >
      <div className="mb-24">
        <Text as="p" size="lg" color="neutral-light" className="mb-10">
          {category.description}
        </Text>

        <div className="mb-10">
          <Text as="h2" size="2xl" weight="bold" color="neutral" className="mb-6">
            Products ({products.length})
          </Text>
        </div>

        <ProductGrid products={products} columns={3} gap="lg" />
      </div>
    </ProductLayout>
  );
}

