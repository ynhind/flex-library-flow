
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-oldTomes-cream py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          <span className="text-black">Discover Timeless </span>
          <span className="text-oldTomes-brown">Knowledge.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700">
          With a modernized navigation experience, browse our collection with ease.
        </p>
        <Link to="/categories" className="bg-oldTomes-brown hover:bg-oldTomes-brown/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
          Explore Collection
        </Link>
      </div>
    </div>
  );
};

export default Hero;
