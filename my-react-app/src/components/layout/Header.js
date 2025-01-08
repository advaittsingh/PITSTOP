import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-2xl text-black">Pitstop</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-black transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/cart" className="text-gray-600 hover:text-black transition-colors">Cart (0)</Link></li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
              <ul className="px-4 py-2">
                <li><Link to="/" className="block py-2">Home</Link></li>
                <li><Link to="/shop" className="block py-2">Shop</Link></li>
                <li><Link to="/about" className="block py-2">About</Link></li>
                <li><Link to="/contact" className="block py-2">Contact</Link></li>
                <li>
                  <Link to="/cart" className="block py-2">
                    Cart ({state.items.length})
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;