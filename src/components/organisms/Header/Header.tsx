'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-soft">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary-900 rounded flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary-900 tracking-tight">SHRI</span>
                <span className="text-xs font-bold text-accent-600 tracking-widest uppercase">Engineering</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <Navigation />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary-50 text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

