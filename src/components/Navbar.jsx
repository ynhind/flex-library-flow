
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const toggleAccount = () => setIsAccountOpen(!isAccountOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-oldTomes-cream border-b border-oldTomes-gold/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-oldTomes-brown font-serif text-3xl flex items-center">
              <span className="mr-2">📚</span>
              <span>OldTomes</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="nav-link">Home</Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={toggleCategories}
              >
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 animate-fade-in">
                  <Link to="/category/classic-literature" className="block px-4 py-2 hover:bg-gray-100">
                    Classic Literature
                  </Link>
                  <Link to="/category/history" className="block px-4 py-2 hover:bg-gray-100">
                    History
                  </Link>
                  <Link to="/category/philosophy" className="block px-4 py-2 hover:bg-gray-100">
                    Philosophy
                  </Link>
                  <Link to="/category/poetry" className="block px-4 py-2 hover:bg-gray-100">
                    Poetry
                  </Link>
                  <Link to="/categories" className="block px-4 py-2 hover:bg-gray-100 font-medium">
                    All Categories
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/new-arrivals" className="nav-link">New Arrivals</Link>
            <Link to="/my-library" className="nav-link">My Library</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search titles, authors..." 
                className="w-full py-2 pl-4 pr-10 rounded-full bg-oldTomes-lightCream border border-oldTomes-gold/20 focus:outline-none focus:ring-1 focus:ring-oldTomes-gold"
              />
              <button className="absolute right-3 top-2.5">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Cart and Account */}
          <div className="flex items-center">
            {/* Cart */}
            <Link to="/cart" className="p-2 relative">
              <svg className="w-6 h-6 text-oldTomes-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute top-0 right-0 bg-oldTomes-brown text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Link>

            {/* Account */}
            <div className="relative ml-2">
              <button 
                className="p-2"
                onClick={toggleAccount}
              >
                <svg className="w-6 h-6 text-oldTomes-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </button>
              
              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in">
                  <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">
                    My Account
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                    My Orders
                  </Link>
                  <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">
                    Wishlist
                  </Link>
                  <hr className="my-1" />
                  <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">
                    Sign Out
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              className="ml-2 md:hidden p-2"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6 text-oldTomes-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search - visible only on mobile */}
        <div className="mt-3 md:hidden">
          <input 
            type="text" 
            placeholder="Search titles, authors..." 
            className="w-full py-2 pl-4 pr-10 rounded-full bg-oldTomes-lightCream border border-oldTomes-gold/20 focus:outline-none focus:ring-1 focus:ring-oldTomes-gold"
          />
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <Link to="/" className="block py-2 hover:text-oldTomes-brown">Home</Link>
            <button 
              className="w-full text-left py-2 flex items-center justify-between hover:text-oldTomes-brown"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
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
            
            <hr className="my-2 border-oldTomes-gold/20" />
            
            <Link to="/account" className="block py-2 hover:text-oldTomes-brown">My Account</Link>
            <Link to="/orders" className="block py-2 hover:text-oldTomes-brown">My Orders</Link>
            <Link to="/wishlist" className="block py-2 hover:text-oldTomes-brown">Wishlist</Link>
            <Link to="/logout" className="block py-2 hover:text-oldTomes-brown">Sign Out</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
