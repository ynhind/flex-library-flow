
import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = ({ categories }) => {
  return (
    <div className="py-12 bg-oldTomes-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-oldTomes-darkBrown mb-10">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.name}
              category={category.name}
              icon={category.icon}
              bookCount={category.bookCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
