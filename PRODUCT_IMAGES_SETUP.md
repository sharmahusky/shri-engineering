# Product Images Setup Guide

## Directory Structure

Place product images in the following directory structure:

```
public/
└── assets/
    └── images/
        └── products/
            ├── filters/
            │   ├── self-cleaning-01.jpg
            │   ├── self-cleaning-02.jpg
            │   ├── catalyst-01.jpg
            │   ├── catalyst-02.jpg
            │   ├── housings-01.jpg
            │   ├── housings-02.jpg
            │   ├── duplex-01.jpg
            │   ├── strainers-01.jpg
            │   ├── cartridges-01.jpg
            │   └── bags-01.jpg
            └── tanks/
                ├── pressure-vessel-01.jpg
                ├── pressure-vessel-02.jpg
                ├── reactor-01.jpg
                ├── reactor-02.jpg
                ├── conical-storage-01.jpg
                └── conical-vessel-01.jpg
```

## Image Requirements

### Recommended Specifications:
- **Format**: JPEG or PNG
- **Dimensions**: 
  - Product cards: 800x600px (4:3 aspect ratio)
  - Product detail pages: 1200x900px (4:3 aspect ratio)
- **File Size**: Optimize to under 200KB per image
- **Naming Convention**: Use kebab-case (e.g., `self-cleaning-filter-01.jpg`)

### Image Optimization Tips:
1. Use tools like:
   - [TinyPNG](https://tinypng.com/) for compression
   - [Squoosh](https://squoosh.app/) for optimization
   - [ImageOptim](https://imageoptim.com/) for batch processing

2. Convert to WebP format for better performance (Next.js will handle this automatically)

3. Ensure images are:
   - High quality and clear
   - Well-lit
   - Show product from multiple angles
   - Include close-ups of important features

## Adding Images to Products

Once images are placed in the correct directories, update the product data in `src/lib/constants/products.ts`:

```typescript
{
  id: 'self-cleaning-filter',
  // ... other fields
  images: [
    '/assets/images/products/filters/self-cleaning-01.jpg',
    '/assets/images/products/filters/self-cleaning-02.jpg',
  ],
}
```

## Image Placeholders

Currently, the website uses placeholder divs for images. Once you add actual images:
1. Images will automatically display in product cards
2. Images will show in product detail pages
3. Next.js Image component will optimize them automatically

## Client Logos

Place client logos in:
```
public/
└── assets/
    └── images/
        └── clients/
            ├── dystar.png
            ├── meghmani.png
            ├── pgp.png
            ├── jubilant.png
            ├── arrow.png
            ├── welspun.png
            ├── nitta.png
            ├── amm.png
            └── dharmaj.png
```

Update `src/lib/constants/clients.ts` with the correct paths.

## Company Logo

Place company logo in:
```
public/
└── assets/
    └── images/
        └── company/
            ├── logo.svg (or logo.png)
            └── logo-white.svg (for dark backgrounds)
```

Update `src/components/organisms/Header/Header.tsx` to use the actual logo.

## Quick Setup Checklist

- [ ] Create directory structure for product images
- [ ] Add product images following naming convention
- [ ] Optimize images (compress, resize)
- [ ] Update product data with image paths
- [ ] Add client logos
- [ ] Add company logo
- [ ] Test image display on all pages
- [ ] Verify image optimization in production build

## Image Sources

You can extract images from:
1. The catalog/brochure you provided
2. Product photography
3. Manufacturer specifications
4. Stock photos (if needed for placeholders)

## Next.js Image Optimization

The website uses Next.js Image component which automatically:
- Optimizes images
- Serves WebP format when supported
- Lazy loads images
- Responsive sizing
- Prevents layout shift

No additional configuration needed!

