import React from 'react';
import { TruckIcon, ShieldCheckIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Features() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <ShieldCheckIcon className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Quality Products</h3>
            <p>Premium automotive parts from trusted brands</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <TruckIcon className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Fast Shipping</h3>
            <p>Quick delivery across India</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <PhoneIcon className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Expert Support</h3>
            <p>24/7 customer service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;