'use client';

import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import Card from '@/components/molecules/Card';
import FormField from '@/components/molecules/FormField';
import Input from '@/components/atoms/Input';
import PageLayout from '@/components/templates/PageLayout';
import { useForm } from '@/hooks/useForm';
import { COMPANY_INFO } from '@/constants/navigation';

// Note: Metadata export not supported in client components
// export const metadata: Metadata = PAGE_SEO.contact;

export default function ContactPage() {
  const { values, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.name) errors.name = 'Name is required';
      if (!values.email) errors.email = 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Invalid email';
      if (!values.subject) errors.subject = 'Subject is required';
      if (!values.message) errors.message = 'Message is required';
      return errors;
    },
    onSubmit: async (values) => {
      // TODO: Implement email sending
      console.log('Form submitted:', values);
      alert('Thank you for your message. We will get back to you soon!');
      resetForm();
    },
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-24">
        <div className="container mx-auto px-4">
          <Text as="h1" size="5xl" weight="bold" className="mb-4">
            Get in Touch
          </Text>
          <Text as="p" size="xl" color="white" className="opacity-90">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </Text>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card shadow="md" className="mb-6">
                <Card.Header>
                  <Text as="h3" size="lg" weight="bold" color="primary">
                    Contact Information
                  </Text>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    <div>
                      <Text as="p" size="sm" weight="semibold" color="neutral" className="mb-1">
                        Email
                      </Text>
                      <Text as="p" size="sm" color="neutral-light">
                        {COMPANY_INFO.email}
                      </Text>
                    </div>
                    <div>
                      <Text as="p" size="sm" weight="semibold" color="neutral" className="mb-1">
                        Phone
                      </Text>
                      <Text as="p" size="sm" color="neutral-light">
                        {COMPANY_INFO.phone}
                      </Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card shadow="md">
                <Card.Header>
                  <Text as="h3" size="lg" weight="bold" color="secondary">
                    Business Hours
                  </Text>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Text as="span" size="sm" color="neutral">
                        Monday - Friday
                      </Text>
                      <Text as="span" size="sm" weight="semibold" color="neutral-light">
                        9:00 AM - 6:00 PM
                      </Text>
                    </div>
                    <div className="flex justify-between">
                      <Text as="span" size="sm" color="neutral">
                        Saturday
                      </Text>
                      <Text as="span" size="sm" weight="semibold" color="neutral-light">
                        10:00 AM - 4:00 PM
                      </Text>
                    </div>
                    <div className="flex justify-between">
                      <Text as="span" size="sm" color="neutral">
                        Sunday
                      </Text>
                      <Text as="span" size="sm" weight="semibold" color="neutral-light">
                        Closed
                      </Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card shadow="md">
                <Card.Header>
                  <Text as="h3" size="lg" weight="bold" color="neutral">
                    Send us a Message
                  </Text>
                </Card.Header>
                <Card.Body>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FormField label="Name" error={errors.name} required>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </FormField>

                    <FormField label="Email" error={errors.email} required>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </FormField>

                    <FormField label="Phone" error={errors.phone}>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </FormField>

                    <FormField label="Subject" error={errors.subject} required>
                      <Input
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        value={values.subject}
                        onChange={handleChange}
                      />
                    </FormField>

                    <FormField label="Message" error={errors.message} required>
                      <textarea
                        name="message"
                        placeholder="Your message..."
                        value={values.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </FormField>

                    <Button
                      type="submit"
                      variant="solid"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

