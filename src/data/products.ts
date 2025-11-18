import { Product } from '@/types/product';

/**
 * Product Data
 * 
 * Complete product catalog based on Shri Engineering's offerings
 */

export const products: Product[] = [
  // Filter Cartridges
  {
    id: 'fc-001',
    name: 'Cleanable Filter Cartridge',
    category: 'filter-cartridges',
    description: 'Reusable filter cartridge with multiple media options for industrial filtration',
    image: '/images/products/filter-cartridge-1.jpg',
    specifications: [
      { name: 'Size', value: '10", 20", 30", 40" & Customised' },
      { name: 'Outer Diameter', value: 'STD & Customised' },
      { name: 'Inner Diameter', value: '20 MM to Customised' },
      { name: 'Micron Rating', value: '0.45, 1, 5, 10, 20, 25, 50, 100, 150, 200' },
      { name: 'Configuration', value: 'DOE, SOE, CODE-7 & Customised' },
      { name: 'Media', value: 'SS Wire Mesh, Sintered, Cellulose Paper, Spun Bonded, Glass Fiber' },
      { name: 'Type', value: 'Cylindrical & Pleated' },
      { name: 'Construction', value: 'Adhesive Joint, Welded' },
    ],
    applications: ['Water', 'Oil', 'Paint', 'Ink', 'Solvents', 'Chemicals', 'Viscous Liquid'],
  },
  {
    id: 'fc-002',
    name: 'Disposable Filter Cartridge',
    category: 'filter-cartridges',
    description: 'Cost-effective disposable cartridges for various filtration applications',
    image: '/images/products/filter-cartridge-2.jpg',
    specifications: [
      { name: 'Size', value: '5", 10", 20", 30", 40"' },
      { name: 'Outer Diameter', value: '63 MM, 70 MM' },
      { name: 'Inner Diameter', value: '25 MM, 28 MM, 30 MM' },
      { name: 'Micron Rating', value: '0.2, 0.45, 1.3, 5, 10, 25, 50 to 100' },
      { name: 'Configuration', value: 'DOE, CODE-7, SOE' },
      { name: 'Media', value: 'Polypropylene, PP String, Glass Fiber Yarn, Cellulose Resin' },
    ],
    applications: ['Water', 'Oil', 'Chemicals', 'Food Processing'],
  },

  // Filter Bags
  {
    id: 'fb-001',
    name: 'Liquid Filter Bag',
    category: 'filter-bags',
    description: 'Specialized filter bags for liquid filtration applications',
    image: '/images/products/filter-bag-1.jpg',
    specifications: [
      { name: 'Size', value: '10", 16", 20", 32" & Customised' },
      { name: 'Micron Rating', value: '1, 5, 10, 20, 25, 50, 75, 100' },
      { name: 'Configuration', value: 'Welded, Stitched' },
      { name: 'Media Type', value: 'Woven & Non-Woven' },
      { name: 'Media MOC', value: 'Polypropylene, Polyester, Nylon, PC Satin, Antistatic' },
      { name: 'Collar MOC', value: 'PP, SS Ring Collar' },
    ],
    applications: ['Chemical Filtration', 'Edible Oil', 'Water Treatment', 'Paint'],
  },
  {
    id: 'fb-002',
    name: 'Centrifugal Filter Bag',
    category: 'filter-bags',
    description: 'Filter bags designed for centrifugal filtration processes',
    image: '/images/products/filter-bag-2.jpg',
    specifications: [
      { name: 'Size', value: '10", 16", 20", 32" & Customised' },
      { name: 'Micron Rating', value: '1, 5, 10, 20, 25, 50, 75, 100' },
      { name: 'Configuration', value: 'Welded, Stitched' },
      { name: 'Media Type', value: 'Woven & Non-Woven' },
      { name: 'Media MOC', value: 'Polypropylene, Polyester, Nylon' },
    ],
    applications: ['Centrifugal Separation', 'Industrial Processing'],
  },

  // Industrial Equipment
  {
    id: 'ie-001',
    name: 'Self Cleaning Filter',
    category: 'industrial-equipment',
    description: 'Automated filtration system with motor-driven cleaning mechanism',
    image: '/images/products/self-cleaning-filter.jpg',
    specifications: [
      { name: 'MOC', value: 'SS316, SS304, MS' },
      { name: 'Line Size', value: '1" NB to 10" NB (Flange, BSP)' },
      { name: 'Rating', value: '50, 100, 200 to 500 Micron' },
      { name: 'Inner Element', value: 'Wedge Wire Filter Basket' },
      { name: 'Type', value: 'Auto/Manual' },
    ],
    applications: ['Water', 'Oil', 'Paint', 'Ink', 'Solvents', 'Chemicals', 'Viscous Liquid'],
  },
  {
    id: 'ie-002',
    name: 'Catalyst/Carbon Filter',
    category: 'industrial-equipment',
    description: 'Vertical cylindrical tank with internal cartridge system for catalyst recovery',
    image: '/images/products/catalyst-filter.jpg',
    specifications: [
      { name: 'MOC', value: 'SS316, SS304, MS' },
      { name: 'Line Size', value: '1/2" NB to 20" NB (Flange, BSP)' },
      { name: 'Rating', value: '1.5, 10, 25, 50 Micron' },
      { name: 'Inner Element', value: 'Sintered Powder, PP/Polyester/Silk Sleeves' },
      { name: 'Configuration', value: 'SOE (Flange), BSP, NPT Thread' },
    ],
    applications: ['Chemical', 'Catalyst Recovery', 'Carbon', 'Edible Oil', 'Water'],
  },
  {
    id: 'ie-003',
    name: 'Pressure Vessel/Tank',
    category: 'industrial-equipment',
    description: 'Industrial-grade stainless steel pressure vessels for storage and processing',
    image: '/images/products/pressure-vessel.jpg',
    specifications: [
      { name: 'Type', value: 'Vertical & Horizontal Cylindrical' },
      { name: 'Material', value: 'Stainless Steel (SS316, SS304)' },
      { name: 'Capacity', value: 'Customised' },
      { name: 'Pressure Rating', value: 'Customised' },
      { name: 'Nozzles', value: 'Multiple connection points' },
    ],
    applications: ['Chemical Storage', 'Pressure Processing', 'Bulk Storage'],
  },

  // Engineering Services
  {
    id: 'es-001',
    name: 'Industrial Pipe Line Work',
    category: 'engineering-services',
    description: 'Complex piping systems installation and maintenance for industrial applications',
    image: '/images/products/pipeline-work.jpg',
    specifications: [
      { name: 'Service Type', value: 'Installation, Maintenance, Repair' },
      { name: 'Materials', value: 'Stainless Steel, Carbon Steel, Alloy' },
      { name: 'Scope', value: 'Design, Fabrication, Installation' },
    ],
    applications: ['Chemical Processing', 'Petrochemical', 'Water Treatment', 'Food Processing'],
  },
  {
    id: 'es-002',
    name: 'Industrial Reactor Tank',
    category: 'engineering-services',
    description: 'Large cylindrical pressure vessels for chemical reactions and processing',
    image: '/images/products/reactor-tank.jpg',
    specifications: [
      { name: 'Type', value: 'Cylindrical Pressure Vessel' },
      { name: 'Material', value: 'Stainless Steel' },
      { name: 'Features', value: 'Multiple flanged connections, High-pressure rated' },
    ],
    applications: ['Chemical Reactions', 'Batch Processing', 'Industrial Manufacturing'],
  },
  {
    id: 'es-003',
    name: 'Industrial Conical Storage Tank',
    category: 'engineering-services',
    description: 'Conical storage structures for bulk material storage and processing',
    image: '/images/products/conical-tank.jpg',
    specifications: [
      { name: 'Type', value: 'Conical/Cone-shaped' },
      { name: 'Material', value: 'Stainless Steel' },
      { name: 'Installation', value: 'Outdoor capable' },
      { name: 'Capacity', value: 'Large capacity customised' },
    ],
    applications: ['Bulk Storage', 'Material Handling', 'Industrial Storage'],
  },
  {
    id: 'es-004',
    name: 'Pan Disc Granulator',
    category: 'engineering-services',
    description: 'Rotating pan disc equipment for granule production in pharmaceutical and chemical industries',
    image: '/images/products/granulator.jpg',
    specifications: [
      { name: 'Type', value: 'Pan Disc Granulator' },
      { name: 'Design', value: 'Rotating pan disc' },
      { name: 'Application', value: 'Granule production' },
      { name: 'Industries', value: 'Pharmaceutical, Chemical' },
    ],
    applications: ['Pharmaceutical Manufacturing', 'Chemical Processing', 'Granule Production'],
  },
];

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Get unique categories
 */
export function getCategories() {
  return [
    { id: 'filter-cartridges', name: 'Filter Cartridges', description: 'Cleanable and disposable filter cartridges' },
    { id: 'filter-bags', name: 'Filter Bags', description: 'Specialized filter bags for various applications' },
    { id: 'industrial-equipment', name: 'Industrial Equipment', description: 'Tanks, vessels, and filtration systems' },
    { id: 'engineering-services', name: 'Engineering Services', description: 'Custom engineering and installation services' },
  ];
}

