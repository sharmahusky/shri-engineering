import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { companyInfo } from '@/lib/constants/company';

export const ContactSection: React.FC = () => {
  return (
    <Section background="primary">
      <div className="text-center text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800 border border-primary-700 mb-6">
          <span className="text-sm font-medium text-accent-400 tracking-wide uppercase">Contact Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get in touch with our engineering team for technical specifications, custom quotes, or general inquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-8 py-4 bg-white text-primary-900 rounded-lg hover:bg-primary-50 transition-all duration-200 font-semibold shadow-lg"
          >
            <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{companyInfo.contact.phone}</span>
          </a>
          <a
            href={`mailto:${companyInfo.contact.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 border border-primary-700 font-medium"
          >
            <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="break-all">{companyInfo.contact.email}</span>
          </a>
        </div>
        <Link href="/contact">
          <span className="inline-block text-primary-200 hover:text-white underline underline-offset-4 transition-colors cursor-pointer">
            Go to Contact Page &rarr;
          </span>
        </Link>
      </div>
    </Section>
  );
};

