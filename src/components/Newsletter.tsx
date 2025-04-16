
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="py-16 md:py-24 px-4 bg-spice-green text-white">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Spice Club</h2>
        <p className="mb-8 text-lg">
          Subscribe to our newsletter for exclusive recipes, special offers, and new product announcements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
          />
          <Button className="bg-spice-black hover:bg-spice-black/90 text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
