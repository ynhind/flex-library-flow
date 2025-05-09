
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { id, title, author, price, coverImage, rating, ratingCount } = book;

  // Create rating stars
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        );
      } else if (hasHalfStar && i === fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        );
      }
    }

    return stars;
  };

  return (
    <div className="book-card">
      {/* Wishlist button */}
      <button className="wishlist-button">
        <svg className="w-5 h-5 text-gray-500 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>

      {/* Book Cover Image */}
      <Link to={`/book/${id}`} className="block relative overflow-hidden h-64 w-full">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </Link>

      {/* Book Details */}
      <div className="p-4">
        <Link to={`/book/${id}`} className="block">
          <h3 className="font-serif font-bold text-lg text-oldTomes-darkBrown hover:text-oldTomes-brown mb-1">{title}</h3>
          <p className="text-gray-600 mb-2">{author}</p>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-1">
            {renderRatingStars(rating)}
          </div>
          <span className="text-sm text-gray-500">({ratingCount})</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
          <button className="add-to-cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
