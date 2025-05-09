
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';
import { featuredBooks, newArrivals, categories } from '../data/mockData';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedBooks 
          title="Featured Classics" 
          books={featuredBooks} 
          viewAllLink="/category/classics" 
        />
        
        <CategorySection categories={categories} />
        
        <FeaturedBooks 
          title="New Arrivals" 
          books={newArrivals} 
          viewAllLink="/new-arrivals" 
        />
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
