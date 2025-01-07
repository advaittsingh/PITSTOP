import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  CheckCircleIcon, 
  TrendingUpIcon, 
  SparklesIcon 
} from '@heroicons/react/outline';

function About() {
  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "1000+", label: "Products" },
    { number: "50+", label: "Brands" },
    { number: "10+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
      title: "Quality Assurance",
      description: "We ensure every product meets the highest quality standards"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-blue-500" />,
      title: "Customer First",
      description: "Our customers' satisfaction is our top priority"
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8 text-purple-500" />,
      title: "Innovation",
      description: "Constantly updating our inventory with the latest automotive technology"
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-yellow-500" />,
      title: "Excellence",
      description: "Striving for excellence in everything we do"
    }
  ];

  const teamMembers = [
    {
      name: "Advait Singh",
      position: "Founder & CEO",
      image: "/images/team/advait.jpg",
      description: "Automotive enthusiast with 15 years of industry experience"
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "/images/team/priya.jpg",
      description: "Expert in supply chain management and customer service"
    },
    {
      name: "Rahul Verma",
      position: "Technical Expert",
      image: "/images/team/rahul.jpg",
      description: "Certified automotive engineer with extensive knowledge"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[400px]"
      >
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="Pitstop Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pitstop</h1>
            <p className="text-xl">
              Your trusted partner in automotive excellence since 2014
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2014, Pitstop began with a simple mission: to provide car enthusiasts with high-quality automotive parts at competitive prices. What started as a small shop in Mumbai has grown into one of India's leading automotive parts retailers.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of customers nationwide, offering a comprehensive range of genuine parts from world-renowned manufacturers. Our commitment to quality and customer satisfaction remains as strong as ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-gray-500 mb-4">{member.position}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">Explore our collection of premium automotive parts</p>
            <button className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Shop Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;