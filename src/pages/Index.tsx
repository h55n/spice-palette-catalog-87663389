
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { FiltersProvider } from '@/contexts/FiltersContext';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FiltersProvider>
        <ProductsSection />
      </FiltersProvider>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
