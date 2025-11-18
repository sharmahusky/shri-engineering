import { Metadata } from 'next';
import Text from '@/components/atoms/Text';
import ProductLayout from '@/components/templates/ProductLayout';
import ProductGrid from '@/components/organisms/ProductGrid';
import { PAGE_SEO } from '@/constants/seo';
import { getAllProducts, getCategories } from '@/data/products';

export const metadata: Metadata = PAGE_SEO.products;

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <ProductLayout
      title="All Products"
      description="Browse our complete range of industrial filtration products and engineering solutions"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    >
      <div className="mb-24">
        <Text as="p" size="lg" color="neutral-light" className="mb-10">
          Shri Engineering offers a comprehensive range of filtration products and engineering solutions for industrial applications. Explore our product categories below.
        </Text>

        {/* Categories Overview */}
        <div className="mb-24">
          <Text as="h2" size="2xl" weight="bold" color="neutral" className="mb-6">
            Product Categories
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="p-4 border border-neutral-200 rounded-lg hover:border-primary-300 transition-colors">
                <Text as="h3" size="lg" weight="semibold" color="primary" className="mb-2">
                  {category.name}
                </Text>
                <Text as="p" size="sm" color="neutral-light">
                  {category.description}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* All Products Grid */}
        <div>
          <Text as="h2" size="2xl" weight="bold" color="neutral" className="mb-6">
            All Products ({products.length})
          </Text>
          <ProductGrid products={products} columns={3} gap="lg" />
        </div>
      </div>
    </ProductLayout>
  );
}

