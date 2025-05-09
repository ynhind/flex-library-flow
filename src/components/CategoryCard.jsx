
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, icon, bookCount }) => {
  return (
    <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="category-card">
      <div className="text-oldTomes-brown text-4xl">
        {icon}
      </div>
      <h3 className="font-serif font-bold text-xl text-oldTomes-darkBrown">{category}</h3>
      <p className="text-gray-500 text-sm">{bookCount} books</p>
    </Link>
  );
};

export default CategoryCard;
