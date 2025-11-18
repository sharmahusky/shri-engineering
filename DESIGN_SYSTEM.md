# Shri Engineering Design System

## Brand Identity

### Primary Colors
- **Orange (Primary)**: `#f97316` - Main brand color for CTAs, headers, and key elements
- **Teal (Secondary)**: `#14b8a6` - Accent color for highlights and interactive elements
- **Brown (Accent)**: `#a68860` - Supporting color for depth and sophistication

### Color Palette
All colors have 11-step scales (50-950) for flexibility:
- **Primary**: Orange scale for brand consistency
- **Secondary**: Teal scale for accents and interactive states
- **Accent**: Brown scale for supporting elements
- **Neutral**: Gray scale for text, borders, and backgrounds

## Typography

### Font Stack
- **Sans-serif**: Inter (primary for UI)
- **Serif**: Merriweather (for content/blog)
- **Monospace**: Fira Code (for code blocks)

### Type Scale
- **H1**: 3rem (48px) - Page titles
- **H2**: 2.25rem (36px) - Section headers
- **H3**: 1.875rem (30px) - Subsection headers
- **H4**: 1.5rem (24px) - Component headers
- **Body**: 1rem (16px) - Default text
- **Small**: 0.875rem (14px) - Secondary text
- **Tiny**: 0.75rem (12px) - Labels, captions

### Font Weights
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

## Spacing System

8px base unit (1rem = 16px):
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 40px
- 3xl: 48px
- 4xl: 64px
- 5xl: 80px
- 6xl: 96px

## Component Tokens

### Border Radius
- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 24px
- full: 9999px

### Shadows
- xs: Light shadow for subtle depth
- sm: Small shadow for cards
- md: Medium shadow for elevated elements
- lg: Large shadow for modals
- xl: Extra large shadow for overlays

### Animations
- fadeIn: 0.3s ease-in-out
- slideUp: 0.3s ease-out
- slideDown: 0.3s ease-out
- pulse: 2s infinite

## Usage Guidelines

### Color Usage
- **Primary (Orange)**: CTAs, links, active states, brand elements
- **Secondary (Teal)**: Hover states, highlights, secondary CTAs
- **Accent (Brown)**: Borders, dividers, supporting text
- **Neutral**: Text, backgrounds, borders

### Spacing
- Use consistent spacing from the scale
- Maintain visual hierarchy with spacing
- Mobile: Use smaller spacing (sm, md)
- Desktop: Use larger spacing (lg, xl)

### Typography
- H1: Page titles only
- H2: Main section headers
- H3: Subsection headers
- Body: Default paragraph text
- Use font weights for emphasis, not size

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile-First Approach
- Design for mobile first
- Enhance for larger screens
- Use Tailwind's responsive prefixes (sm:, md:, lg:)

## Accessibility

- Maintain 4.5:1 contrast ratio for text
- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation
- Test with screen readers

