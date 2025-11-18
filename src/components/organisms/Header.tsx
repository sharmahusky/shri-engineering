'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MAIN_NAVIGATION } from '@/constants/navigation';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

/**
 * Header Component - Atomic Design Organism
 * 
 * Main navigation header with logo and menu.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Text as="span" size="lg" weight="bold" color="white">
                SE
              </Text>
            </div>
            <div className="hidden sm:block">
              <Text as="span" size="lg" weight="bold" color="neutral">
                Shri Engineering
              </Text>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href}>
                  <Text as="span" size="sm" weight="medium" color="neutral" className="hover:text-primary-500 transition-colors">
                    {item.label}
                  </Text>
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-primary-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <Text as="span" size="sm" color="neutral">
                          {child.label}
                        </Text>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link href="/contact">
              <Button variant="solid" color="primary" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size="md" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-md pt-md border-t border-neutral-200 space-y-sm">
            {MAIN_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Text as="span" size="sm" weight="medium" color="neutral">
                  {item.label}
                </Text>
              </Link>
            ))}
            <Link href="/contact" className="block py-sm">
              <Button variant="solid" color="primary" size="sm" fullWidth>
                Contact Us
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

