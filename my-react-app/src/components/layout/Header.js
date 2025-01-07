import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">PITSTOP</Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/shop" className="hover:text-gray-600">Shop</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-gray-600">Home</Link>
              <Link to="/shop" className="hover:text-gray-600">Shop</Link>
              <Link to="/about" className="hover:text-gray-600">About</Link>
              <Link to="/contact" className="hover:text-gray-600">Contact</Link>
              <Link to="/cart" className="flex items-center">
                <ShoppingCartIcon className="h-6 w-6 mr-2" />
                Cart ({state.items.length})
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;