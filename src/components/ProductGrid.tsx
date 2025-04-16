
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard, { Product } from './ProductCard';
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  // Grid item animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        duration: 0.25
      }
    }
  };

  // Loading skeletons
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl overflow-hidden h-full">
            <Skeleton className="h-[260px] w-full rounded-t-2xl" />
            <div className="p-4 bg-white">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-muted/50 rounded-2xl p-10 text-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="rounded-full bg-muted p-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-muted-foreground" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M20 12H4M12 4v16" 
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium">No products found</h3>
          <p className="text-muted-foreground max-w-md">
            We couldn't find any products matching your current filters.
            Try adjusting your search criteria.
          </p>
        </div>
      </motion.div>
    );
  }

  // Normal product grid with animations
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
