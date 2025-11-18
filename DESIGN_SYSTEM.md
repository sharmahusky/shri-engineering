# Design System Documentation
## Shri Engineering - Production-Ready Design System

### 1. Color Palette

Based on the catalog analysis, the brand uses a professional industrial color scheme:

#### Primary Colors
- **Orange (Brand Primary)**: `#FF6B35` / `rgb(255, 107, 53)`
  - Used for: Logo, CTAs, highlights, accents
  - Variants: Light Orange `#FF8C5A`, Dark Orange `#E55A2B`
  
- **Teal/Blue (Brand Secondary)**: `#2D7A8C` / `rgb(45, 122, 140)`
  - Used for: Headings, secondary CTAs, technical sections
  - Variants: Light Teal `#4A9FB0`, Dark Teal `#1F5A6B`

#### Neutral Colors
- **White**: `#FFFFFF` - Backgrounds, cards
- **Light Gray**: `#F5F5F5` - Section backgrounds, subtle dividers
- **Medium Gray**: `#808080` - Secondary text, borders
- **Dark Gray**: `#333333` - Primary text, headings
- **Charcoal**: `#1A1A1A` - Dark sections, footer

#### Accent Colors
- **Gold/Yellow**: `#F4A460` - Certifications, highlights
- **Green**: `#4CAF50` - Success states, positive indicators
- **Red**: `#E53935` - Alerts, important notices

#### Industrial/Technical Colors
- **Stainless Steel**: `#C0C0C0` - Product imagery backgrounds
- **Dark Brown**: `#5D4037` - Footer bars, contact sections

### 2. Typography Scale

#### Font Families
- **Primary (Sans-serif)**: Geist Sans (already configured)
  - Used for: Body text, UI elements, general content
  
- **Monospace**: Geist Mono (already configured)
  - Used for: Technical specifications, code, measurements

#### Type Scale
```
Heading 1 (H1): 3.5rem (56px) / Line-height: 1.2 / Weight: 700
Heading 2 (H2): 2.5rem (40px) / Line-height: 1.3 / Weight: 700
Heading 3 (H3): 2rem (32px) / Line-height: 1.4 / Weight: 600
Heading 4 (H4): 1.5rem (24px) / Line-height: 1.4 / Weight: 600
Heading 5 (H5): 1.25rem (20px) / Line-height: 1.5 / Weight: 600
Heading 6 (H6): 1rem (16px) / Line-height: 1.5 / Weight: 600

Body Large: 1.125rem (18px) / Line-height: 1.6 / Weight: 400
Body Regular: 1rem (16px) / Line-height: 1.6 / Weight: 400
Body Small: 0.875rem (14px) / Line-height: 1.5 / Weight: 400

Caption: 0.75rem (12px) / Line-height: 1.4 / Weight: 400
```

### 3. Spacing System

Using 4px base unit for consistent spacing:

```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
32: 8rem (128px)
```

### 4. Breakpoints (Responsive Design)

```
Mobile: 0px - 639px
Tablet: 640px - 1023px
Desktop: 1024px - 1279px
Large Desktop: 1280px+
```

### 5. Component-Specific Styling

#### Buttons
- **Primary Button**: Orange background, white text, rounded corners (8px)
- **Secondary Button**: Teal background, white text
- **Outline Button**: Transparent background, orange border, orange text
- **Ghost Button**: Transparent background, text only

#### Cards
- White background, subtle shadow, rounded corners (12px)
- Padding: 1.5rem (24px)
- Border: 1px solid light gray on hover

#### Forms
- Input fields: 12px border radius, 1px border
- Focus state: Orange border (2px)
- Error state: Red border with error message

#### Navigation
- Sticky header with white/transparent background
- Active link: Orange underline or background
- Hover state: Teal color transition

### 6. Utility Classes

Common reusable utility classes for layouts:
- `.container`: Max-width container with responsive padding
- `.section-padding`: Consistent vertical padding for sections
- `.text-gradient`: Orange to teal gradient text
- `.card-shadow`: Subtle shadow for cards
- `.hover-lift`: Lift effect on hover for interactive elements

