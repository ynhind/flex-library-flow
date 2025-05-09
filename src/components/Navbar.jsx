
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-oldTomes-cream border-b border-oldTomes-gold/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-oldTomes-darkBrown font-serif text-2xl flex items-center">
              <span className="mr-2 text-xl">📚</span>
              <span className="font-bold">OldTomes</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-oldTomes-brown">Home</Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-oldTomes-brown flex items-center"
                onClick={toggleCategories}
              >
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute z-10 mt-4 w-56 bg-oldTomes-cream border border-oldTomes-gold/10 rounded-md shadow-md py-1 animate-fade-in">
                  <Link to="/category/classic-literature" className="block px-6 py-3 hover:bg-oldTomes-gold/10">
                    Classic Literature
                  </Link>
                  <Link to="/category/history" className="block px-6 py-3 hover:bg-oldTomes-gold/10">
                    History
                  </Link>
                  <Link to="/category/philosophy" className="block px-6 py-3 hover:bg-oldTomes-gold/10">
                    Philosophy
                  </Link>
                  <Link to="/category/poetry" className="block px-6 py-3 hover:bg-oldTomes-gold/10">
                    Poetry
                  </Link>
                  <Link to="/categories" className="block px-6 py-3 hover:bg-oldTomes-gold/10">
                    All Categories
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/new-arrivals" className="text-gray-700 hover:text-oldTomes-brown">New Arrivals</Link>
            <Link to="/my-library" className="text-gray-700 hover:text-oldTomes-brown">My Library</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search titles, authors..." 
                className="w-full py-2 pl-10 pr-4 rounded-full bg-oldTomes-gold/20 border-none focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Cart and Account */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="p-2 relative text-gray-700 hover:text-oldTomes-brown">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-oldTomes-brown text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Link>

            {/* Account */}
            <Link to="/account" className="p-2 text-gray-700 hover:text-oldTomes-brown">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-oldTomes-brown"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search - visible only on mobile */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search titles, authors..." 
              className="w-full py-2 pl-10 pr-4 rounded-full bg-oldTomes-gold/20 border-none focus:outline-none"
            />
            <div className="absolute left-3 top-2.5 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <Link to="/" className="block py-2 hover:text-oldTomes-brown">Home</Link>
            <button 
              className="w-full text-left py-2 flex items-center justify-between hover:text-oldTomes-brown"
              onClick={toggleCategories}
            >
              <span>Categories</span>
              <svg className={`w-4 h-4 transform ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isCategoriesOpen && (
              <div className="pl-4 space-y-2 mt-1 mb-2">
                <Link to="/category/classic-literature" className="block py-1 hover:text-oldTomes-brown">
                  Classic Literature
                </Link>
                <Link to="/category/history" className="block py-1 hover:text-oldTomes-brown">
                  History
                </Link>
                <Link to="/category/philosophy" className="block py-1 hover:text-oldTomes-brown">
                  Philosophy
                </Link>
                <Link to="/category/poetry" className="block py-1 hover:text-oldTomes-brown">
                  Poetry
                </Link>
                <Link to="/categories" className="block py-1 hover:text-oldTomes-brown font-medium">
                  All Categories
                </Link>
              </div>
            )}
            
            <Link to="/new-arrivals" className="block py-2 hover:text-oldTomes-brown">New Arrivals</Link>
            <Link to="/my-library" className="block py-2 hover:text-oldTomes-brown">My Library</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
