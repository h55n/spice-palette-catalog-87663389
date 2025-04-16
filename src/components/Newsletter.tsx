
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Send, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Subscription successful",
        description: "Thank you for joining our Spice Club!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-spice-green text-white relative overflow-hidden">
      {/* Background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto text-center max-w-3xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Spice Club</h2>
          <p className="mb-8 text-lg max-w-xl mx-auto text-white/90">
            Subscribe to our newsletter for exclusive recipes, special offers, and new product announcements.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <Button 
              className="bg-spice-black hover:bg-spice-black/90 text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Send className="h-4 w-4" />
                </motion.div>
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              Subscribe
            </Button>
          </form>
          
          <motion.div 
            className="mt-8 flex items-center justify-center gap-2 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <a href="#" className="flex items-center hover:underline">
              View our recent newsletters <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
