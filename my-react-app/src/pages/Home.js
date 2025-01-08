import React from 'react';
import Hero from '../components/home/Hero';
import BrandSection from '../components/home/BrandSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import Features from '../components/home/Features';

function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <BrandSection />
      <FeaturedProducts />
      <NewArrivals />
      <Features />
    </div>
  );
}

export default Home;