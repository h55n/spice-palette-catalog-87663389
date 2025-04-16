
import React from 'react';
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  activeCategory,
  setActiveCategory
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        onClick={() => setActiveCategory('all')}
        className={activeCategory === 'all' 
          ? 'bg-spice-black text-white hover:bg-spice-black/90' 
          : 'hover:text-spice-green-dark border-spice-black/20'}
      >
        All Products
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          onClick={() => setActiveCategory(category)}
          className={activeCategory === category 
            ? 'bg-spice-black text-white hover:bg-spice-black/90' 
            : 'hover:text-spice-green-dark border-spice-black/20'}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
