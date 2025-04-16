
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-24 bg-spice-cream">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E')",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 max-w-xl leading-tight">
              <span className="block">DISCOVER</span>
              <span className="block">NEW</span> 
              <span className="block text-spice-green-dark">TASTES</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Original spice blends suitable for both home and professional cooking. Elevate your culinary creations with our premium artisanal spices.
            </p>
            <Button size="lg" className="bg-spice-black hover:bg-spice-black/90 text-white">
              SHOP ALL PRODUCTS
            </Button>
          </div>
          <div className="md:w-1/2 bg-spice-pink rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/6ac47345-9a8c-485e-9a90-2eb873327fe1.png"
              alt="Collection of premium spice jars" 
              className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
