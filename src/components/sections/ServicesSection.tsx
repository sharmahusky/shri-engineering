import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@/components/ui';
import { services } from '@/lib/constants/services';

export const ServicesSection: React.FC = () => {
  const featuredServices = services.slice(0, 6);
  
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full mb-4">
          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
          <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">Our Services</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Comprehensive Industrial Solutions
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Tailored solutions to meet your specific industrial requirements
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredServices.map((service) => (
          <Card key={service.id} hover className="h-full flex flex-col group">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-secondary-50 text-secondary-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <CardTitle className="text-xl font-bold text-primary-900 group-hover:text-secondary-600 transition-colors">
                {service.name}
              </CardTitle>
              <CardDescription className="text-base text-neutral-500 mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col mt-4">
              <ul className="space-y-3 mb-6 flex-1">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 flex items-start">
                    <span className="text-secondary-500 mr-2 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/services#${service.slug}`} className="block">
                <Button variant="ghost" className="w-full justify-start px-0 text-secondary-700 hover:text-secondary-900 hover:bg-transparent p-0">
                  Read Service Details &rarr;
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Link href="/services">
          <Button size="lg">
            View All Services
            <svg className="ml-2 w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </Link>
      </div>
    </Section>
  );
};

