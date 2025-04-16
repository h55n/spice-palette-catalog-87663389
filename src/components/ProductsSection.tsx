
import React from 'react';
import { useFilters } from '@/contexts/FiltersContext';
import CategoryFilters from './CategoryFilters';
import SortOptions from './SortOptions';
import ProductGrid from './ProductGrid';
import AttributeFilters from './AttributeFilters';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FilterIcon, X } from 'lucide-react';
import { categories } from '@/data/products';

const ProductsSection = () => {
  const {
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
  } = useFilters();

  return (
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
  );
};

export default ProductsSection;
