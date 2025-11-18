# SEO & Performance Optimization Strategy
## Shri Engineering - Search Engine Optimization Plan

### 1. Metadata Strategy

#### Default Metadata (app/metadata.ts)
```typescript
{
  title: "Shri Engineering | Industrial Tanks & Filters Manufacturer | ISO 9001:2015",
  description: "Leading manufacturer of industrial tanks, filters, and filtration systems. ISO 9001:2015 certified. Custom solutions in SS316, SS304, MS, PP, UPVC. Serving chemical, pharmaceutical, and industrial sectors.",
  keywords: "industrial tanks, industrial filters, pressure vessels, filter housings, stainless steel tanks, filtration systems, ISO certified manufacturer, Gujarat",
}
```

#### Page-Specific Metadata

**Home Page:**
- Title: "Shri Engineering | Industrial Tanks & Filters Manufacturer | ISO 9001:2015 Certified"
- Description: "Manufacturer of industrial tanks, filters, and filtration systems. ISO 9001:2015 certified. Custom solutions for chemical, pharmaceutical, and industrial applications. Based in Ankleshwar, Gujarat."

**Products Pages:**
- Title: "[Product Name] | Industrial Filters/Tanks | Shri Engineering"
- Description: "High-quality [product name] manufactured by Shri Engineering. [Key specifications]. Custom sizes and materials available. ISO 9001:2015 certified."

**About Page:**
- Title: "About Us | Shri Engineering | ISO 9001:2015 Certified Manufacturer"
- Description: "Learn about Shri Engineering, a leading manufacturer of industrial tanks and filters. ISO 9001:2015, IAF, and EGAC certified. Serving industries since [year]."

**Contact Page:**
- Title: "Contact Us | Shri Engineering | Industrial Tanks & Filters"
- Description: "Contact Shri Engineering for industrial tanks, filters, and filtration systems. Located in Ankleshwar, Gujarat. Phone: +91 72288 31722"

---

### 2. Open Graph & Social Media Tags

```typescript
{
  openGraph: {
    title: "Shri Engineering | Industrial Tanks & Filters Manufacturer",
    description: "ISO 9001:2015 certified manufacturer of industrial tanks and filters",
    url: "https://www.shriengineering.com",
    siteName: "Shri Engineering",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Engineering - Industrial Tanks & Filters",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Engineering | Industrial Tanks & Filters",
    description: "ISO 9001:2015 certified manufacturer",
    images: ["/assets/images/twitter-image.jpg"],
  },
}
```

---

### 3. Semantic HTML Structure

#### Heading Hierarchy

**Home Page:**
```
H1: "Manufacturer of Industrial Tanks & Filters"
H2: "About Shri Engineering"
H2: "Our Products"
H3: "Self Cleaning Filters"
H3: "Pressure Vessels"
H2: "Our Services"
H2: "Our Clients"
H2: "Get in Touch"
```

**Product Pages:**
```
H1: "[Product Name]"
H2: "Product Overview"
H2: "Specifications"
H3: "Material of Construction"
H3: "Size Range"
H2: "Applications"
H2: "Request a Quote"
```

#### Semantic Elements
- `<header>` - Site header/navigation
- `<nav>` - Navigation menu
- `<main>` - Main content area
- `<article>` - Product/service descriptions
- `<section>` - Content sections
- `<aside>` - Sidebar content (if any)
- `<footer>` - Site footer
- `<address>` - Contact information

---

### 4. Image Optimization Strategy

#### Next.js Image Component
- Use `next/image` for all images
- Implement lazy loading
- Responsive images with `srcset`
- Proper `alt` attributes for accessibility and SEO

#### Image Naming Convention
```
products/
  filters/
    self-cleaning-filter-01.jpg
    self-cleaning-filter-02.jpg
  tanks/
    pressure-vessel-01.jpg
```

#### Alt Text Strategy
- **Product Images**: "Self Cleaning Filter - Stainless Steel 316 - 2 inch NB"
- **Company Images**: "Shri Engineering manufacturing facility in Ankleshwar, Gujarat"
- **Client Logos**: "DyStar - Shri Engineering Client"

#### Image Optimization
- WebP format for modern browsers
- Fallback to JPEG/PNG
- Compression: 80-85% quality
- Dimensions: Responsive sizes (mobile, tablet, desktop)

---

### 5. Structured Data (Schema.org)

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shri Engineering",
  "url": "https://www.shriengineering.com",
  "logo": "https://www.shriengineering.com/assets/images/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-72288-31722",
    "contactType": "Sales",
    "email": "shriengineering24522@gmail.com",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 4604, Nr. Meghmani Chowkdi, GIDC",
    "addressLocality": "Ankleshwar",
    "postalCode": "393002",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "sameAs": [
    // Social media profiles if available
  ]
}
```

#### Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Self Cleaning Filter",
  "description": "Industrial self cleaning filter with SS316/SS304 construction",
  "brand": {
    "@type": "Brand",
    "name": "Shri Engineering"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Shri Engineering"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
}
```

#### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shri Engineering",
  "image": "https://www.shriengineering.com/assets/images/logo.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 4604, Nr. Meghmani Chowkdi, GIDC",
    "addressLocality": "Ankleshwar",
    "postalCode": "393002",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.6238",
    "longitude": "72.9900"
  },
  "url": "https://www.shriengineering.com",
  "telephone": "+91-72288-31722",
  "priceRange": "$$"
}
```

---

### 6. Sitemap.xml Strategy

#### Dynamic Sitemap Generation (app/sitemap.ts)
```typescript
// Generate sitemap with all static and dynamic routes
// Include:
// - All static pages
// - All product category pages
// - All individual product pages
// - Update frequency
// - Priority levels
```

**Priority Levels:**
- Home: 1.0
- Products listing: 0.9
- Main product categories: 0.8
- Individual products: 0.7
- About, Services, Contact: 0.8
- Clients, Certifications: 0.6

**Update Frequency:**
- Static pages: monthly
- Product pages: weekly
- Home page: weekly

---

### 7. Robots.txt

```
User-agent: *
Allow: /

# Disallow admin/private routes if any
# Disallow: /admin

Sitemap: https://www.shriengineering.com/sitemap.xml
```

---

### 8. URL Structure & SEO-Friendly URLs

**Best Practices:**
- Use hyphens for word separation
- Keep URLs short and descriptive
- Include relevant keywords
- Use lowercase

**Examples:**
- `/products/filters/self-cleaning-filter`
- `/products/tanks-vessels/pressure-vessels`
- `/services/industrial-pipeline-work`

---

### 9. Internal Linking Strategy

**Link Structure:**
- Home page links to main product categories
- Product pages link to related products
- All pages link to Contact page
- Footer links to all main pages
- Breadcrumb navigation on product pages

**Anchor Text:**
- Use descriptive anchor text
- Include keywords naturally
- Avoid "click here" or "read more"

---

### 10. Performance Optimization

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
  - Optimize hero images
  - Use next/image
  - Implement lazy loading

- **FID (First Input Delay)**: < 100ms
  - Minimize JavaScript
  - Code splitting
  - Defer non-critical scripts

- **CLS (Cumulative Layout Shift)**: < 0.1
  - Set image dimensions
  - Reserve space for dynamic content
  - Avoid inserting content above existing content

#### Optimization Techniques
1. **Image Optimization**
   - Next.js Image component
   - WebP format
   - Responsive images
   - Lazy loading

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based code splitting (automatic in Next.js)

3. **Font Optimization**
   - Already using next/font (Geist)
   - Preload critical fonts
   - Font display: swap

4. **Caching Strategy**
   - Static page generation where possible
   - ISR (Incremental Static Regeneration) for product pages
   - Browser caching headers

5. **Minification**
   - CSS minification
   - JavaScript minification
   - HTML minification

---

### 11. Local SEO Strategy

**Google Business Profile:**
- Claim and optimize Google Business Profile
- Add business information
- Upload photos
- Collect reviews

**Local Keywords:**
- "Industrial tanks manufacturer Ankleshwar"
- "Filter manufacturer Gujarat"
- "ISO certified tanks manufacturer Ankleshwar"

**NAP Consistency:**
- Name, Address, Phone consistent across:
  - Website
  - Google Business Profile
  - Social media
  - Directories

---

### 12. Keyword Strategy

#### Primary Keywords
- Industrial tanks manufacturer
- Industrial filters manufacturer
- Pressure vessels manufacturer
- Filter housings manufacturer
- ISO 9001 certified manufacturer
- Stainless steel tanks manufacturer

#### Long-Tail Keywords
- Self cleaning filter manufacturer India
- Industrial filtration systems Gujarat
- Custom pressure vessels manufacturer
- SS316 filter housings
- Industrial reactor tanks manufacturer

#### Product-Specific Keywords
- Self cleaning filter
- Catalyst filter
- Carbon filter
- Duplex filter housing
- Y-type strainer
- Filter cartridges
- Filter bags

---

### 13. Content SEO

**Content Optimization:**
- Use keywords naturally in content
- Include keywords in headings (H1, H2, H3)
- Use keywords in image alt text
- Include keywords in meta descriptions
- Create unique content for each page

**Content Length:**
- Home page: 300-500 words
- Product pages: 400-600 words
- About page: 500-800 words
- Service pages: 300-500 words

---

### 14. Technical SEO Checklist

- [ ] SSL Certificate (HTTPS)
- [ ] Mobile-responsive design
- [ ] Fast page load times
- [ ] Proper heading hierarchy
- [ ] Alt text for all images
- [ ] Internal linking structure
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] Structured data markup
- [ ] Canonical URLs
- [ ] 404 error page
- [ ] 301 redirects for old URLs (if applicable)

---

### 15. Analytics & Monitoring

**Recommended Tools:**
- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring
- Page speed insights

**Key Metrics to Track:**
- Organic traffic
- Keyword rankings
- Page load times
- Bounce rate
- Conversion rate (inquiries)
- Core Web Vitals scores

