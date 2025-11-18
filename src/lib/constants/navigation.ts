import { NavItem } from '@/types';

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Filters',
        href: '/products/filters',
        children: [
          { label: 'Self Cleaning Filters', href: '/products/filters/self-cleaning' },
          { label: 'Catalyst/Carbon Filters', href: '/products/filters/catalyst-carbon' },
          { label: 'Filter Housings', href: '/products/filters/housings' },
          { label: 'Duplex Housings', href: '/products/filters/duplex-housings' },
          { label: 'Strainers', href: '/products/filters/strainers' },
          { label: 'Filter Cartridges', href: '/products/filters/cartridges' },
          { label: 'Filter Bags', href: '/products/filters/bags' },
        ],
      },
      {
        label: 'Tanks & Vessels',
        href: '/products/tanks-vessels',
        children: [
          { label: 'Pressure Vessels', href: '/products/tanks-vessels/pressure-vessels' },
          { label: 'Reactor Tanks', href: '/products/tanks-vessels/reactor-tanks' },
          { label: 'Conical Storage Tanks', href: '/products/tanks-vessels/conical-storage' },
          { label: 'Conical Vessels', href: '/products/tanks-vessels/conical-vessels' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Clients',
    href: '/clients',
  },
  {
    label: 'Certifications',
    href: '/certifications',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

