import { Section } from '@/components/layout';
import { clients } from '@/lib/constants/clients';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients | Shri Engineering | Trusted Partners',
  description: 'Shri Engineering is trusted by industry leaders including DyStar, Meghmani Industries, Jubilant Lifesciences, Welspun, and more.',
};

export default function ClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Our Clients</h1>
          <p className="text-body-lg opacity-90">
            Trusted by industry leaders across various sectors
          </p>
        </div>
      </Section>

      {/* Clients Grid */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border-2 border-neutral-200 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="w-32 h-24 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-caption text-neutral-400 text-center px-2">
                    {client.name}
                  </span>
                </div>
                <h3 className="text-body-sm font-medium text-neutral-700 text-center">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Industries We Serve</h2>
            <p className="text-body-lg text-neutral-600">
              Our products and services cater to diverse industrial sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Chemical',
              'Pharmaceutical',
              'Petrochemical',
              'Textiles',
              'Food & Beverage',
              'Crop Protection',
              'Life Sciences',
              'Manufacturing',
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-lg p-6 text-center border border-neutral-200 hover:border-primary transition-colors"
              >
                <h3 className="text-body font-semibold text-neutral-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

