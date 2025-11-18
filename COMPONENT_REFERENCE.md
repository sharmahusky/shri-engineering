# Component Reference Guide

## Quick Import Guide

```typescript
// Import individual components
import { Button, Input, Badge, Text, Link, Icon } from '@/components/atoms';
import { Card, FormField, ProductCard } from '@/components/molecules';
import { Header, Footer, ProductGrid } from '@/components/organisms';
import { PageLayout, ProductLayout } from '@/components/templates';

// Or import from main components index
import { Button, Card, Header, PageLayout } from '@/components';

// Import hooks
import { useForm, useScroll } from '@/hooks';
```

## Atoms

### Button
```typescript
<Button variant="solid" color="primary" size="md">
  Click Me
</Button>
```
**Props**: variant, color, size, disabled, fullWidth, className

### Input
```typescript
<Input 
  type="email" 
  placeholder="Enter email" 
  size="md"
  error={false}
/>
```
**Props**: type, size, disabled, error, className

### Badge
```typescript
<Badge variant="solid" color="primary" size="md">
  New
</Badge>
```
**Props**: variant, color, size, className

### Text
```typescript
<Text as="p" size="lg" color="primary" weight="semibold">
  Hello World
</Text>
```
**Props**: as, size, color, weight, align, className

### Link
```typescript
<Link href="/products" variant="default" color="primary">
  View Products
</Link>
```
**Props**: href, external, variant, color, className

### Icon
```typescript
<Icon name="search" size="md" color="primary" />
```
**Props**: name, size, color, className

## Molecules

### Card
```typescript
<Card hoverable shadow="md" padding="md">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
```
**Props**: hoverable, shadow, padding, border, className

### FormField
```typescript
<FormField label="Email" error="Invalid" required>
  <Input type="email" />
</FormField>
```
**Props**: label, error, hint, required, className

### ProductCard
```typescript
<ProductCard
  id="1"
  name="Filter Cartridge"
  category="filter-cartridges"
  image="/images/filter.jpg"
  href="/products/filter-cartridges/1"
/>
```
**Props**: id, name, category, image, description, micronRating, moc, href

## Organisms

### Header
```typescript
<Header />
```
Auto-includes navigation from constants.

### Footer
```typescript
<Footer />
```
Auto-includes company info and links.

### ProductGrid
```typescript
<ProductGrid products={products} columns={3} gap="md" />
```
**Props**: products, columns, gap, className

## Templates

### PageLayout
```typescript
<PageLayout>
  <main>Page content</main>
</PageLayout>
```
Wraps content with Header and Footer.

### ProductLayout
```typescript
<ProductLayout 
  title="Filter Cartridges"
  description="Browse our collection"
  breadcrumbs={[{ label: 'Home' }, { label: 'Products' }]}
>
  <ProductGrid products={products} />
</ProductLayout>
```
**Props**: title, description, breadcrumbs, children, sidebar

## Hooks

### useForm
```typescript
const { 
  values, 
  errors, 
  isSubmitting, 
  isSubmitted,
  handleChange, 
  handleSubmit, 
  resetForm 
} = useForm({
  initialValues: { email: '', password: '' },
  validate: (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Required';
    return errors;
  },
  onSubmit: async (values) => {
    await submitForm(values);
  }
});
```

### useScroll
```typescript
const { scrollPosition, isScrolled } = useScroll();

if (isScrolled) {
  // Show sticky header
}
```

## Color Variants

All components support these colors:
- `primary` - Orange (#f97316)
- `secondary` - Teal (#14b8a6)
- `accent` - Brown (#a68860)
- `neutral` - Gray scale

## Size Variants

### Button & Badge
- `xs` - Extra small
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large
- `xl` - Extra large

### Input
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

### Text
- `xs` - 12px
- `sm` - 14px
- `base` - 16px (default)
- `lg` - 18px
- `xl` - 20px
- `2xl` - 24px
- `3xl` - 30px

## Shadow Variants

- `none` - No shadow
- `sm` - Small shadow
- `md` - Medium shadow (default)
- `lg` - Large shadow
- `xl` - Extra large shadow

## Padding Variants

- `sm` - Small (0.5rem)
- `md` - Medium (1rem)
- `lg` - Large (1.5rem)
- `xl` - Extra large (2rem)

## Common Patterns

### Form with Validation
```typescript
<form onSubmit={handleSubmit}>
  <FormField label="Email" error={errors.email} required>
    <Input
      name="email"
      type="email"
      value={values.email}
      onChange={handleChange}
    />
  </FormField>
  <Button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </Button>
</form>
```

### Product Grid Page
```typescript
<ProductLayout title="Products">
  <ProductGrid products={products} columns={3} />
</ProductLayout>
```

### Card with Content
```typescript
<Card hoverable>
  <Card.Header>
    <Text as="h3" size="lg" weight="bold">Title</Text>
  </Card.Header>
  <Card.Body>
    <Text as="p">Content here</Text>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

---

For more details, see **STEP2_DELIVERABLES.md**

