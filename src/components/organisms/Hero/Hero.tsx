import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { Container } from '@/components/layout';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden border-b border-primary-800">
      {/* Abstract Technical Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div className="py-20 lg:py-32 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800 border border-primary-700 mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-accent-500"></span>
              <span className="text-sm font-medium text-primary-100 tracking-wide">ISO 9001:2015 Certified Manufacturer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              Engineering Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-300">
                Industrial Filtration
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              Premium quality industrial tanks, pressure vessels, and filtration systems. 
              Engineered for precision, durability, and performance in the most demanding environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/products">
                <Button size="lg" variant="primary" className="min-w-[180px] h-14 text-lg">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="min-w-[180px] h-14 text-lg border-primary-700 text-white hover:bg-primary-800 hover:text-white hover:border-primary-600">
                  Request Quote
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-primary-800/50">
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Projects Delivered', value: '500+' },
                { label: 'Industry Sectors', value: '12+' },
                { label: 'Global Clients', value: '50+' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </Container>
    </section>
  );
};
