
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { FiltersProvider } from '@/contexts/FiltersContext';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  in: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <Navbar />
      
      <motion.div variants={childVariants}>
        <Hero />
      </motion.div>
      
      <motion.div variants={childVariants}>
        <FiltersProvider>
          <ProductsSection />
        </FiltersProvider>
      </motion.div>
      
      <motion.div variants={childVariants}>
        <Newsletter />
      </motion.div>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
