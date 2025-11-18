import React from 'react';
import Text from '@/components/atoms/Text';

interface FormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

/**
 * FormField Component - Atomic Design Molecule
 * 
 * A wrapper component for form inputs with label, error, and hint text.
 * 
 * @example
 * <FormField 
 *   label="Email" 
 *   error="Invalid email"
 *   required
 * >
 *   <Input type="email" placeholder="Enter email" />
 * </FormField>
 */
export default function FormField({
  label,
  error,
  hint,
  required = false,
  children,
  className = '',
  ...props
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`} {...props}>
      {label && (
        <label className="flex items-center gap-1">
          <Text as="span" size="sm" weight="semibold" color="neutral">
            {label}
          </Text>
          {required && (
            <span className="text-red-500 font-bold">*</span>
          )}
        </label>
      )}

      {children}

      {error && (
        <Text as="span" size="xs" color="error">
          {error}
        </Text>
      )}

      {hint && !error && (
        <Text as="span" size="xs" color="neutral-light">
          {hint}
        </Text>
      )}
    </div>
  );
}

