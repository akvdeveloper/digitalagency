"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaMobileAlt, FaCog, FaChartLine, FaBullhorn } from 'react-icons/fa';

const services = [
  { Icon: FaLaptopCode, title: "Website Development", description: "Build dynamic, responsive websites optimized for user experience and performance." },
  { Icon: FaCode, title: "Software Development", description: "Deliver custom software solutions that align with your business goals." },
  { Icon: FaMobileAlt, title: "Mobile App Development", description: "Create powerful, user-friendly mobile applications for iOS and Android platforms." },
  { Icon: FaCog, title: "CRM/ERP Development", description: "Streamline your operations with tailored CRM and ERP systems for your business." },
  { Icon: FaChartLine, title: "Digital Marketing", description: "Increase your online presence and drive sales with strategic digital marketing solutions." },
  { Icon: FaBullhorn, title: "Branding & Promotion", description: "Create a strong brand identity and promote your business to reach the right audience." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-700 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-700 max-w-2xl mx-auto">
            Discover a range of solutions designed to grow your business and drive digital innovation.
          </p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <service.Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">{service.description}</p>
                <button className="mt-2 px-4 py-2 border-2 border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 rounded-lg">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}