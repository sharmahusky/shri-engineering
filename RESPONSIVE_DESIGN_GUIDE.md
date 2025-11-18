# Responsive Design Guide

## 📱 Breakpoints

| Breakpoint | Width | Device | Use Case |
|-----------|-------|--------|----------|
| xs | 0px | Mobile | Extra small phones |
| sm | 640px | Mobile | Landscape mobile |
| md | 768px | Tablet | iPad, tablets |
| lg | 1024px | Desktop | Laptops, desktops |
| xl | 1280px | Desktop | Large monitors |
| 2xl | 1536px | Desktop | Ultra-wide displays |

## 📐 Viewport Sizes for Testing

### Mobile Devices
- **Mobile XS**: 320×568 (iPhone SE)
- **Mobile SM**: 375×667 (iPhone 8)
- **Mobile MD**: 414×896 (iPhone 11)

### Tablets
- **Tablet**: 768×1024 (iPad)
- **Tablet Landscape**: 1024×768

### Desktops
- **Desktop**: 1280×720 (HD)
- **Desktop Large**: 1920×1080 (Full HD)
- **Desktop XL**: 2560×1440 (2K)

## 🎨 Responsive Classes

### Grid Columns
```tsx
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
```

### Padding
```tsx
// Mobile: 1rem
// Tablet: 1.5rem
// Desktop: 2rem
<div className="px-md md:px-lg lg:px-xl">
```

### Typography
```tsx
// Mobile: 24px
// Tablet: 32px
// Desktop: 48px
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

## 📱 Mobile-First Approach

1. **Start with mobile styles** (no breakpoint)
2. **Add tablet styles** (md: prefix)
3. **Add desktop styles** (lg: prefix)

```tsx
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
  Content
</div>
```

## 🖼️ Image Optimization

### Responsive Images
```tsx
<img
  src="/image.jpg"
  alt="Description"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="w-full h-auto"
/>
```

### Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  responsive
  priority={false}
/>
```

## ⚡ Core Web Vitals

### LCP (Largest Contentful Paint)
- **Good**: < 2.5s
- **Needs Improvement**: 2.5s - 4s
- **Poor**: > 4s

### FID (First Input Delay)
- **Good**: < 100ms
- **Needs Improvement**: 100ms - 300ms
- **Poor**: > 300ms

### CLS (Cumulative Layout Shift)
- **Good**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

## 🧪 Testing Checklist

### Mobile Testing
- [ ] Text is readable (min 16px)
- [ ] Buttons are touch-friendly (min 44×44px)
- [ ] Images scale properly
- [ ] No horizontal scrolling
- [ ] Forms are easy to use
- [ ] Navigation is accessible

### Tablet Testing
- [ ] Layout adapts to 768px width
- [ ] Grid columns adjust (2 cols)
- [ ] Spacing is appropriate
- [ ] Images are optimized
- [ ] Touch targets are adequate

### Desktop Testing
- [ ] Layout uses full width
- [ ] Grid columns expand (3-4 cols)
- [ ] Typography scales properly
- [ ] Hover states work
- [ ] Performance is good

## 🚀 Performance Optimization

### Image Optimization
- Use WebP format
- Compress images
- Use responsive images
- Lazy load below fold
- Set proper dimensions

### Code Splitting
- Dynamic imports
- Route-based splitting
- Component lazy loading

### Caching
- Browser caching
- CDN caching
- Service workers

## 📊 Testing Tools

### Browser DevTools
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector

### Online Tools
- Google PageSpeed Insights
- WebPageTest
- GTmetrix
- Lighthouse

### Mobile Testing
- BrowserStack
- Sauce Labs
- Real devices

## 🔍 Common Issues & Solutions

### Issue: Text too small on mobile
**Solution**: Use responsive font sizes
```tsx
<p className="text-sm md:text-base lg:text-lg">
```

### Issue: Images overflow on mobile
**Solution**: Use max-width and responsive sizing
```tsx
<img className="w-full max-w-full h-auto" />
```

### Issue: Buttons too small for touch
**Solution**: Ensure minimum 44×44px
```tsx
<button className="px-md py-sm min-h-11 min-w-11">
```

### Issue: Layout shifts on load
**Solution**: Set explicit dimensions
```tsx
<div className="w-full h-96">
  <Image width={1200} height={600} />
</div>
```

## 📚 Responsive Utilities

### From `src/lib/responsive.ts`

```typescript
// Check viewport size
isMobile(width)      // width < 640px
isTablet(width)      // 640px <= width < 1024px
isDesktop(width)     // width >= 1024px

// Get responsive classes
getGridColsClass(3)  // 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
getResponsivePadding('px-md', 'px-lg', 'px-xl')
getResponsiveFontSize('text-sm', 'text-base', 'text-lg')
```

## ✅ Responsive Design Checklist

- ✅ Mobile-first approach
- ✅ Flexible layouts
- ✅ Responsive typography
- ✅ Optimized images
- ✅ Touch-friendly buttons
- ✅ Proper spacing
- ✅ No horizontal scroll
- ✅ Fast loading
- ✅ Good Core Web Vitals
- ✅ Tested on multiple devices

---

**All components are responsive by default!**

