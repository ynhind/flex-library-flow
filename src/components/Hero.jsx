
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-oldTomes-cream py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          <span className="text-oldTomes-darkBrown">Discover Timeless </span>
          <span className="text-oldTomes-brown">Knowledge.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700">
          With a modernized navigation experience, browse our collection with ease.
        </p>
        <Link to="/categories" className="btn-primary">
          Explore Collection
        </Link>
      </div>
    </div>
  );
};

export default Hero;
