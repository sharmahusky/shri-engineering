import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { companyInfo } from '@/lib/constants/company';
import { navigation } from '@/lib/constants/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-neutral-300 border-t border-primary-900 w-full">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary-800 rounded flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">SHRI</span>
                <span className="text-xs font-bold text-accent-500 tracking-widest uppercase">Engineering</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="flex items-center gap-2 px-3 py-2 bg-primary-900/50 rounded border border-primary-800 w-fit">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <p className="text-xs font-semibold text-primary-200 uppercase tracking-wide">
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary-400 rounded-full"></span>
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/filters"
                  className="text-base text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all"></span>
                  Filters
                </Link>
              </li>
              <li>
                <Link
                  href="/products/tanks-vessels"
                  className="text-base text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all"></span>
                  Tanks & Vessels
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
              Contact
            </h3>
            <ul className="space-y-4 text-base">
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="break-all">{companyInfo.contact.email}</span>
                </a>
              </li>
              <li className="text-neutral-400 mt-6 pt-6 border-t border-neutral-700">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.city}-{companyInfo.address.postalCode}
                    <br />
                    {companyInfo.address.state}, India
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-neutral-400">
              © {currentYear} <span className="text-primary-400 font-semibold">Shri Engineering</span>. All rights reserved.
            </p>
            <p className="text-base text-neutral-400">
              GST: <span className="text-primary-400">{companyInfo.contact.gst}</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

