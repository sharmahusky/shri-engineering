import React from 'react';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import { FOOTER_NAVIGATION, COMPANY_INFO, SOCIAL_LINKS } from '@/constants/navigation';

/**
 * Footer Component - Atomic Design Organism
 * 
 * Main footer with navigation, company info, and social links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <Text as="h3" size="lg" weight="bold" className="mb-4">
              Shri Engineering
            </Text>
            <Text as="p" size="sm" color="neutral-lighter" className="mb-4">
              Leading provider of industrial filtration products and engineering solutions.
            </Text>
            <div className="space-y-2">
              <div>
                <Text as="span" size="xs" color="neutral-lighter">
                  Email:
                </Text>
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  external
                  color="neutral"
                  className="ml-2 text-primary-400 hover:text-primary-300"
                >
                  {COMPANY_INFO.email}
                </Link>
              </div>
              <div>
                <Text as="span" size="xs" color="neutral-lighter">
                  Phone:
                </Text>
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  external
                  color="neutral"
                  className="ml-2 text-primary-400 hover:text-primary-300"
                >
                  {COMPANY_INFO.phone}
                </Link>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <Text as="h4" size="base" weight="bold" className="mb-4">
              Products
            </Text>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.products?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} color="neutral" className="text-neutral-300 hover:text-primary-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Text as="h4" size="base" weight="bold" className="mb-4">
              Company
            </Text>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.company?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} color="neutral" className="text-neutral-300 hover:text-primary-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <Text as="h4" size="base" weight="bold" className="mb-4">
              Support
            </Text>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.support?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} color="neutral" className="text-neutral-300 hover:text-primary-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-10">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                external
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Text as="span" size="sm" weight="medium">
                  {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
                </Text>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <Text as="p" size="xs" color="neutral-lighter">
              © {currentYear} Shri Engineering. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}

