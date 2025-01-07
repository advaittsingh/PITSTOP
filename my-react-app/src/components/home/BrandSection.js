function BrandSection() {
    const brands = [
      { name: 'HKS', description: 'Japanese company specializing in aftermarket automotive performance parts' },
      { name: 'Brembo', description: 'Italian company specializing in high-performance braking systems' },
      { name: 'Mishimoto', description: 'U.S.-based company specializing in high-performance cooling solutions' },
      // ... add other brands
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Browse By Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                <p className="text-gray-600">{brand.description}</p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default BrandSection;