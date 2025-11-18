import React from 'react';
import NextLink from 'next/link';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'default' | 'underline' | 'button';
  color?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
}

/**
 * Link Component - Atomic Design Atom
 * 
 * A wrapper around Next.js Link with additional styling options.
 * 
 * @example
 * <Link href="/products" variant="default" color="primary">
 *   View Products
 * </Link>
 */
export default function Link({
  href,
  children,
  external = false,
  variant = 'default',
  color = 'primary',
  className = '',
  ...props
}: LinkProps) {
  // Base styles
  const baseStyles = 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded';

  // Variant styles
  const variantStyles = {
    default: 'hover:opacity-80',
    underline: 'underline hover:no-underline',
    button: 'px-4 py-2 rounded-lg font-semibold',
  };

  // Color styles
  const colorStyles = {
    primary: 'text-primary-500 hover:text-primary-600 focus:ring-primary-500',
    secondary: 'text-secondary-500 hover:text-secondary-600 focus:ring-secondary-500',
    accent: 'text-accent-500 hover:text-accent-600 focus:ring-accent-500',
    neutral: 'text-neutral-700 hover:text-neutral-800 focus:ring-neutral-500',
  };

  // Button variant specific styles
  const buttonColorStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    accent: 'bg-accent-500 text-white hover:bg-accent-600',
    neutral: 'bg-neutral-500 text-white hover:bg-neutral-600',
  };

  // Combine styles
  const isButton = variant === 'button';
  const finalColorStyles = isButton ? buttonColorStyles[color] : colorStyles[color];
  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${finalColorStyles} ${className}`;

  // External link
  if (external) {
    return (
      <a
        href={href}
        className={finalClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link
  return (
    <NextLink href={href} className={finalClassName} {...props}>
      {children}
    </NextLink>
  );
}

