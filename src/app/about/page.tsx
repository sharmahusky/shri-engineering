import { Metadata } from 'next';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import PageLayout from '@/components/templates/PageLayout';
import { PAGE_SEO } from '@/constants/seo';

export const metadata: Metadata = PAGE_SEO.about;

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-24">
        <div className="container mx-auto px-4">
          <Text as="h1" size="5xl" weight="bold" className="mb-4">
            About Shri Engineering
          </Text>
          <Text as="p" size="xl" color="white" className="opacity-90">
            Leading provider of industrial filtration and engineering solutions
          </Text>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-24">
            <Text as="h2" size="3xl" weight="bold" color="neutral" className="mb-4">
              Our Story
            </Text>
            <Text as="p" size="lg" color="neutral-light" className="mb-4">
              Shri Engineering has been at the forefront of industrial filtration and engineering solutions for years. Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner for businesses across diverse industries.
            </Text>
            <Text as="p" size="lg" color="neutral-light">
              We specialize in providing comprehensive filtration products and engineering services tailored to meet the unique needs of our clients.
            </Text>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <Text as="h2" size="3xl" weight="bold" color="neutral" className="mb-10">
              Our Core Values
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card shadow="md">
                <Text as="h3" size="lg" weight="bold" color="primary" className="mb-4">
                  Quality
                </Text>
                <Text as="p" size="sm" color="neutral-light">
                  We maintain the highest standards in manufacturing and service delivery, ensuring every product meets international quality benchmarks.
                </Text>
              </Card>

              <Card shadow="md">
                <Text as="h3" size="lg" weight="bold" color="secondary" className="mb-4">
                  Innovation
                </Text>
                <Text as="p" size="sm" color="neutral-light">
                  We continuously invest in research and development to bring cutting-edge solutions to our customers.
                </Text>
              </Card>

              <Card shadow="md">
                <Text as="h3" size="lg" weight="bold" color="accent" className="mb-4">
                  Reliability
                </Text>
                <Text as="p" size="sm" color="neutral-light">
                  Our products and services are built to last, providing consistent performance in demanding industrial environments.
                </Text>
              </Card>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <Text as="h2" size="3xl" weight="bold" color="neutral" className="mb-10">
              Our Expertise
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Text as="h3" size="lg" weight="semibold" color="primary" className="mb-4">
                  Filtration Products
                </Text>
                <Text as="p" size="sm" color="neutral-light" className="mb-4">
                  Comprehensive range of cleanable and disposable filter cartridges, filter bags, and specialized filtration systems for various industrial applications.
                </Text>
              </div>

              <div>
                <Text as="h3" size="lg" weight="semibold" color="secondary" className="mb-4">
                  Engineering Services
                </Text>
                <Text as="p" size="sm" color="neutral-light" className="mb-4">
                  Custom engineering solutions including pipeline work, reactor tanks, storage vessels, and specialized equipment fabrication.
                </Text>
              </div>

              <div>
                <Text as="h3" size="lg" weight="semibold" color="accent" className="mb-4">
                  Technical Support
                </Text>
                <Text as="p" size="sm" color="neutral-light" className="mb-4">
                  Dedicated technical team providing consultation, installation support, and maintenance services.
                </Text>
              </div>

              <div>
                <Text as="h3" size="lg" weight="semibold" color="primary" className="mb-4">
                  Customization
                </Text>
                <Text as="p" size="sm" color="neutral-light" className="mb-4">
                  Tailored solutions designed to meet specific requirements of different industries and applications.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

