import { Metadata } from 'next';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import PageLayout from '@/components/templates/PageLayout';
import { PAGE_SEO } from '@/constants/seo';

export const metadata: Metadata = PAGE_SEO.services || {
  title: 'Services | Shri Engineering',
  description: 'Comprehensive engineering and filtration services',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Industrial Filtration',
      description: 'Complete filtration solutions for various industrial applications including water, oil, chemicals, and more.',
      features: ['Cleanable cartridges', 'Disposable cartridges', 'Filter bags', 'Custom solutions'],
    },
    {
      title: 'Pipeline Engineering',
      description: 'Expert design, fabrication, and installation of complex industrial piping systems.',
      features: ['System design', 'Fabrication', 'Installation', 'Maintenance'],
    },
    {
      title: 'Pressure Vessels',
      description: 'Manufacturing and installation of high-quality pressure vessels and storage tanks.',
      features: ['Reactor tanks', 'Storage tanks', 'Conical vessels', 'Custom designs'],
    },
    {
      title: 'Equipment Fabrication',
      description: 'Custom fabrication of specialized industrial equipment including granulators and processing systems.',
      features: ['Pan disc granulators', 'Processing equipment', 'Custom fabrication', 'Quality assurance'],
    },
    {
      title: 'Technical Consultation',
      description: 'Expert consultation for filtration and engineering requirements specific to your industry.',
      features: ['Needs assessment', 'Solution design', 'Implementation support', 'Optimization'],
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support to ensure optimal performance of your equipment.',
      features: ['Regular maintenance', 'Emergency support', 'Spare parts', 'Training'],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-24">
        <div className="container mx-auto px-4">
          <Text as="h1" size="5xl" weight="bold" className="mb-4">
            Our Services
          </Text>
          <Text as="p" size="xl" color="white" className="opacity-90">
            Comprehensive filtration and engineering solutions tailored to your needs
          </Text>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} shadow="md" hoverable>
                <Card.Header>
                  <Text as="h3" size="lg" weight="bold" color="primary">
                    {service.title}
                  </Text>
                </Card.Header>
                <Card.Body>
                  <Text as="p" size="sm" color="neutral-light" className="mb-4">
                    {service.description}
                  </Text>
                  <div className="space-y-1">
                    <Text as="p" size="xs" weight="semibold" color="neutral">
                      Key Features:
                    </Text>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-500 font-bold mt-0.5">•</span>
                          <Text as="span" size="xs" color="neutral-light">
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <Text as="h2" size="4xl" weight="bold" color="neutral" className="mb-10 text-center">
            Why Choose Shri Engineering
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="primary" className="mb-4">
                Experience
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                Years of expertise in industrial filtration and engineering solutions.
              </Text>
            </Card>

            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="secondary" className="mb-4">
                Quality
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                International standards and rigorous quality control in all products and services.
              </Text>
            </Card>

            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="accent" className="mb-4">
                Customization
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                Tailored solutions designed to meet your specific requirements and challenges.
              </Text>
            </Card>

            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="primary" className="mb-4">
                Support
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                Dedicated technical team providing consultation and ongoing support.
              </Text>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

