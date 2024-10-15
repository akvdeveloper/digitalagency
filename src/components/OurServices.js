import React from 'react';
import { FaGlobe, FaCode, FaCloud, FaShieldAlt, FaBriefcase, FaSearch, FaMousePointer, FaComments, FaFileAlt, FaEnvelope, FaChartBar } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const OurServices = () => {
  const itServices = [
    { icon: <FaGlobe size={32} />, title: "Web Development & Design", description: "Building secure, responsive websites that provide a seamless user experience." },
    { icon: <FaCode size={32} />, title: "Software Development", description: "Creating custom software tailored to your business needs, from enterprise applications to mobile solutions." },
    { icon: <FaCloud size={32} />, title: "Cloud Services", description: "Implementing cloud-based systems to improve scalability and flexibility." },
    { icon: <FaShieldAlt size={32} />, title: "Cybersecurity", description: "Ensuring your business stays protected from online threats with top-tier security measures." },
    { icon: <FaBriefcase size={32} />, title: "IT Consulting", description: "Providing expert guidance to help you leverage technology for growth and efficiency." },
  ];

  const marketingServices = [
    { icon: <FaSearch size={32} />, title: "Search Engine Optimization (SEO)", description: "Boosting your website's visibility on search engines to attract more organic traffic." },
    { icon: <FaMousePointer size={32} />, title: "Pay-Per-Click (PPC) Advertising", description: "Driving targeted traffic with data-driven ad campaigns on Google, Facebook, and other platforms." },
    { icon: <FaComments size={32} />, title: "Social Media Marketing", description: "Building and engaging your audience through strategic social media campaigns." },
    { icon: <FaFileAlt size={32} />, title: "Content Marketing", description: "Crafting compelling content that resonates with your audience and enhances your brand's voice." },
    { icon: <FaEnvelope size={32} />, title: "Email Marketing", description: "Creating personalized email campaigns that nurture leads and convert prospects into customers." },
    { icon: <FaChartBar size={32} />, title: "Analytics & Reporting", description: "Tracking the performance of your campaigns and providing actionable insights to maximize ROI." },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">IT Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8">Digital Marketing Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
