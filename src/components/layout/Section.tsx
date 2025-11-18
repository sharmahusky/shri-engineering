import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  background?: 'white' | 'gray' | 'neutral-50' | 'primary' | 'primary-600' | 'secondary';
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  container = true,
  background = 'white',
  ...props
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-100', // Using the new neutral-100 (slate-like)
    'neutral-50': 'bg-neutral-50',
    primary: 'bg-primary-900 text-white',
    'primary-600': 'bg-primary-800 text-white',
    secondary: 'bg-secondary-700 text-white',
  };

  const content = container ? <Container>{children}</Container> : children;

  return (
    <section
      className={cn('w-full py-16 lg:py-24', backgrounds[background], className)}
      {...props}
    >
      {content}
    </section>
  );
};

