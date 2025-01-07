import { motion } from 'framer-motion';
import {
  TruckIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  SupportIcon,
  SparklesIcon,
  ClockIcon
} from '@heroicons/react/outline';

function Features() {
  const features = [
    {
      icon: <TruckIcon className="h-12 w-12" />,
      title: "Free Shipping",
      description: "Free shipping on all orders above ₹5000 across India",
      color: "bg-blue-100"
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12" />,
      title: "Genuine Products",
      description: "100% authentic products from authorized brands",
      color: "bg-green-100"
    },
    {
      icon: <CurrencyRupeeIcon className="h-12 w-12" />,
      title: "Best Prices",
      description: "Competitive prices with price-match guarantee",
      color: "bg-yellow-100"
    },
    {
      icon: <SupportIcon className="h-12 w-12" />,
      title: "24/7 Support",
      description: "Expert support available round the clock",
      color: "bg-red-100"
    },
    {
      icon: <SparklesIcon className="h-12 w-12" />,
      title: "Premium Quality",
      description: "High-performance parts for your vehicle",
      color: "bg-purple-100"
    },
    {
      icon: <ClockIcon className="h-12 w-12" />,
      title: "Fast Installation",
      description: "Professional installation services available",
      color: "bg-indigo-100"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Pitstop?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer the best automotive parts and services to keep your vehicle performing at its peak
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} p-3 rounded-full w-fit mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Explore Our Products
          </button>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              src="/images/trust-badge-1.png" 
              alt="Certified Dealer" 
              className="h-16 object-contain"
            />
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              src="/images/trust-badge-2.png" 
              alt="Secure Payment" 
              className="h-16 object-contain"
            />
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/images/trust-badge-3.png" 
              alt="Quality Assured" 
              className="h-16 object-contain"
            />
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              src="/images/trust-badge-4.png" 
              alt="Fast Delivery" 
              className="h-16 object-contain"
            />
          </div>
        </div>

        {/* Customer Testimonial Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <div className="text-4xl text-gray-300 mb-4">"</div>
          <p className="text-gray-600 italic mb-4">
            Pitstop has completely transformed how I maintain my vehicle. Their quality parts and excellent service are unmatched!
          </p>
          <div className="font-semibold">Rahul Sharma</div>
          <div className="text-gray-500 text-sm">Automotive Enthusiast</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;