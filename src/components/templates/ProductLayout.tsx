import React from 'react';
import PageLayout from './PageLayout';
import Text from '@/components/atoms/Text';

interface ProductLayoutProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

/**
 * ProductLayout Template - Atomic Design Template
 * 
 * Layout for product pages with sidebar support.
 * 
 * @example
 * <ProductLayout 
 *   title="Filter Cartridges"
 *   description="Browse our collection"
 * >
 *   <ProductGrid products={products} />
 * </ProductLayout>
 */
export default function ProductLayout({
  title,
  description,
  breadcrumbs,
  children,
  sidebar,
}: ProductLayoutProps) {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2xl">
        <div className="container mx-auto px-md">
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <div className="flex items-center gap-sm mb-lg text-sm opacity-90">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span>/</span>}
                  <span>{crumb.label}</span>
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Title */}
          <Text as="h1" size="5xl" weight="bold" className="mb-md">
            {title}
          </Text>

          {/* Description */}
          {description && (
            <Text as="p" size="lg" color="white" className="opacity-90">
              {description}
            </Text>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-2xl">
        <div className="container mx-auto px-md">
          {sidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2xl">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {children}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {sidebar}
              </aside>
            </div>
          ) : (
            children
          )}
        </div>
      </section>
    </PageLayout>
  );
}

