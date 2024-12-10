import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400">
              Elevating vision with style since 1990.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Collections</Link></li>
              <li><Link to="/best-sellers" className="text-gray-400 hover:text-white">Best Sellers</Link></li>
              <li><Link to="/location" className="text-gray-400 hover:text-white">Locate Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Makumbusho Area</li>
              <li>Dar es Salaam, Tanzania</li>
              <li>store@shadeiteyewear.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 ShadeItEyewear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}