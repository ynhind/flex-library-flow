
import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const FeaturedBooks = ({ title, books, viewAllLink }) => {
  return (
    <div className="py-12 bg-oldTomes-cream">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-black">{title}</h2>
          {viewAllLink && (
            <Link to={viewAllLink} className="flex items-center text-oldTomes-brown hover:text-oldTomes-darkBrown transition-colors">
              <span className="mr-2">View all</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
