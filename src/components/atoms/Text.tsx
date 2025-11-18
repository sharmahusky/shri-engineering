import React from 'react';
import { TextProps } from '@/types/common';

/**
 * Text Component - Atomic Design Atom
 * 
 * A flexible text component for displaying various text styles.
 * 
 * @example
 * <Text as="p" size="lg" color="primary" weight="semibold">
 *   Hello World
 * </Text>
 */
export default function Text({
  children,
  as = 'p',
  size = 'base',
  color = 'neutral',
  weight = 'normal',
  align = 'left',
  className = '',
  ...props
}: TextProps) {
  // Size variants
  const sizeStyles: Record<string, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  };

  // Color variants
  const colorStyles: Record<string, string> = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    accent: 'text-accent-500',
    neutral: 'text-neutral-700',
    'neutral-light': 'text-neutral-500',
    'neutral-lighter': 'text-neutral-400',
    white: 'text-white',
    error: 'text-red-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
  };

  // Weight variants
  const weightStyles: Record<string, string> = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Alignment variants
  const alignStyles: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  // Combine all styles
  const finalClassName = `${sizeStyles[size] || sizeStyles.base} ${colorStyles[color] || colorStyles.neutral} ${weightStyles[weight] || weightStyles.normal} ${alignStyles[align] || alignStyles.left} ${className}`;

  // Create the element dynamically
  const Component = as as React.ElementType;

  return (
    <Component className={finalClassName} {...props}>
      {children}
    </Component>
  );
}

