'use client';

import { useState } from 'react';
import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardContent, Input, Textarea, Button } from '@/components/ui';
import { companyInfo } from '@/lib/constants/company';
import { formatPhoneNumber } from '@/lib/utils/format';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Contact Us</h1>
          <p className="text-body-lg opacity-90">
            Get in touch with our team for inquiries, quotes, or support
          </p>
        </div>
      </Section>

      {/* Contact Information & Form */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-h1 font-bold text-neutral-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-h4 font-semibold text-neutral-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                    className="text-body-lg text-primary hover:underline"
                  >
                    {formatPhoneNumber(companyInfo.contact.phone)}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-h4 font-semibold text-neutral-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-body-lg text-primary hover:underline break-all"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-h4 font-semibold text-neutral-900 mb-2">Address</h3>
                  <p className="text-body-lg text-neutral-600">
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.city}-{companyInfo.address.postalCode}
                    <br />
                    {companyInfo.address.state}, {companyInfo.address.country}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-h4 font-semibold text-neutral-900 mb-2">GST Number</h3>
                  <p className="text-body-lg text-neutral-600">{companyInfo.contact.gst}</p>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-neutral-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                    
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                    
                    <Input
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                    
                    <Input
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex h-11 w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="quote-request">Quote Request</option>
                        <option value="service-inquiry">Service Inquiry</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <Textarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your requirements..."
                      rows={6}
                    />
                    
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-accent-green/10 border border-accent-green rounded-md">
                        <p className="text-body-sm text-accent-green">
                          Thank you! Your message has been sent. We'll get back to you soon.
                        </p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-accent-red/10 border border-accent-red rounded-md">
                        <p className="text-body-sm text-accent-red">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

