
import React from 'react';
import { motion } from 'framer-motion';
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
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap gap-3 mb-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <Button
          variant={activeCategory === 'all' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' 
            ? 'bg-spice-black text-white hover:bg-spice-black/90' 
            : 'hover:text-spice-green-dark border-spice-black/20'}
        >
          All Products
        </Button>
      </motion.div>
      
      {categories.map((category) => (
        <motion.div key={category} variants={item}>
          <Button
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category 
              ? 'bg-spice-black text-white hover:bg-spice-black/90' 
              : 'hover:text-spice-green-dark border-spice-black/20'}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CategoryFilters;
