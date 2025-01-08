import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative h-screen bg-black text-white flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Premium Auto Parts for Your Vehicle</h1>
          <p className="text-xl mb-8 text-gray-300">Discover quality parts from trusted brands</p>
          <Link 
            to="/shop" 
            className="bg-white text-black px-8 py-4 rounded-lg inline-block hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;