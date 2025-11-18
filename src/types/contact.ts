/**
 * Contact and form-related TypeScript types and interfaces
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string;
  inquiryType?: 'general' | 'product' | 'service' | 'partnership';
}

export interface ProductInquiryFormData {
  productId: string;
  productName: string;
  customerName: string;
  email: string;
  phone: string;
  company?: string;
  quantity?: string;
  specifications?: string;
  message?: string;
  inquiryType: 'quote' | 'information' | 'sample' | 'custom';
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  subscriptionDate: Date;
  active: boolean;
}

export interface ContactMessage {
  id: string;
  type: 'contact' | 'inquiry' | 'newsletter';
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: 'new' | 'read' | 'responded' | 'archived';
  createdAt: Date;
  respondedAt?: Date;
  response?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  website?: string;
  businessHours?: {
    day: string;
    open: string;
    close: string;
  }[];
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  errors?: FormValidationError[];
  data?: Record<string, unknown>;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  variables: string[];
}

export interface EmailNotification {
  to: string;
  subject: string;
  template: string;
  variables: Record<string, string>;
  sentAt?: Date;
  status: 'pending' | 'sent' | 'failed';
}

