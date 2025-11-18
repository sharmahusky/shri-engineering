import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { clients } from '@/lib/constants/clients';

export const ClientsSection: React.FC = () => {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
          Trusted by Industry Leaders
        </h2>
        <p className="text-base text-neutral-600 max-w-2xl mx-auto">
          Delivering excellence to major companies across chemical, pharmaceutical, and engineering sectors.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-center h-24 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 p-4 grayscale hover:grayscale-0"
          >
             <span className="text-sm font-semibold text-neutral-500 hover:text-primary-800 text-center leading-tight">
               {client.name}
             </span>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Link href="/clients">
          <Button variant="ghost" className="text-primary-700 hover:bg-white">
            View All Clients &rarr;
          </Button>
        </Link>
      </div>
    </Section>
  );
};

