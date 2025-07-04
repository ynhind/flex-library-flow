
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
          <span className="text-stone-800">Discover Timeless </span>
          <span className="text-amber-800">Knowledge.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
          With a modernized navigation experience, browse our collection with ease.
        </p>
        
        <Link to="/categories" className="inline-block px-8 py-3 bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg">
          Explore Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
