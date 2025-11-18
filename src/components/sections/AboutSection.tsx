import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button, Badge } from '@/components/ui';
import { companyInfo } from '@/lib/constants/company';

export const AboutSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">About Our Company</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight mb-4">
              Precision Manufacturing <br />
              <span className="text-accent-600">Since Day One</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed border-l-4 border-accent-500 pl-4 italic">
              "We specialize in manufacturing high-quality industrial tanks, filters, and filtration systems. 
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner 
              for industries across India."
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {companyInfo.certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-2 px-4 py-2 bg-neutral-50 text-primary-800 text-sm font-semibold rounded border border-neutral-200">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {cert}
              </div>
            ))}
          </div>
          
          <div className="pt-2">
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-primary-50 rounded-2xl transform -rotate-2"></div>
          <div className="relative bg-white rounded-xl p-8 shadow-card border border-neutral-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6 border-b border-neutral-100 pb-4">
              Why Choose Shri Engineering?
            </h3>
            <ul className="space-y-5">
              {[
                { title: 'Customized Solutions', desc: 'Tailored designs to meet your specific requirements' },
                { title: 'Quality Materials', desc: 'SS316, SS304, MS, PP, UPVC, and more' },
                { title: 'ISO Certified', desc: 'ISO 9001:2015 certified quality management' },
                { title: 'Industry Experience', desc: 'Serving chemical, pharmaceutical, and industrial sectors' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-primary-600 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

