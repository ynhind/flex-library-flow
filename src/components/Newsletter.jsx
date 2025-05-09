
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email) {
      // In a real app, this would connect to an API
      toast({
        title: "Thank you for subscribing!",
        description: "You're now part of our literary community.",
      });
      setEmail('');
    }
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-r from-oldTomes-brown to-oldTomes-gold text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join Our Literary Community</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for curated reading lists, new arrivals, and exclusive discounts on rare finds.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button type="submit" className="px-6 py-3 bg-oldTomes-darkBrown text-white font-medium rounded hover:bg-opacity-90 transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
};

export default Newsletter;
