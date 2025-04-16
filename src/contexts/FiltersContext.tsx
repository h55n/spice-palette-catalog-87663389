
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/components/ProductCard';
import { products } from '@/data/products';

interface FiltersContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  intensityLevel: number[];
  setIntensityLevel: (levels: number[]) => void;
  sweetnessLevel: number[];
  setSweetnessLevel: (levels: number[]) => void;
  filteredProducts: Product[];
  activeFiltersCount: number;
  resetFilters: () => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [intensityLevel, setIntensityLevel] = useState<number[]>([]);
  const [sweetnessLevel, setSweetnessLevel] = useState<number[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const resetFilters = () => {
    setActiveCategory('all');
    setPriceRange([0, 50]);
    setIntensityLevel([]);
    setSweetnessLevel([]);
    setSortOption('featured');
  };

  useEffect(() => {
    let filtered = [...products];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    if (intensityLevel.length > 0) {
      filtered = filtered.filter(product => 
        intensityLevel.includes(product.intensity)
      );
    }
    
    if (sweetnessLevel.length > 0) {
      filtered = filtered.filter(product => 
        sweetnessLevel.includes(product.sweetness)
      );
    }
    
    switch (sortOption) {
      case 'newest':
        filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew));
        break;
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        filtered = filtered.filter(p => p.isBestseller).concat(filtered.filter(p => !p.isBestseller));
        break;
      default:
        break;
    }
    
    setFilteredProducts(filtered);
    
    let count = 0;
    if (priceRange[0] > 0 || priceRange[1] < 50) count++;
    if (intensityLevel.length > 0) count++;
    if (sweetnessLevel.length > 0) count++;
    setActiveFiltersCount(count);
    
  }, [activeCategory, sortOption, priceRange, intensityLevel, sweetnessLevel]);

  return (
    <FiltersContext.Provider value={{
      activeCategory,
      setActiveCategory,
      sortOption,
      setSortOption,
      priceRange,
      setPriceRange,
      intensityLevel,
      setIntensityLevel,
      sweetnessLevel,
      setSweetnessLevel,
      filteredProducts,
      activeFiltersCount,
      resetFilters
    }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
}
