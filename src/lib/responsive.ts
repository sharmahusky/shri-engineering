/**
 * Responsive Design Utilities
 * 
 * Breakpoints and responsive design helpers
 */

/**
 * Tailwind Breakpoints
 * Mobile-first approach
 */
export const BREAKPOINTS = {
  xs: 0,      // Extra small (mobile)
  sm: 640,    // Small (landscape mobile)
  md: 768,    // Medium (tablet)
  lg: 1024,   // Large (desktop)
  xl: 1280,   // Extra large (wide desktop)
  '2xl': 1536, // 2X large (ultra-wide)
} as const;

/**
 * Viewport sizes for testing
 */
export const VIEWPORT_SIZES = [
  { name: 'Mobile XS', width: 320, height: 568 },  // iPhone SE
  { name: 'Mobile SM', width: 375, height: 667 },  // iPhone 8
  { name: 'Mobile MD', width: 414, height: 896 },  // iPhone 11
  { name: 'Tablet', width: 768, height: 1024 },    // iPad
  { name: 'Tablet Landscape', width: 1024, height: 768 },
  { name: 'Desktop', width: 1280, height: 720 },   // HD
  { name: 'Desktop Large', width: 1920, height: 1080 }, // Full HD
  { name: 'Desktop XL', width: 2560, height: 1440 }, // 2K
] as const;

/**
 * Responsive grid columns
 */
export const GRID_COLUMNS = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  wide: 4,
} as const;

/**
 * Responsive spacing scale
 */
export const RESPONSIVE_SPACING = {
  mobile: 'px-md',      // 1rem
  tablet: 'px-lg',      // 1.5rem
  desktop: 'px-xl',     // 2rem
} as const;

/**
 * Responsive typography
 */
export const RESPONSIVE_TYPOGRAPHY = {
  h1: {
    mobile: 'text-3xl',
    tablet: 'text-4xl',
    desktop: 'text-5xl',
  },
  h2: {
    mobile: 'text-2xl',
    tablet: 'text-3xl',
    desktop: 'text-4xl',
  },
  h3: {
    mobile: 'text-xl',
    tablet: 'text-2xl',
    desktop: 'text-3xl',
  },
  body: {
    mobile: 'text-sm',
    tablet: 'text-base',
    desktop: 'text-lg',
  },
} as const;

/**
 * Image optimization settings
 */
export const IMAGE_OPTIMIZATION = {
  sizes: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
  },
  quality: 75,
  formats: ['webp', 'jpg'],
} as const;

/**
 * Core Web Vitals targets
 */
export const CORE_WEB_VITALS = {
  LCP: {
    good: 2500,      // Largest Contentful Paint (ms)
    needsImprovement: 4000,
  },
  FID: {
    good: 100,       // First Input Delay (ms)
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,       // Cumulative Layout Shift
    needsImprovement: 0.25,
  },
} as const;

/**
 * Get responsive class for grid columns
 */
export function getGridColsClass(columns: number): string {
  const colMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };
  return colMap[columns] || 'grid-cols-1';
}

/**
 * Get responsive padding class
 */
export function getResponsivePadding(mobile: string, tablet?: string, desktop?: string): string {
  let classes = mobile;
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  return classes;
}

/**
 * Get responsive font size class
 */
export function getResponsiveFontSize(mobile: string, tablet?: string, desktop?: string): string {
  let classes = mobile;
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  return classes;
}

/**
 * Check if viewport is mobile
 */
export function isMobile(width: number): boolean {
  return width < BREAKPOINTS.sm;
}

/**
 * Check if viewport is tablet
 */
export function isTablet(width: number): boolean {
  return width >= BREAKPOINTS.sm && width < BREAKPOINTS.lg;
}

/**
 * Check if viewport is desktop
 */
export function isDesktop(width: number): boolean {
  return width >= BREAKPOINTS.lg;
}

