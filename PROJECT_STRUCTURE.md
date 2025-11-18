# Project Structure & Organization
## Shri Engineering - Next.js App Router Structure

### Proposed Folder Structure

```
shri-engineering/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── products/
│   │   │   │   ├── filters/
│   │   │   │   ├── tanks/
│   │   │   │   ├── housings/
│   │   │   │   └── systems/
│   │   │   ├── company/
│   │   │   │   ├── logo.svg
│   │   │   │   ├── logo-white.svg
│   │   │   │   └── factory/
│   │   │   └── clients/
│   │   ├── icons/
│   │   └── catalog/
│   │       └── (original catalog PDF/images)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx                    # Home page
│   │   │   ├── about/
│   │   │   │   └── page.tsx                # About Us page
│   │   │   ├── products/
│   │   │   │   ├── page.tsx                # Products listing
│   │   │   │   ├── [category]/
│   │   │   │   │   └── page.tsx            # Product category pages
│   │   │   │   └── [category]/[product]/
│   │   │   │       └── page.tsx            # Individual product pages
│   │   │   ├── services/
│   │   │   │   └── page.tsx                # Services page
│   │   │   ├── clients/
│   │   │   │   └── page.tsx                # Clients/Partners page
│   │   │   ├── certifications/
│   │   │   │   └── page.tsx                # Certifications page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx                # Contact Us page
│   │   │   └── layout.tsx                  # Root layout
│   │   ├── globals.css                     # Global styles
│   │   ├── metadata.ts                     # Default metadata
│   │   └── sitemap.ts                      # Dynamic sitemap generation
│   │
│   ├── components/
│   │   ├── ui/                             # Atomic Design: Atoms
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Image.tsx                   # Optimized image wrapper
│   │   │   └── index.ts                    # Barrel exports
│   │   │
│   │   ├── molecules/                      # Atomic Design: Molecules
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ClientLogo.tsx
│   │   │   ├── SpecificationTable.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── InquiryForm.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── organisms/                      # Atomic Design: Organisms
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterLinks.tsx
│   │   │   │   ├── ContactInfo.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ProductGrid/
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ClientShowcase/
│   │   │   │   ├── ClientShowcase.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/                       # Page Sections
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── layout/                         # Layout Components
│   │       ├── Container.tsx
│   │       ├── Section.tsx
│   │       └── index.ts
│   │
│   ├── lib/
│   │   ├── utils/
│   │   │   ├── cn.ts                       # Class name utility (clsx + tailwind-merge)
│   │   │   ├── format.ts                   # Formatting utilities
│   │   │   └── validation.ts               # Form validation
│   │   ├── constants/
│   │   │   ├── products.ts                 # Product data constants
│   │   │   ├── services.ts                 # Services data
│   │   │   ├── clients.ts                  # Client logos/info
│   │   │   ├── certifications.ts           # Certification data
│   │   │   └── navigation.ts               # Navigation menu items
│   │   └── api/
│   │       └── contact.ts                  # Contact form API handler
│   │
│   ├── types/
│   │   ├── product.ts                      # Product type definitions
│   │   ├── service.ts                      # Service type definitions
│   │   ├── contact.ts                      # Contact form types
│   │   └── index.ts                        # Re-export all types
│   │
│   └── styles/
│       └── components.css                  # Component-specific styles
│
├── .env.example                            # Environment variables template
├── .env.local                              # Local environment (gitignored)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Directory Explanations

#### `/src/app/`
- Uses Next.js App Router for file-based routing
- `(routes)` - Route group for main pages
- Dynamic routes for products: `[category]` and `[product]`

#### `/src/components/`
- **Atomic Design Pattern**:
  - `ui/` - Basic building blocks (atoms)
  - `molecules/` - Simple component combinations
  - `organisms/` - Complex components
- **sections/** - Reusable page sections
- **layout/** - Layout utilities

#### `/src/lib/`
- **utils/** - Helper functions
- **constants/** - Static data (products, services, clients)
- **api/** - API route handlers

#### `/src/types/`
- TypeScript type definitions for type safety

#### `/public/assets/`
- Organized by asset type (images, icons, catalog)
- Product images organized by category

### Component Hierarchy

```
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   └── MobileMenu
├── Main Content (Page-specific)
│   ├── Hero
│   ├── Sections
│   └── Forms
└── Footer
    ├── FooterLinks
    ├── ContactInfo
    └── SocialLinks
```

### Reusable Components Strategy

1. **ProductCard** - Used in Products listing, Home page, Category pages
2. **SpecificationTable** - Used across all product detail pages
3. **ContactForm** - Used in Contact page and as modal
4. **Section** - Wrapper for consistent section spacing
5. **Container** - Consistent max-width and padding

