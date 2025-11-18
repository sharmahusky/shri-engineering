# Shri Engineering - Project Structure

## Atomic Design Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── (pages)/                 # Route groups
│   │   ├── products/            # Product pages
│   │   ├── about/               # About page
│   │   └── contact/             # Contact page
│   └── api/                     # API routes
│
├── components/                   # Atomic Design Components
│   ├── atoms/                   # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Icon.tsx
│   │   └── Text.tsx
│   │
│   ├── molecules/               # Simple component groups
│   │   ├── Card.tsx
│   │   ├── FormField.tsx
│   │   ├── ProductCard.tsx
│   │   ├── NavLink.tsx
│   │   └── SearchBar.tsx
│   │
│   ├── organisms/               # Complex component groups
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ContactForm.tsx
│   │   └── ProductFilter.tsx
│   │
│   └── templates/               # Page templates
│       ├── ProductLayout.tsx
│       ├── PageLayout.tsx
│       └── BlogLayout.tsx
│
├── lib/                         # Utility functions
│   ├── api.ts                   # API client
│   ├── seo.ts                   # SEO utilities
│   └── validation.ts            # Form validation
│
├── types/                       # TypeScript types
│   ├── product.ts
│   ├── contact.ts
│   └── common.ts
│
├── constants/                   # App constants
│   ├── products.ts              # Product data
│   ├── navigation.ts            # Navigation config
│   └── seo.ts                   # SEO metadata
│
├── hooks/                       # Custom React hooks
│   ├── useForm.ts
│   ├── useProducts.ts
│   └── useScroll.ts
│
└── utils/                       # Helper functions
    ├── formatters.ts
    ├── validators.ts
    └── helpers.ts

public/                          # Static assets
├── images/
│   ├── products/
│   ├── hero/
│   └── icons/
└── fonts/

```

## Component Hierarchy

### Atoms (Basic Elements)
- Button
- Input
- Badge
- Icon
- Text
- Link

### Molecules (Simple Groups)
- Card
- FormField
- ProductCard
- NavLink
- SearchBar
- ImageWithCaption

### Organisms (Complex Groups)
- Header
- Footer
- Navigation
- ProductGrid
- ContactForm
- ProductFilter
- HeroSection
- TestimonialSection

### Templates (Page Layouts)
- ProductLayout
- PageLayout
- BlogLayout

## File Naming Conventions

- **Components**: PascalCase (Button.tsx)
- **Utilities**: camelCase (formatters.ts)
- **Types**: PascalCase (Product.ts)
- **Constants**: camelCase (products.ts)
- **Hooks**: camelCase with 'use' prefix (useForm.ts)

## Import Paths

Use path aliases for cleaner imports:
```typescript
import Button from '@/components/atoms/Button';
import { Product } from '@/types/product';
import { PRODUCTS } from '@/constants/products';
```

## Best Practices

1. **Single Responsibility**: Each component has one purpose
2. **Reusability**: Build components to be reused
3. **Composition**: Combine atoms into molecules, molecules into organisms
4. **Props**: Use TypeScript for type safety
5. **Styling**: Use Tailwind CSS classes
6. **Documentation**: Add JSDoc comments to components

