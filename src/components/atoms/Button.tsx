import React from 'react';
import { ButtonProps } from '@/types/common';

/**
 * Button Component - Atomic Design Atom
 * 
 * A reusable button component with multiple variants, sizes, and colors.
 * 
 * @example
 * <Button variant="solid" color="primary" size="md">
 *   Click Me
 * </Button>
 */
export default function Button({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Size variants
  const sizeStyles: Record<string, string> = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-3.5 text-xl',
    '2xl': 'px-12 py-4 text-2xl',
    '3xl': 'px-14 py-4.5 text-3xl',
    '4xl': 'px-16 py-5 text-4xl',
    '5xl': 'px-20 py-6 text-5xl',
    '6xl': 'px-24 py-7 text-6xl',
    base: 'px-6 py-2.5 text-base',
  };

  // Color variants - solid
  const solidColorStyles: Record<string, string> = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    neutral: 'bg-neutral-500 text-white hover:bg-neutral-600 focus:ring-neutral-500',
    'neutral-light': 'bg-neutral-400 text-white hover:bg-neutral-500 focus:ring-neutral-400',
    'neutral-lighter': 'bg-neutral-300 text-neutral-700 hover:bg-neutral-400 focus:ring-neutral-300',
    white: 'bg-white text-primary-500 hover:bg-neutral-100 focus:ring-white',
    error: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
  };

  // Color variants - outline
  const outlineColorStyles: Record<string, string> = {
    primary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    secondary: 'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 focus:ring-secondary-500',
    accent: 'border-2 border-accent-500 text-accent-500 hover:bg-accent-50 focus:ring-accent-500',
    neutral: 'border-2 border-neutral-500 text-neutral-500 hover:bg-neutral-50 focus:ring-neutral-500',
    'neutral-light': 'border-2 border-neutral-400 text-neutral-600 hover:bg-neutral-50 focus:ring-neutral-400',
    'neutral-lighter': 'border-2 border-neutral-300 text-neutral-500 hover:bg-neutral-50 focus:ring-neutral-300',
    white: 'border-2 border-white text-white hover:bg-white hover:text-primary-500 focus:ring-white',
    error: 'border-2 border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500',
    success: 'border-2 border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500',
    warning: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-500',
  };

  // Color variants - ghost
  const ghostColorStyles: Record<string, string> = {
    primary: 'text-primary-500 hover:bg-primary-100 focus:ring-primary-500',
    secondary: 'text-secondary-500 hover:bg-secondary-100 focus:ring-secondary-500',
    accent: 'text-accent-500 hover:bg-accent-100 focus:ring-accent-500',
    neutral: 'text-neutral-500 hover:bg-neutral-100 focus:ring-neutral-500',
    'neutral-light': 'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-400',
    'neutral-lighter': 'text-neutral-500 hover:bg-neutral-100 focus:ring-neutral-300',
    white: 'text-white hover:bg-white hover:text-primary-500 focus:ring-white',
    error: 'text-red-500 hover:bg-red-100 focus:ring-red-500',
    success: 'text-green-500 hover:bg-green-100 focus:ring-green-500',
    warning: 'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-500',
  };

  // Determine color styles based on variant
  let colorStyles = '';
  if (variant === 'solid') {
    colorStyles = solidColorStyles[color] || solidColorStyles.neutral;
  } else if (variant === 'outline') {
    colorStyles = outlineColorStyles[color] || outlineColorStyles.neutral;
  } else if (variant === 'ghost') {
    colorStyles = ghostColorStyles[color] || ghostColorStyles.neutral;
  }

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Combine all styles
  const finalClassName = `${baseStyles} ${sizeStyles[size]} ${colorStyles} ${widthStyles} ${className}`;

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

