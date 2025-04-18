import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { 
  Leaf, 
  Flame, 
  Sun, 
  Snowflake, 
  Coffee, 
  CircleUser,
  Sparkles,
  Heart,
  Droplet,
  Utensils,
  Cherry,
  Soup
} from 'lucide-react';

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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

  // Map product categories to icons and colors
  const getProductIllustration = () => {
    // Base map of category to icon and background pattern
    const categoryIconMap: Record<string, {
      icon: JSX.Element,
      bgPattern: React.ReactNode,
      secondaryIcon?: JSX.Element
    }> = {
      "Herb Blend": {
        icon: <Leaf size={64} color="#FFF" strokeWidth={1.5} />,
        bgPattern: (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-6 left-6">
              <Leaf size={20} color="#FFF" strokeWidth={1} />
            </div>
            <div className="absolute bottom-6 right-6">
              <Leaf size={20} color="#FFF" strokeWidth={1} />
            </div>
          </motion.div>
        ),
        secondaryIcon: <Droplet size={32} color="#FFF" strokeWidth={1.5} className="absolute bottom-6 left-6" />
      },
      "Hot Blend": {
        icon: <Flame size={64} color="#FFF" strokeWidth={1.5} />,
        bgPattern: (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-8 left-8 rotate-12">
              <Cherry size={20} color="#FFF" strokeWidth={1} />
            </div>
            <div className="absolute bottom-8 right-8 -rotate-12">
              <Cherry size={20} color="#FFF" strokeWidth={1} />
            </div>
          </motion.div>
        ),
        secondaryIcon: <Sun size={32} color="#FFF" strokeWidth={1.5} className="absolute top-6 right-6" />
      },
      "Exotic Blend": {
        icon: <CircleUser size={64} color="#FFF" strokeWidth={1.5} />,
        bgPattern: (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-10 left-10 rotate-45">
              <Cherry size={20} color="#FFF" strokeWidth={1} />
            </div>
            <div className="absolute bottom-10 right-10 -rotate-45">
              <Cherry size={20} color="#FFF" strokeWidth={1} />
            </div>
          </motion.div>
        ),
        secondaryIcon: <Heart size={32} color="#FFF" strokeWidth={1.5} className="absolute bottom-6 left-6" />
      },
      "Citrus Blend": {
        icon: <Droplet size={64} color="#FFF" strokeWidth={1.5} />,
        bgPattern: (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-8 right-14">
              <Sun size={20} color="#FFF" strokeWidth={1} />
            </div>
            <div className="absolute bottom-14 left-8">
              <Sun size={20} color="#FFF" strokeWidth={1} />
            </div>
          </motion.div>
        ),
        secondaryIcon: <Snowflake size={32} color="#FFF" strokeWidth={1.5} className="absolute top-6 right-6" />
      },
      "Butter Blend": {
        icon: <Utensils size={64} color="#FFF" strokeWidth={1.5} />,
        bgPattern: (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-10 right-10">
              <Soup size={20} color="#FFF" strokeWidth={1} />
            </div>
            <div className="absolute bottom-10 left-10">
              <Soup size={20} color="#FFF" strokeWidth={1} />
            </div>
          </motion.div>
        ),
        secondaryIcon: <Coffee size={32} color="#FFF" strokeWidth={1.5} className="absolute top-6 left-6" />
      },
      "Global Blend": {
        icon: <Sparkles size={64} color="#FFF" strokeWidth={1.5} />,
        bgPattern: (
          <motion.div 
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-8 left-8">
              <Sparkles size={20} color="#FFF" strokeWidth={1} />
            </div>
            <div className="absolute bottom-8 right-8">
              <Sparkles size={20} color="#FFF" strokeWidth={1} />
            </div>
          </motion.div>
        ),
        secondaryIcon: <Flame size={32} color="#FFF" strokeWidth={1.5} className="absolute bottom-6 right-6" />
      }
    };
    
    // Get the illustration based on the product's category
    return categoryIconMap[product.category] || {
      icon: <Coffee size={64} color="#FFF" strokeWidth={1.5} />,
      bgPattern: null
    };
  };

  const productIllustration = getProductIllustration();

  return (
    <motion.div 
      className={cn(
        "product-card rounded-2xl overflow-hidden h-full flex flex-col shadow-sm",
        "transition-all duration-300"
      )}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.4
      }}
    >
      <div 
        className={`p-6 relative flex-grow flex items-center justify-center ${product.backgroundColor} transition-all duration-300`}
        style={{ minHeight: "260px" }}
      >
        {/* Background pattern for the product */}
        {productIllustration.bgPattern}
        
        {/* Main product illustration with animation */}
        <motion.div 
          className="relative flex items-center justify-center z-10"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: isImageLoaded ? 1 : 0, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20, 
            duration: 0.5,
            delay: 0.1
          }}
        >
          {/* Background circle for the icon */}
          <motion.div 
            className="absolute rounded-full bg-black/20 backdrop-blur-sm"
            style={{ width: 120, height: 120 }}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Product icon */}
          <motion.div
            className="relative z-20"
            animate={{
              rotate: isHovered ? 5 : 0,
              y: isHovered ? -5 : 0
            }}
            transition={{ duration: 0.3 }}
            onLayoutAnimationComplete={() => setIsImageLoaded(true)}
          >
            {productIllustration.icon}
          </motion.div>
        </motion.div>

        {/* Secondary icon with subtle animation */}
        {productIllustration.secondaryIcon && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute z-5"
          >
            {productIllustration.secondaryIcon}
          </motion.div>
        )}

        {/* Badges with animation */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          <AnimatePresence>
            {product.isNew && (
              <motion.span 
                className="badge-new"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
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
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
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
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
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
                className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <motion.button 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className={`h-8 w-8 flex items-center justify-center rounded-full border ${quantity <= 1 ? 'border-gray-200 text-gray-300' : 'border-spice-black/20 hover:bg-spice-black/5'}`}
                    whileHover={quantity > 1 ? { scale: 1.1 } : {}}
                    whileTap={quantity > 1 ? { scale: 0.95 } : {}}
                  >
                    <Minus className="h-4 w-4" />
                  </motion.button>
                  <span className="font-medium text-lg w-8 text-center">{quantity}</span>
                  <motion.button 
                    onClick={incrementQuantity}
                    className="h-8 w-8 flex items-center justify-center rounded-full border border-spice-black/20 hover:bg-spice-black/5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
                <motion.button 
                  onClick={handleAddToCart}
                  className="w-full py-2 px-4 bg-spice-black hover:bg-spice-black/90 text-white rounded-md flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Product details */}
      <div className="p-5 bg-white border-t border-gray-100">
        <div className="flex justify-between items-start">
          <h3 className="font-playfair font-bold text-xl mb-1 text-spice-black">{product.name}</h3>
          <span className="font-semibold text-spice-black">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{product.category}</p>
        
        {/* Product attributes */}
        <div className="flex space-x-2 text-xs">
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
            <span className="font-medium mr-1 text-spice-black/70">Intensity:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.span 
                  key={i} 
                  className={`h-2 w-2 rounded-full ${i < product.intensity ? 'bg-spice-black' : 'bg-gray-200'} mr-1`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.2 }}
                />
              ))}
            </div>
          </div>
          
          <span className="text-gray-300">|</span>
          
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
            <span className="font-medium mr-1 text-spice-black/70">Sweetness:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.span 
                  key={i} 
                  className={`h-2 w-2 rounded-full ${i < product.sweetness ? 'bg-spice-pink-dark' : 'bg-gray-200'} mr-1`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.2 }}
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
