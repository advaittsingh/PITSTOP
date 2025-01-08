import React from 'react';
import { Link } from 'react-router-dom';

function NewArrivals() {
  const newProducts = [
    { id: 1, name: 'New Product 1', price: '₹899', image: '/path/to/image1.jpg' },
    { id: 2, name: 'New Product 2', price: '₹1199', image: '/path/to/image2.jpg' },
    // Add more products
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="group">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;