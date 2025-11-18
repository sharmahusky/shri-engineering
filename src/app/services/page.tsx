import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, Badge, Button } from '@/components/ui';
import { services } from '@/lib/constants/services';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Shri Engineering | Industrial Solutions',
  description: 'Comprehensive industrial solutions including pipeline work, reactor tanks, storage tanks, vessels, sheet fixing, and granulator manufacturing.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Our Services</h1>
          <p className="text-body-lg opacity-90">
            Comprehensive industrial solutions tailored to your requirements
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} hover className="flex flex-col">
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-body-sm text-neutral-600 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Industries Served:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, index) => (
                        <Badge key={index} variant="secondary">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h1 font-bold text-neutral-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-body-lg text-neutral-600 mb-8">
            Our team is ready to work with you to create a solution that meets your specific requirements.
          </p>
          <Link href="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

