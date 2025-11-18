/**
 * Common TypeScript types and interfaces used across the application
 */

export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'neutral-light' | 'neutral-lighter' | 'white' | 'error' | 'success' | 'warning';
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'base';
export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface BaseComponentProps {
  className?: string;
  id?: string;
  testId?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  color?: ColorVariant | 'white';
  size?: SizeVariant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export interface InputProps extends BaseComponentProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string | boolean;
  label?: string;
  size?: SizeVariant;
  name?: string;
}

export interface CardProps extends BaseComponentProps {
  children: React.ReactNode;
  hoverable?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  padding?: SizeVariant;
  rounded?: boolean;
  border?: boolean;
}

export interface TextProps extends BaseComponentProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'tiny';
  size?: SizeVariant;
  color?: ColorVariant;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  children: React.ReactNode;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: 'solid' | 'outline';
  color?: ColorVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export interface IconProps extends BaseComponentProps {
  name: string;
  size?: SizeVariant;
  color?: ColorVariant;
}

export interface FormFieldProps extends BaseComponentProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  helperText?: string;
}

export interface PaginationProps extends BaseComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[];
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
  city?: string;
  country?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  robots?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

