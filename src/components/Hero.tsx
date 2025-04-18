
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf as LeafIcon, CircleUser, Coffee as CoffeeIcon, Flame as FlameIcon, Heart as HeartIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-spice-cream to-spice-pink-light">
      <motion.div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E')",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "20px 20px"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 right-[10%] w-24 h-24 rounded-full bg-spice-yellow/20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-[5%] w-32 h-32 rounded-full bg-spice-green/20 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center mb-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-spice-black/70"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-spice-pink" />
              Premium Spice Collection
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-extrabold mb-6 max-w-xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                DISCOVER
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                NEW
              </motion.span> 
              <motion.span 
                className="block text-spice-green-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                TASTES
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Original spice blends suitable for both home and professional cooking. Elevate your culinary creations with our premium artisanal spices.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-spice-black hover:bg-spice-black/90 text-white group"
              >
                SHOP ALL PRODUCTS
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-spice-pink rounded-3xl overflow-hidden shadow-xl relative">
              {/* Custom spice illustration */}
              <motion.div 
                className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3"
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>
              
              {/* Inner content styling for 3D effect */}
              <motion.div 
                className="rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 shadow-inner"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="p-8 pt-14 pb-14 flex items-center justify-center"
                  initial={{ backgroundPosition: "0% 0%" }}
                  animate={{ backgroundPosition: "100% 100%" }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                >
                  {/* Custom designed spice collection illustration */}
                  <motion.div 
                    className="relative w-64 h-64 md:w-80 md:h-80"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 10,
                      repeat: Infinity, 
                      repeatType: "reverse",
                      duration: 2
                    }}
                  >
                    {/* Main circle background */}
                    <motion.div 
                      className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
                    
                    {/* Collection of spice illustrations */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="relative"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute"
                            style={{ 
                              top: Math.sin(2 * Math.PI * i / 5) * 100,
                              left: Math.cos(2 * Math.PI * i / 5) * 100,
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                          >
                            <div className={`bg-white rounded-full p-3 shadow-lg `}>
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                i === 0 ? "bg-spice-green-light" : 
                                i === 1 ? "bg-spice-pink-light" : 
                                i === 2 ? "bg-spice-cream" : 
                                i === 3 ? "bg-spice-yellow" : 
                                "bg-spice-orange"
                              }`}>
                                {i === 0 && <LeafIcon className="w-5 h-5 text-white" />}
                                {i === 1 && <CircleUser className="w-5 h-5 text-white" />}
                                {i === 2 && <CoffeeIcon className="w-5 h-5 text-white" />}
                                {i === 3 && <FlameIcon className="w-5 h-5 text-white" />}
                                {i === 4 && <Sparkles className="w-5 h-5 text-white" />}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Center spice element */}
                      <motion.div
                        className="absolute rounded-full bg-white shadow-xl p-5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                      >
                        <motion.div
                          className="bg-spice-pink rounded-full w-16 h-16 flex items-center justify-center"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <HeartIcon className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
