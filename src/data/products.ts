
import { Product } from '@/components/ProductCard';

export const products: Product[] = [
  {
    id: 1,
    name: 'COSINESS',
    category: 'Herb Blend',
    price: 18.99,
    image: '/lovable-uploads/b68b5b34-e3e6-4818-b497-2b50919e572b.png',
    backgroundColor: 'bg-spice-cream',
    isBestseller: true,
    description: 'A warming blend of cinnamon, nutmeg, and cardamom that creates a cozy atmosphere in any dish.',
    intensity: 3,
    sweetness: 4,
    cosiness: 5
  },
  {
    id: 2,
    name: 'INTENSITY',
    category: 'Hot Blend',
    price: 14.99,
    image: '/lovable-uploads/b68b5b34-e3e6-4818-b497-2b50919e572b.png',
    backgroundColor: 'bg-spice-pink',
    isNew: true,
    description: 'Fiery blend of chili peppers, black pepper, and paprika for those who love heat in their meals.',
    intensity: 5,
    sweetness: 1,
    cosiness: 2
  },
  {
    id: 3,
    name: 'PASSION',
    category: 'Exotic Blend',
    price: 15.99,
    image: '/lovable-uploads/b68b5b34-e3e6-4818-b497-2b50919e572b.png',
    backgroundColor: 'bg-spice-cream',
    description: 'A romantic mixture of vanilla, saffron, and rose petals for desserts and special occasion dishes.',
    intensity: 2,
    sweetness: 5,
    cosiness: 4
  },
  {
    id: 4,
    name: 'FRESHNESS',
    category: 'Citrus Blend',
    price: 12.99,
    image: '/lovable-uploads/6ac47345-9a8c-485e-9a90-2eb873327fe1.png',
    backgroundColor: 'bg-spice-green-light',
    isSale: true,
    description: 'Zesty combination of lemon zest, lime, and mint that adds brightness to any dish.',
    intensity: 4,
    sweetness: 3,
    cosiness: 1
  },
  {
    id: 5,
    name: 'SMOOTHNESS',
    category: 'Butter Blend',
    price: 16.99,
    image: '/lovable-uploads/6ac47345-9a8c-485e-9a90-2eb873327fe1.png',
    backgroundColor: 'bg-spice-pink-light',
    description: 'Creamy blend of herbs that pairs perfectly with butter for bread, pasta, and vegetables.',
    intensity: 1,
    sweetness: 2,
    cosiness: 5
  },
  {
    id: 6,
    name: 'ADVENTURE',
    category: 'Global Blend',
    price: 19.99,
    image: '/lovable-uploads/6ac47345-9a8c-485e-9a90-2eb873327fe1.png',
    backgroundColor: 'bg-spice-green-light',
    isNew: true,
    isBestseller: true,
    description: 'A journey around the world with spices from different continents in one harmonious blend.',
    intensity: 4,
    sweetness: 3,
    cosiness: 3
  },
];

export const categories = Array.from(new Set(products.map(p => p.category)));
