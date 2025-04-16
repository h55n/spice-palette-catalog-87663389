
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-extrabold text-spice-black">
              <span className="text-spice-green-dark">spice</span>
              <span className="text-spice-pink-dark">palette</span>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-spice-green-dark transition-colors font-medium">
            Shop
          </Link>
          <Link to="/" className="hover:text-spice-green-dark transition-colors font-medium">
            Collections
          </Link>
          <Link to="/" className="hover:text-spice-green-dark transition-colors font-medium">
            About
          </Link>
          <Link to="/" className="hover:text-spice-green-dark transition-colors font-medium">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-spice-pink-dark text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="outline" className="hidden md:inline-flex">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
