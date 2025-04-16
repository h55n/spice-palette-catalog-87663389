
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  backgroundColor: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isSale?: boolean;
  description: string;
  intensity: number;
  sweetness: number;
  cosiness: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div 
      className={cn(
        "product-card rounded-2xl overflow-hidden h-full flex flex-col",
        "transition-all duration-300 hover:shadow-md"
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`p-4 relative flex-grow flex items-center justify-center ${product.backgroundColor} transition-all duration-300`}
        style={{ minHeight: "260px" }}
      >
        {/* Product image with animation */}
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="h-48 w-auto object-contain z-10"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10, duration: 0.2 }}
        />

        {/* Badges with animation */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          <AnimatePresence>
            {product.isNew && (
              <motion.span 
                className="badge-new"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                New
              </motion.span>
            )}
            {product.isBestseller && (
              <motion.span 
                className="badge-bestseller"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                Bestseller
              </motion.span>
            )}
            {product.isSale && (
              <motion.span 
                className="badge-sale"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                Sale
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Quick add overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-medium text-lg w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={incrementQuantity}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-spice-black hover:bg-spice-black/90"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Product details */}
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <h3 className="font-playfair font-bold text-xl mb-1">{product.name}</h3>
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        
        {/* Product attributes */}
        <div className="flex space-x-2 text-xs">
          <div className="flex items-center">
            <span className="font-medium mr-1">Intensity:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`h-2 w-2 rounded-full ${i < product.intensity ? 'bg-spice-black' : 'bg-gray-200'} mr-1`}
                />
              ))}
            </div>
          </div>
          
          <span className="text-gray-300">|</span>
          
          <div className="flex items-center">
            <span className="font-medium mr-1">Sweetness:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`h-2 w-2 rounded-full ${i < product.sweetness ? 'bg-spice-pink-dark' : 'bg-gray-200'} mr-1`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
