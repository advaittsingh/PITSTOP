import React from 'react';

function BrandSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Add your brand logos here */}
          <div className="flex items-center justify-center">Brand 1</div>
          <div className="flex items-center justify-center">Brand 2</div>
          <div className="flex items-center justify-center">Brand 3</div>
          <div className="flex items-center justify-center">Brand 4</div>
        </div>
      </div>
    </div>
  );
}

export default BrandSection;