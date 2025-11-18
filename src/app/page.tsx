import { Metadata } from 'next';
import Link from '@/components/atoms/Link';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import JsonLd from '@/components/atoms/JsonLd';
import Card from '@/components/molecules/Card';
import PageLayout from '@/components/templates/PageLayout';
import { PAGE_SEO } from '@/constants/seo';
import { getCategories } from '@/data/products';
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = PAGE_SEO.home;

export default function Home() {
  const categories = getCategories();

  return (
    <>
      <JsonLd schema={generateOrganizationSchema()} />
      <JsonLd schema={generateWebPageSchema(PAGE_SEO.home.title, PAGE_SEO.home.description, 'https://shri-engineering.com')} />
      <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Text as="h1" size="5xl" weight="bold" className="mb-4">
              Industrial Filtration & Engineering Solutions
            </Text>
            <Text as="p" size="xl" color="white" className="mb-10 opacity-90">
              Leading provider of high-quality filtration products and comprehensive engineering services for industrial applications.
            </Text>
            <div className="flex gap-4 flex-wrap">
              <Link href="/products">
                <Button variant="solid" color="white" size="lg">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" color="white" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <Text as="h2" size="4xl" weight="bold" color="neutral" className="mb-4">
              About Shri Engineering
            </Text>
            <Text as="p" size="lg" color="neutral-light" className="mb-4">
              With years of expertise in industrial filtration and engineering, Shri Engineering delivers innovative solutions tailored to meet the unique needs of diverse industries.
            </Text>
            <Text as="p" size="lg" color="neutral-light">
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for businesses worldwide.
            </Text>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Text as="h2" size="4xl" weight="bold" color="neutral" className="mb-10 text-center">
            Our Product Categories
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/products/${category.id}`} className="no-underline">
                <Card hoverable shadow="md" className="h-full flex flex-col">
                  <Text as="h3" size="lg" weight="bold" color="primary" className="mb-2">
                    {category.name}
                  </Text>
                  <Text as="p" size="sm" color="neutral-light" className="mb-4 flex-grow">
                    {category.description}
                  </Text>
                  <Button variant="ghost" color="primary" size="sm">
                    View Products →
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <Text as="h2" size="4xl" weight="bold" color="neutral" className="mb-10 text-center">
            Why Choose Us
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="primary" className="mb-4">
                Quality Products
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                High-quality filtration products manufactured to international standards with rigorous quality control.
              </Text>
            </Card>

            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="secondary" className="mb-4">
                Expert Engineering
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                Experienced engineering team providing customized solutions for complex industrial requirements.
              </Text>
            </Card>

            <Card shadow="md">
              <Text as="h3" size="lg" weight="bold" color="accent" className="mb-4">
                Reliable Support
              </Text>
              <Text as="p" size="sm" color="neutral-light">
                Dedicated customer support and technical assistance to ensure optimal product performance.
              </Text>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <Text as="h2" size="4xl" weight="bold" className="mb-4">
            Ready to Get Started?
          </Text>
          <Text as="p" size="lg" color="white" className="mb-10 opacity-90">
            Contact us today to discuss your filtration and engineering needs.
          </Text>
          <Link href="/contact">
            <Button variant="solid" color="white" size="lg">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
    </>
  );
}
