
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryFilters from '@/components/CategoryFilters';
import SortOptions from '@/components/SortOptions';
import ProductGrid from '@/components/ProductGrid';
import AttributeFilters from '@/components/AttributeFilters';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { products, categories } from '@/data/products';
import { Product } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { FilterIcon, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  // Filtering and sorting state
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [intensityLevel, setIntensityLevel] = useState<number[]>([]);
  const [sweetnessLevel, setSweetnessLevel] = useState<number[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  
  // Effect to filter products based on selected filters
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by intensity level
    if (intensityLevel.length > 0) {
      filtered = filtered.filter(product => 
        intensityLevel.includes(product.intensity)
      );
    }
    
    // Filter by sweetness level
    if (sweetnessLevel.length > 0) {
      filtered = filtered.filter(product => 
        sweetnessLevel.includes(product.sweetness)
      );
    }
    
    // Sort products
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
        // Featured - default sort
        break;
    }
    
    setFilteredProducts(filtered);
    
    // Count active filters (excluding category which is always active)
    let count = 0;
    if (priceRange[0] > 0 || priceRange[1] < 50) count++;
    if (intensityLevel.length > 0) count++;
    if (sweetnessLevel.length > 0) count++;
    setActiveFiltersCount(count);
    
  }, [activeCategory, sortOption, priceRange, intensityLevel, sweetnessLevel]);
  
  // Reset all filters
  const resetFilters = () => {
    setActiveCategory('all');
    setPriceRange([0, 50]);
    setIntensityLevel([]);
    setSweetnessLevel([]);
    setSortOption('featured');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-2">Our Collection</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Discover our unique spice blends crafted from the finest ingredients sourced from around the world.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <AttributeFilters 
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              intensityLevel={intensityLevel}
              setIntensityLevel={setIntensityLevel}
              sweetnessLevel={sweetnessLevel}
              setSweetnessLevel={setSweetnessLevel}
            />
            
            {activeFiltersCount > 0 && (
              <Button 
                variant="outline" 
                className="mt-4 w-full flex items-center justify-center"
                onClick={resetFilters}
              >
                <X className="h-4 w-4 mr-2" /> Clear All Filters
              </Button>
            )}
          </div>
          
          {/* Mobile Filters Button */}
          <div className="lg:hidden mb-4 flex items-center justify-between">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="h-4 w-4" /> Filters
                  {activeFiltersCount > 0 && (
                    <span className="bg-spice-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your product search with these filters.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <AttributeFilters 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    intensityLevel={intensityLevel}
                    setIntensityLevel={setIntensityLevel}
                    sweetnessLevel={sweetnessLevel}
                    setSweetnessLevel={setSweetnessLevel}
                  />
                  
                  {activeFiltersCount > 0 && (
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full flex items-center justify-center"
                      onClick={resetFilters}
                    >
                      <X className="h-4 w-4 mr-2" /> Clear All Filters
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
            <SortOptions 
              sortOption={sortOption} 
              setSortOption={setSortOption} 
            />
          </div>
          
          <div className="flex-grow">
            {/* Category Filters */}
            <CategoryFilters 
              categories={categories} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory}
            />
            
            {/* Sort Options - Desktop */}
            <div className="hidden lg:block">
              <SortOptions 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
              />
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try changing your filters to find products.</p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
