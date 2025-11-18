import React from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageLayout Template - Atomic Design Template
 * 
 * Main layout wrapper for all pages with header and footer.
 * 
 * @example
 * <PageLayout>
 *   <main>Page content</main>
 * </PageLayout>
 */
export default function PageLayout({
  children,
  className = '',
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

