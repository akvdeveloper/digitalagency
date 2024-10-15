"use client"; // Add this at the top of your file to make it a Client Component

import React, { useState } from 'react';
import { FaCode, FaLaptop, FaShieldAlt, FaCloud, FaChartLine, FaSearch, FaDollarSign, FaShareAlt, FaChartBar, FaEnvelope } from 'react-icons/fa';

const OurService = () => {
  const [activeTab, setActiveTab] = useState('it');

  const services = {
    it: [
      { icon: <FaCode className="h-8 w-8 text-indigo-600" />, title: "Web Development & Design", description: "Custom website solutions that are responsive, user-friendly, and optimized for performance." },
      { icon: <FaLaptop className="h-8 w-8 text-indigo-600" />, title: "Software Development", description: "Tailored software solutions that meet specific business needs, including web and mobile applications." },
      { icon: <FaCloud className="h-8 w-8 text-indigo-600" />, title: "Cloud Services", description: "Cloud computing solutions that enhance collaboration, scalability, and data security." },
      { icon: <FaShieldAlt className="h-8 w-8 text-indigo-600" />, title: "Cybersecurity", description: "Comprehensive cybersecurity services to protect your business from online threats." },
      { icon: <FaChartLine className="h-8 w-8 text-indigo-600" />, title: "IT Consulting", description: "Expert consulting to align your technology with your business goals and drive digital transformation." },
    ],
    marketing: [
      { icon: <FaSearch className="h-8 w-8 text-indigo-600" />, title: "Search Engine Optimization (SEO)", description: "Strategies to improve your website's visibility and organic traffic through on-page and off-page SEO techniques." },
      { icon: <FaDollarSign className="h-8 w-8 text-indigo-600" />, title: "Pay-Per-Click (PPC) Advertising", description: "Targeted ad campaigns that drive immediate traffic and generate leads through platforms like Google Ads and social media." },
      { icon: <FaShareAlt className="h-8 w-8 text-indigo-600" />, title: "Social Media Marketing", description: "Building brand awareness and engaging with customers through strategic social media campaigns." },
      { icon: <FaChartBar className="h-8 w-8 text-indigo-600" />, title: "Content Marketing", description: "Creating and distributing valuable content to attract and engage your target audience." },
      { icon: <FaEnvelope className="h-8 w-8 text-indigo-600" />, title: "Email Marketing", description: "Personalized email campaigns designed to nurture leads and convert them into customers." },
    ],
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors duration-200 ${
            activeTab === 'it' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-indigo-50'
          }`}
          onClick={() => setActiveTab('it')}
        >
          IT Services
        </button>
        <button
          className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors duration-200 ${
            activeTab === 'marketing' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-indigo-50'
          }`}
          onClick={() => setActiveTab('marketing')}
        >
          Digital Marketing Services
        </button>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4 text-indigo-800">Our {activeTab === 'it' ? 'IT' : 'Digital Marketing'} Services</h3>
        <p className="text-gray-600 mb-8 text-lg">
          {activeTab === 'it' 
            ? "Our IT services are designed to optimize your business operations, enhance productivity, and secure your digital assets. We leverage the latest technologies to deliver efficient, reliable, and scalable solutions."
            : "Our digital marketing services help businesses increase their online presence, attract targeted traffic, and convert leads into customers. We employ a strategic approach tailored to your audience and business objectives."}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services[activeTab].map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                {service.icon}
                <h4 className="ml-4 text-xl font-semibold text-indigo-800">{service.title}</h4>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
