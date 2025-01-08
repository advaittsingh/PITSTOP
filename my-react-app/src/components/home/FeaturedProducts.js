import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Product 1', price: '₹999', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '₹1299', image: '/path/to/image2.jpg' },
    // Add more products
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;