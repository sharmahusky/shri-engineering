import React from 'react';
import ProductCard from '@/components/molecules/ProductCard';
import Text from '@/components/atoms/Text';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * ProductGrid Component - Atomic Design Organism
 * 
 * A responsive grid layout for displaying multiple products.
 * 
 * @example
 * <ProductGrid products={products} columns={3} gap="md" />
 */
export default function ProductGrid({
  products,
  columns = 3,
  gap = 'md',
  className = '',
}: ProductGridProps) {
  // Column variants
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  // Gap variants
  const gapStyles = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Text as="p" size="lg" color="neutral-light" weight="medium">
          No products found
        </Text>
      </div>
    );
  }

  return (
    <div className={`grid ${columnStyles[columns]} ${gapStyles[gap]} ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          image={typeof product.image === 'string' ? product.image : product.image?.url || '/images/placeholder.jpg'}
          description={product.description}
          micronRating={product.specifications?.[0]?.value}
          moc={product.specifications?.[1]?.value}
          href={`/products/${product.category}/${product.id}`}
        />
      ))}
    </div>
  );
}

