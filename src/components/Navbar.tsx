import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { CartIcon } from './CartIcon';
import { UserMenu } from './UserMenu';

export function Navbar() {
  const location = useLocation();

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#about';
      return;
    }
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="relative transition-transform hover:scale-105"
            >
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Collections
              </Link>
              <Link 
                to="/best-sellers" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Best Sellers
              </Link>
              <a 
                href="#about" 
                onClick={scrollToAbout}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Our Story
              </a>
              <Link 
                to="/shop" 
                className="bg-white/80 hover:bg-white/90 text-gray-800 px-6 py-2 rounded-full 
                          transition-all duration-300 shadow-[4px_4px_10px_0_rgba(31,38,135,0.1)]
                          hover:shadow-[6px_6px_15px_0_rgba(31,38,135,0.15)]
                          backdrop-blur-sm font-medium"
              >
                Shop Now
              </Link>
              <div className="flex items-center gap-6">
                <CartIcon />
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}