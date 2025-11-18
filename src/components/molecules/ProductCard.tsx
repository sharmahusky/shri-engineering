import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card hover className="flex flex-col h-full">
      <CardHeader>
        <div className="w-full h-48 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-caption text-neutral-400">Image</span>
          )}
        </div>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.shortDescription || product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {product.applications && product.applications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-900 mb-2">Applications:</h4>
            <ul className="space-y-1">
              {product.applications.slice(0, 3).map((app, index) => (
                <li key={index} className="text-body-sm text-neutral-600 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {app}
                </li>
              ))}
              {product.applications.length > 3 && (
                <li className="text-body-sm text-neutral-500">
                  +{product.applications.length - 3} more
                </li>
              )}
            </ul>
          </div>
        )}
        <Link
          href={`/products/${product.categorySlug}/${product.slug}`}
          className="mt-auto"
        >
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

