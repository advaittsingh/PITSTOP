import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { state, dispatch } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {state.items.map(item => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price}</p>
                <button 
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart; 