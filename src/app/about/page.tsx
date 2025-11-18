import Link from 'next/link';
import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, Badge, Button } from '@/components/ui';
import { companyInfo } from '@/lib/constants/company';
import { certifications } from '@/lib/constants/certifications';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Shri Engineering | ISO 9001:2015 Certified Manufacturer',
  description: 'Learn about Shri Engineering, a leading manufacturer of industrial tanks and filters. ISO 9001:2015, IAF, and EGAC certified. Serving industries with quality and reliability.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">About Shri Engineering</h1>
          <p className="text-body-lg opacity-90">
            Leading manufacturer of industrial tanks, filters, and filtration systems
          </p>
        </div>
      </Section>

      {/* Company Overview */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-h1 font-bold text-neutral-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-body text-neutral-600">
                <p>
                  Shri Engineering is a leading manufacturer of industrial tanks, filters, and filtration systems, 
                  serving diverse industries across India. With a commitment to quality and innovation, we have 
                  established ourselves as a trusted partner for businesses in the chemical, pharmaceutical, and 
                  industrial sectors.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility in Ankleshwar, Gujarat, is equipped with modern 
                  machinery and staffed by experienced professionals dedicated to delivering excellence in every 
                  product we manufacture.
                </p>
                <p>
                  We specialize in custom solutions, working closely with our clients to understand their specific 
                  requirements and deliver products that meet the highest standards of quality and performance.
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-h3 font-semibold text-neutral-900 mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl font-bold">✓</span>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">ISO 9001:2015 Certified</h4>
                    <p className="text-body-sm text-neutral-600">Quality Management System</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl font-bold">✓</span>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Custom Solutions</h4>
                    <p className="text-body-sm text-neutral-600">Tailored to your requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl font-bold">✓</span>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Wide Material Range</h4>
                    <p className="text-body-sm text-neutral-600">SS316, SS304, MS, PP, UPVC, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl font-bold">✓</span>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Industry Experience</h4>
                    <p className="text-body-sm text-neutral-600">Serving multiple sectors</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-neutral-600">
                  To provide high-quality industrial tanks, filters, and filtration systems that meet the 
                  diverse needs of our clients while maintaining the highest standards of quality, reliability, 
                  and customer satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-neutral-600">
                  To be the leading manufacturer of industrial filtration solutions in India, recognized for 
                  our innovation, quality, and commitment to excellence in every product we deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Certifications & Accreditations</h2>
            <p className="text-body-lg text-neutral-600">
              Our commitment to quality is recognized through various certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-neutral-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-caption text-neutral-400">Logo</span>
                  </div>
                  <CardTitle>{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Why Choose Us</h2>
            <p className="text-body-lg text-neutral-600">
              What sets us apart in the industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-neutral-600">
                  We use only the finest materials including SS316, SS304, Mild Steel, Polypropylene, 
                  UPVC, and more, ensuring durability and performance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customized Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-neutral-600">
                  Every product is designed and manufactured according to your specific requirements, 
                  ensuring a perfect fit for your application.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Wide Range of Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-neutral-600">
                  From filters and housings to tanks and vessels, we offer a comprehensive range of 
                  industrial products.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-neutral-600">
                  With years of experience serving chemical, pharmaceutical, and industrial sectors, 
                  we understand your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="primary">
        <div className="text-center text-white max-w-2xl mx-auto">
          <h2 className="text-h1 font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-body-lg mb-8 opacity-90">
            Get in touch with our team to discuss your requirements
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Contact Us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

