/**
 * JSON-LD Schema Component
 * 
 * Renders JSON-LD structured data in the document head
 */

interface JsonLdProps {
  schema: Record<string, unknown>;
}

/**
 * JsonLd Component
 * 
 * Renders JSON-LD structured data for SEO
 * 
 * @example
 * ```tsx
 * import { JsonLd } from '@/components/atoms';
 * import { generateProductSchema } from '@/lib/schema';
 * 
 * export default function ProductPage({ product }) {
 *   return (
 *     <>
 *       <JsonLd schema={generateProductSchema(product)} />
 *       <h1>{product.name}</h1>
 *     </>
 *   );
 * }
 * ```
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

