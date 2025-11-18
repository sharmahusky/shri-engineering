# Architecture & Technical Recommendations
## Shri Engineering - Production-Ready Architecture Plan

### 1. State Management Approach

#### Recommendation: **React Context API + Local State**

**Rationale:**
- For this project, global state management (Redux, Zustand) is **not necessary**
- Most state is component-local (forms, UI toggles)
- Use React Context for:
  - Theme preferences (if implementing dark mode toggle)
  - Navigation state (mobile menu)
  - Cart/Wishlist (if adding product comparison feature)

**Implementation:**
```typescript
// src/contexts/ThemeContext.tsx (if needed)
// src/contexts/NavigationContext.tsx (for mobile menu)
```

**When to Reconsider:**
- If adding user authentication
- If implementing complex product comparison
- If adding shopping cart functionality
- If real-time features are needed

---

### 2. Form Handling Strategy

#### Recommendation: **React Hook Form + Zod Validation**

**Why React Hook Form:**
- Excellent performance (minimal re-renders)
- Small bundle size
- Easy integration with validation libraries
- Built-in error handling

**Why Zod:**
- TypeScript-first schema validation
- Type inference from schemas
- Great developer experience
- Runtime type checking

**Implementation:**
```typescript
// Example: Contact Form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
```

**Form Submission:**
- Client-side validation with React Hook Form + Zod
- Server-side validation in API route
- Email notification (using Resend, SendGrid, or Nodemailer)
- Success/error feedback to user

**Required Packages:**
```json
{
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "@hookform/resolvers": "^3.x"
}
```

---

### 3. Additional Libraries & Tools

#### Essential Packages

**1. Class Name Utilities**
```json
{
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```
- Combine Tailwind classes conditionally
- Merge conflicting Tailwind classes

**2. Form Handling** (as mentioned above)
```json
{
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "@hookform/resolvers": "^3.x"
}
```

**3. Icons**
```json
{
  "lucide-react": "^0.x"
}
```
- Modern, customizable icons
- Tree-shakeable
- TypeScript support

**4. Email Service** (Choose one)
```json
{
  "resend": "^2.x"  // Recommended - modern, simple
  // OR
  "nodemailer": "^6.x"  // Traditional option
  // OR
  "@sendgrid/mail": "^7.x"  // Enterprise option
}
```

**5. Date/Time Formatting** (if needed)
```json
{
  "date-fns": "^3.x"
}
```

#### Optional but Recommended

**1. Animation Library**
```json
{
  "framer-motion": "^11.x"
}
```
- Smooth page transitions
- Component animations
- Scroll animations

**2. Toast Notifications**
```json
{
  "sonner": "^1.x"  // Lightweight, modern
  // OR
  "react-hot-toast": "^2.x"  // Popular alternative
}
```

**3. Environment Variables Validation**
```json
{
  "zod": "^3.x"  // Already included for forms
}
```
- Validate environment variables at build time

---

### 4. API & Backend Strategy

#### API Routes Structure

```
src/app/api/
├── contact/
│   └── route.ts          # POST /api/contact
├── inquiry/
│   └── route.ts          # POST /api/inquiry
└── products/
    └── route.ts          # GET /api/products (if needed)
```

#### Contact Form API Handler

**Features:**
- Validate input with Zod
- Sanitize user input
- Send email notification
- Store inquiry in database (optional)
- Return appropriate response

**Email Service Integration:**
- Use Resend or SendGrid for transactional emails
- Email templates for inquiries
- Auto-reply to customer
- Notification to company

#### Database Consideration

**Current Recommendation: No Database Initially**

**Why:**
- Static content (products, services)
- Contact forms can use email-only approach
- Simpler deployment and maintenance

**When to Add Database:**
- Need to track inquiries/leads
- Want to implement CMS for content updates
- Need user authentication
- Want analytics dashboard

**If Adding Database Later:**
- **Recommended**: PostgreSQL with Prisma ORM
- **Alternative**: MongoDB with Mongoose
- **Simple Option**: Supabase (PostgreSQL + Auth + Storage)

---

### 5. Responsive Design Strategy

#### Mobile-First Approach

**Breakpoints:**
```typescript
// tailwind.config.ts
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

**Design Principles:**
1. **Mobile-First**: Design for mobile, enhance for larger screens
2. **Touch-Friendly**: Minimum 44x44px touch targets
3. **Readable Text**: Minimum 16px font size on mobile
4. **Optimized Images**: Serve appropriate sizes for each device
5. **Fast Loading**: Prioritize above-the-fold content

**Component Responsiveness:**
- Navigation: Hamburger menu on mobile, full menu on desktop
- Product Grid: 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)
- Forms: Full width on mobile, constrained width on desktop
- Images: Responsive with next/image

---

### 6. Performance Optimization Techniques

#### 1. Static Site Generation (SSG)

**Strategy:**
- Generate static pages at build time
- Use `generateStaticParams` for dynamic routes
- Revalidate with ISR (Incremental Static Regeneration)

**Implementation:**
```typescript
// app/products/[category]/page.tsx
export async function generateStaticParams() {
  return [
    { category: 'filters' },
    { category: 'tanks-vessels' },
  ];
}

export const revalidate = 3600; // Revalidate every hour
```

#### 2. Image Optimization

**Next.js Image Component:**
- Automatic image optimization
- Lazy loading
- Responsive images
- WebP format support

**Best Practices:**
- Use `next/image` for all images
- Specify `width` and `height` or use `fill`
- Use `priority` for above-the-fold images
- Implement `placeholder="blur"` for better UX

#### 3. Code Splitting

**Automatic Route-Based Splitting:**
- Next.js automatically code-splits by route
- Each page loads only its required code

**Manual Code Splitting:**
```typescript
// For heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // If client-only
});
```

#### 4. Font Optimization

**Already Configured:**
- Using `next/font` (Geist fonts)
- Automatic font optimization
- Font display: swap

#### 5. Bundle Analysis

**Tools:**
- `@next/bundle-analyzer` - Analyze bundle size
- Lighthouse - Performance auditing
- WebPageTest - Detailed performance metrics

---

### 7. Accessibility (a11y) Best Practices

#### WCAG 2.1 Level AA Compliance

**1. Semantic HTML**
- Use proper HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Proper heading hierarchy (H1 → H2 → H3)
- Use `<button>` for buttons, `<a>` for links

**2. Keyboard Navigation**
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order
- Skip to main content link

**3. Screen Reader Support**
- Descriptive alt text for images
- ARIA labels where needed
- Form labels properly associated
- Error messages announced

**4. Color Contrast**
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text
- Don't rely solely on color for information

**5. Forms**
- Clear labels for all inputs
- Error messages associated with inputs
- Required fields clearly marked
- Helpful error messages

**6. Testing Tools**
- axe DevTools browser extension
- WAVE browser extension
- Lighthouse accessibility audit
- Keyboard-only navigation testing

**Implementation Checklist:**
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA attributes where needed
- [ ] Skip links implemented
- [ ] Semantic HTML throughout

---

### 8. Security Best Practices

#### 1. Environment Variables
- Never commit `.env.local`
- Use `.env.example` for documentation
- Validate environment variables at build time

#### 2. Input Validation
- Validate all user inputs (client + server)
- Sanitize user inputs
- Use Zod for schema validation

#### 3. API Security
- Rate limiting on API routes
- CORS configuration
- Input sanitization
- SQL injection prevention (if using database)

#### 4. Content Security Policy (CSP)
- Implement CSP headers
- Restrict resource loading
- Prevent XSS attacks

#### 5. HTTPS
- Always use HTTPS in production
- Redirect HTTP to HTTPS

---

### 9. Deployment Strategy

#### Recommended Platform: **Vercel**

**Why Vercel:**
- Built by Next.js creators
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Preview deployments
- Analytics included

**Alternative Options:**
- **Netlify**: Similar to Vercel, good alternative
- **AWS Amplify**: For AWS ecosystem
- **Self-hosted**: VPS with Docker (more complex)

#### Deployment Checklist

**Pre-Deployment:**
- [ ] Environment variables configured
- [ ] Build succeeds locally
- [ ] All tests pass (if applicable)
- [ ] Performance optimized
- [ ] SEO metadata configured
- [ ] Analytics configured

**Post-Deployment:**
- [ ] Verify all pages load correctly
- [ ] Test forms submission
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Test page speed
- [ ] Submit sitemap to Google Search Console

---

### 10. Development Workflow

#### Git Workflow

**Branch Strategy:**
- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

#### Code Quality

**Linting:**
- ESLint already configured
- Run `npm run lint` before commits

**Formatting:**
- Consider Prettier (user declined, but can add later)
- Consistent code style

**Type Checking:**
- TypeScript strict mode enabled
- Run `tsc --noEmit` to check types

#### Pre-commit Hooks (Optional)

**Husky + lint-staged:**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "git add"]
  }
}
```

---

### 11. Monitoring & Analytics

#### Analytics

**Google Analytics 4:**
- Track page views
- User behavior
- Conversion tracking (form submissions)
- Custom events

**Implementation:**
```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

#### Error Monitoring

**Sentry (Optional):**
- Error tracking
- Performance monitoring
- User feedback

#### Uptime Monitoring

**Services:**
- UptimeRobot (free tier available)
- Pingdom
- StatusCake

---

### 12. Content Management

#### Current Approach: Code-Based

**Pros:**
- Version controlled
- Fast performance
- No CMS overhead

**Cons:**
- Requires developer for updates
- No non-technical user editing

#### Future Consideration: Headless CMS

**If Content Updates Needed Frequently:**
- **Contentful**: Popular, user-friendly
- **Sanity**: Developer-friendly, flexible
- **Strapi**: Self-hosted option
- **Payload**: TypeScript-first, self-hosted

**Integration:**
- Fetch content at build time (SSG)
- Or use ISR for dynamic content

---

### 13. Testing Strategy (Future)

#### Recommended Testing Stack

**Unit Testing:**
- **Vitest** or **Jest**
- Test utility functions
- Test components in isolation

**Component Testing:**
- **React Testing Library**
- Test user interactions
- Test accessibility

**E2E Testing:**
- **Playwright** or **Cypress**
- Test critical user flows
- Test form submissions

**Implementation Priority:**
1. Start with critical paths (contact form)
2. Add component tests for reusable components
3. Expand to full test coverage

---

### 14. Internationalization (i18n) - Future Consideration

**If Needed:**
- Support for multiple languages (English, Hindi, Gujarati)
- Use `next-intl` or similar library
- Translate product descriptions
- Localize contact information

**Current Recommendation:**
- Start with English only
- Add i18n if business requires it

---

### 15. Technical Debt Prevention

#### Code Organization
- Follow established folder structure
- Consistent naming conventions
- Reusable components
- DRY (Don't Repeat Yourself) principle

#### Documentation
- Inline code comments for complex logic
- README updates
- Component documentation (JSDoc)

#### Regular Maintenance
- Keep dependencies updated
- Security patches
- Performance monitoring
- Regular audits

---

## Summary of Key Decisions

1. **State Management**: React Context + Local State (no Redux needed)
2. **Forms**: React Hook Form + Zod
3. **Icons**: Lucide React
4. **Email**: Resend (recommended)
5. **Deployment**: Vercel
6. **Database**: None initially (email-only contact forms)
7. **CMS**: Code-based (no CMS initially)
8. **Testing**: Add later (focus on development first)
9. **i18n**: English only (add later if needed)
10. **Analytics**: Google Analytics 4

---

## Next Steps

1. Set up project structure
2. Install recommended dependencies
3. Configure Tailwind with design system
4. Create base components
5. Build pages following the structure
6. Implement forms with validation
7. Set up email service
8. Optimize for performance
9. Test accessibility
10. Deploy to production

