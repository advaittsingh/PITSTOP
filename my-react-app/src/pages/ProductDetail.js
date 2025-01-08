import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Fixed import path

function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  
  // Sample product data - replace with your actual data
  const product = {
    id: id,
    name: "Sample Product",
    price: 999,
    description: "Product description",
    image: "/images/product.jpg"
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">₹{product.price}</p>
          <p className="mb-6">{product.description}</p>
          <button 
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;