import React from 'react';
import Image from 'next/image';
import Link from '@/components/atoms/Link';
import Badge from '@/components/atoms/Badge';
import Text from '@/components/atoms/Text';
import Card from './Card';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  micronRating?: string;
  moc?: string;
  href: string;
  className?: string;
}

/**
 * ProductCard Component - Atomic Design Molecule
 * 
 * A card component for displaying product information.
 * 
 * @example
 * <ProductCard
 *   id="1"
 *   name="Filter Cartridge"
 *   category="filter-cartridges"
 *   image="/images/filter.jpg"
 *   href="/products/filter-cartridges/1"
 * />
 */
export default function ProductCard({
  name,
  category,
  image,
  description,
  micronRating,
  moc,
  href,
  className = '',
}: ProductCardProps) {
  return (
    <Link href={href} className="no-underline">
      <Card hoverable shadow="md" className={`h-full flex flex-col ${className}`}>
        {/* Image Container */}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-neutral-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category Badge */}
        <div className="mb-2">
          <Badge variant="solid" color="primary" size="sm">
            {category.replace('-', ' ').toUpperCase()}
          </Badge>
        </div>

        {/* Product Name */}
        <Text as="h3" size="lg" weight="semibold" color="neutral" className="mb-2">
          {name}
        </Text>

        {/* Description */}
        {description && (
          <Text as="p" size="sm" color="neutral-light" className="mb-4 flex-grow">
            {description}
          </Text>
        )}

        {/* Specifications */}
        <div className="space-y-1 text-xs">
          {micronRating && (
            <div className="flex justify-between">
              <Text as="span" size="xs" color="neutral-light" weight="medium">
                Micron Rating:
              </Text>
              <Text as="span" size="xs" color="neutral" weight="semibold">
                {micronRating}
              </Text>
            </div>
          )}
          {moc && (
            <div className="flex justify-between">
              <Text as="span" size="xs" color="neutral-light" weight="medium">
                MOC:
              </Text>
              <Text as="span" size="xs" color="neutral" weight="semibold">
                {moc}
              </Text>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}

