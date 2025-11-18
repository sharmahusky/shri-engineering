import React from 'react';
import { InputProps } from '@/types/common';

/**
 * Input Component - Atomic Design Atom
 * 
 * A reusable input component with multiple sizes and states.
 * 
 * @example
 * <Input 
 *   type="email" 
 *   placeholder="Enter email" 
 *   size="md"
 * />
 */
export default function Input({
  type = 'text',
  size = 'md',
  disabled = false,
  error = false,
  className = '',
  ...props
}: InputProps) {
  // Base styles
  const baseStyles = 'w-full font-medium rounded-lg border-2 transition-all duration-200 focus:outline-none';

  // Size variants
  const sizeStyles: Record<string, string> = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
    xl: 'px-6 py-3.5 text-xl',
    '2xl': 'px-7 py-4 text-2xl',
    '3xl': 'px-8 py-4.5 text-3xl',
    '4xl': 'px-10 py-5 text-4xl',
    '5xl': 'px-12 py-6 text-5xl',
    '6xl': 'px-14 py-7 text-6xl',
    base: 'px-4 py-2.5 text-base',
  };

  // State styles
  const stateStyles = error
    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
    : 'border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200';

  // Disabled styles
  const disabledStyles = disabled ? 'bg-neutral-100 cursor-not-allowed opacity-60' : 'bg-white';

  // Combine all styles
  const finalClassName = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${stateStyles} ${disabledStyles} ${className}`;

  return (
    <input
      type={type}
      className={finalClassName}
      disabled={disabled}
      {...props}
    />
  );
}

