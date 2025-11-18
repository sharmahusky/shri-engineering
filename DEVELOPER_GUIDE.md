# Shri Engineering - Developer Quick Reference Guide

## Getting Started

### Installation
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure Quick Reference

```
src/
├── app/              # Next.js pages and layouts
├── components/       # Atomic design components
│   ├── atoms/       # Basic UI elements
│   ├── molecules/   # Component combinations
│   ├── organisms/   # Complex components
│   └── templates/   # Page layouts
├── types/           # TypeScript interfaces
├── constants/       # App configuration
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
└── utils/           # Helper functions
```

## Design System Usage

### Colors
```typescript
// Use Tailwind classes
<div className="bg-primary-500 text-white">Primary</div>
<div className="bg-secondary-500 text-white">Secondary</div>
<div className="bg-accent-500 text-white">Accent</div>

// Or CSS variables
<div style={{ color: 'var(--color-primary)' }}>Text</div>
```

### Typography
```typescript
// Tailwind classes
<h1 className="text-5xl font-bold">Heading 1</h1>
<h2 className="text-4xl font-bold">Heading 2</h2>
<p className="text-base text-gray-600">Body text</p>

// Or semantic HTML with globals.css
<h1>Heading 1</h1>
<p>Body text</p>
```

### Spacing
```typescript
// Use spacing scale
<div className="p-md mb-lg">Content</div>
// Equivalent to: padding: 1rem; margin-bottom: 1.5rem;
```

### Responsive Design
```typescript
// Mobile-first approach
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## Component Development

### Creating an Atom Component
```typescript
// src/components/atoms/Button.tsx
import { ButtonProps } from '@/types/common';

export default function Button({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${color} btn-${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Creating a Molecule Component
```typescript
// src/components/molecules/Card.tsx
import { CardProps } from '@/types/common';

export default function Card({
  children,
  hoverable = false,
  shadow = 'md',
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-lg bg-white p-lg shadow-${shadow} ${
        hoverable ? 'hover:shadow-lg transition-shadow' : ''
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
```

## Type Safety

### Using Types
```typescript
import { Product, ProductFilter } from '@/types/product';
import { ContactFormData } from '@/types/contact';

const product: Product = {
  id: '1',
  name: 'Filter Cartridge',
  // ... other properties
};
```

## Constants & Configuration

### Navigation
```typescript
import { MAIN_NAVIGATION, COMPANY_INFO } from '@/constants/navigation';

// Use in components
MAIN_NAVIGATION.map((item) => (
  <a key={item.href} href={item.href}>
    {item.label}
  </a>
));
```

### SEO
```typescript
import { PAGE_SEO, SCHEMA_ORGANIZATION } from '@/constants/seo';

// Use in metadata
export const metadata = PAGE_SEO.home;
```

## Common Tasks

### Add a New Page
1. Create folder in `src/app/(pages)/[page-name]/`
2. Create `page.tsx` with metadata
3. Add to navigation in `src/constants/navigation.ts`
4. Add SEO metadata to `src/constants/seo.ts`

### Add a New Component
1. Determine component level (atom/molecule/organism)
2. Create file in appropriate folder
3. Define TypeScript interface
4. Export component with JSDoc comments

### Add a New Type
1. Create or edit file in `src/types/`
2. Export interface/type
3. Use in components with proper imports

## Styling Guidelines

### Tailwind Classes
- Use predefined color scales: `primary-500`, `secondary-500`, etc.
- Use spacing scale: `p-md`, `mb-lg`, etc.
- Use responsive prefixes: `sm:`, `md:`, `lg:`
- Use custom animations: `animate-fadeIn`, `animate-slideUp`

### CSS Variables
- Access via `var(--color-primary)`, `var(--spacing-md)`, etc.
- Defined in `src/app/globals.css`
- Automatically update with theme changes

## Testing

### Run Tests
```bash
npm run test
```

### Run Linting
```bash
npm run lint
npm run lint:fix
```

### Format Code
```bash
npm run format
npm run format:check
```

## Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## Common Issues & Solutions

### Styles not applying?
- Check Tailwind content paths in `tailwind.config.ts`
- Ensure class names are complete (no string concatenation)
- Clear `.next` folder and rebuild

### Type errors?
- Check TypeScript strict mode in `tsconfig.json`
- Ensure all imports are correct
- Use proper type annotations

### Build errors?
- Check for console errors
- Verify all imports are correct
- Run `npm run lint` to check for issues

