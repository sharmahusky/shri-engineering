import React from 'react';
import { BadgeProps } from '@/types/common';

/**
 * Badge Component - Atomic Design Atom
 * 
 * A small label component for displaying tags, statuses, or categories.
 * 
 * @example
 * <Badge variant="solid" color="primary" size="md">
 *   New
 * </Badge>
 */
export default function Badge({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className = '',
  ...props
}: BadgeProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200';

  // Size variants
  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  // Color variants - solid
  const solidColorStyles: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-accent-100 text-accent-700',
    neutral: 'bg-neutral-100 text-neutral-700',
    'neutral-light': 'bg-neutral-50 text-neutral-600',
    'neutral-lighter': 'bg-neutral-50 text-neutral-500',
    white: 'bg-white text-primary-500',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  // Color variants - outline
  const outlineColorStyles: Record<string, string> = {
    primary: 'border-2 border-primary-500 text-primary-500',
    secondary: 'border-2 border-secondary-500 text-secondary-500',
    accent: 'border-2 border-accent-500 text-accent-500',
    neutral: 'border-2 border-neutral-500 text-neutral-500',
    'neutral-light': 'border-2 border-neutral-300 text-neutral-600',
    'neutral-lighter': 'border-2 border-neutral-200 text-neutral-500',
    white: 'border-2 border-white text-white',
    success: 'border-2 border-green-500 text-green-500',
    warning: 'border-2 border-yellow-500 text-yellow-500',
    error: 'border-2 border-red-500 text-red-500',
  };

  // Determine color styles based on variant
  let colorStyles = '';
  if (variant === 'solid') {
    colorStyles = solidColorStyles[color] || solidColorStyles.neutral;
  } else if (variant === 'outline') {
    colorStyles = outlineColorStyles[color] || outlineColorStyles.neutral;
  }

  // Combine all styles
  const finalClassName = `${baseStyles} ${sizeStyles[size]} ${colorStyles} ${className}`;

  return (
    <span className={finalClassName} {...props}>
      {children}
    </span>
  );
}

