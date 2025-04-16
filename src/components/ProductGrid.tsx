
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        duration: 0.3
      }
    }
  };

  // Loading skeletons
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i} 
            className="rounded-2xl overflow-hidden h-full shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <div className="h-[260px] w-full rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Skeleton className="h-32 w-32 rounded-full" />
            </div>
            <div className="p-5 bg-white">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <div className="flex space-x-2">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 text-center border border-gray-100"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div 
            className="rounded-full bg-gray-50 p-6"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-playfair font-semibold text-spice-black">No products found</h3>
          <p className="text-gray-500 max-w-md">
            We couldn't find any products matching your current filters.
            Try adjusting your search criteria or explore our other categories.
          </p>
        </div>
      </motion.div>
    );
  }

  // Normal product grid with animations
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={`${products.length}-${products[0]?.id || 'empty'}`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductGrid;
