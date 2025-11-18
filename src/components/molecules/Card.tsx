import React from 'react';
import { CardProps } from '@/types/common';

/**
 * Card Component - Atomic Design Molecule
 * 
 * A container component for grouping related content.
 * 
 * @example
 * <Card hoverable shadow="md">
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>Footer</Card.Footer>
 * </Card>
 */
export default function Card({
  children,
  hoverable = false,
  shadow = 'md',
  padding = 'md',
  border = false,
  className = '',
  ...props
}: CardProps) {
  // Shadow variants
  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // Padding variants
  const paddingStyles: Record<string, string> = {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-10',
    '3xl': 'p-12',
    '4xl': 'p-14',
    '5xl': 'p-16',
    '6xl': 'p-20',
    base: 'p-4',
  };

  // Base styles
  const baseStyles = 'rounded-lg bg-white transition-all duration-200';

  // Hover styles
  const hoverStyles = hoverable ? 'hover:shadow-lg cursor-pointer' : '';

  // Border styles
  const borderStyles = border ? 'border-2 border-neutral-200' : '';

  // Combine all styles
  const finalClassName = `${baseStyles} ${shadowStyles[shadow] || shadowStyles.md} ${paddingStyles[padding] || paddingStyles.md} ${hoverStyles} ${borderStyles} ${className}`;

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}

/**
 * Card.Header - Header section of the card
 */
Card.Header = function CardHeader({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div className={`border-b border-neutral-200 pb-4 mb-4 ${className}`} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
};

/**
 * Card.Body - Main content section of the card
 */
Card.Body = function CardBody({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div className={`${className}`} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
};

/**
 * Card.Footer - Footer section of the card
 */
Card.Footer = function CardFooter({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div className={`border-t border-neutral-200 pt-4 mt-4 ${className}`} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
};

