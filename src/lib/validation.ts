/**
 * Form Validation Utilities
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex (international format)
 */
const PHONE_REGEX = /^[\d\s\-\+\(\)]{10,}$/;

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): boolean {
  return PHONE_REGEX.test(phone.trim());
}

/**
 * Validate required field
 */
export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validate minimum length
 */
export function validateMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}

/**
 * Validate contact form
 */
export function validateContactForm(data: {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.name || '')) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (!validateMinLength(data.name || '', 2)) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  } else if (!validateMaxLength(data.name || '', 100)) {
    errors.push({ field: 'name', message: 'Name must not exceed 100 characters' });
  }

  if (!validateRequired(data.email || '')) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email || '')) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
  }

  if (!validateRequired(data.subject || '')) {
    errors.push({ field: 'subject', message: 'Subject is required' });
  } else if (!validateMinLength(data.subject || '', 5)) {
    errors.push({ field: 'subject', message: 'Subject must be at least 5 characters' });
  }

  if (!validateRequired(data.message || '')) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (!validateMinLength(data.message || '', 10)) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (!validateMaxLength(data.message || '', 5000)) {
    errors.push({ field: 'message', message: 'Message must not exceed 5000 characters' });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate inquiry form
 */
export function validateInquiryForm(data: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  productCategory?: string;
  quantity?: string;
  message?: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.name || '')) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (!validateMinLength(data.name || '', 2)) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }

  if (!validateRequired(data.email || '')) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email || '')) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (!validateRequired(data.phone || '')) {
    errors.push({ field: 'phone', message: 'Phone is required' });
  } else if (!validatePhone(data.phone || '')) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
  }

  if (!validateRequired(data.productCategory || '')) {
    errors.push({ field: 'productCategory', message: 'Product category is required' });
  }

  if (data.quantity && !validateMinLength(data.quantity, 1)) {
    errors.push({ field: 'quantity', message: 'Please enter a valid quantity' });
  }

  if (!validateRequired(data.message || '')) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (!validateMinLength(data.message || '', 10)) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Get error message for field
 */
export function getFieldError(errors: ValidationError[], field: string): string | undefined {
  return errors.find((e) => e.field === field)?.message;
}

