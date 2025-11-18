import React from 'react';
import { ProductSpecification } from '@/types';

interface SpecificationTableProps {
  specifications: ProductSpecification;
}

export const SpecificationTable: React.FC<SpecificationTableProps> = ({ specifications }) => {
  const specEntries = Object.entries(specifications).filter(([_, value]) => value !== undefined);
  
  if (specEntries.length === 0) {
    return null;
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-neutral-100">
            <th className="border border-neutral-300 px-4 py-3 text-left font-semibold text-neutral-900">
              Specification
            </th>
            <th className="border border-neutral-300 px-4 py-3 text-left font-semibold text-neutral-900">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {specEntries.map(([key, value]) => {
            const label = key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())
              .trim();
            
            const displayValue = Array.isArray(value) ? value.join(', ') : value;
            
            return (
              <tr key={key} className="hover:bg-neutral-50">
                <td className="border border-neutral-300 px-4 py-3 font-medium text-neutral-700">
                  {label}
                </td>
                <td className="border border-neutral-300 px-4 py-3 text-neutral-600">
                  {displayValue}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

