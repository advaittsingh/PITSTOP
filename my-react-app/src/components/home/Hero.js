import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Car parts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-4">
            Premium Auto Parts for Your Vehicle
          </h1>
          <p className="text-xl mb-8">
            Discover our wide range of high-quality automotive parts and accessories
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;