
import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortOptionsProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ 
  sortOption, 
  setSortOption 
}) => {
  return (
    <motion.div 
      className="flex items-center space-x-2 mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <SlidersHorizontal className="h-5 w-5" />
      <span className="font-medium mr-2">Sort by:</span>
      <Select value={sortOption} onValueChange={setSortOption}>
        <SelectTrigger className="w-[180px] border-spice-black/20">
          <SelectValue placeholder="Featured" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
          <SelectItem value="bestselling">Bestselling</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
};

export default SortOptions;
