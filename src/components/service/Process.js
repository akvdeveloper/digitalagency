"use client";
import React, { useState } from 'react';
import { FaSearch, FaChartBar, FaBolt, FaSyncAlt, FaFileAlt, FaChevronDown } from 'react-icons/fa';

const ProcessStep = ({ icon, title, description, isOpen, onClick }) => (
  <div className="mb-4 overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102">
    <button
      className={`flex items-center justify-between w-full p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white focus:outline-none transition-all duration-300 ${
        isOpen ? 'rounded-t-xl' : 'rounded-xl'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="bg-white rounded-full p-3 mr-4">
          {React.cloneElement(icon, { className: "w-6 h-6 text-indigo-600" })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <FaChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <div
      className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-48 py-6' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Process = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    { icon: <FaSearch />, title: "Discovery Phase", description: "We start by understanding your business, goals, and target audience through in-depth consultations and market research." },
    { icon: <FaChartBar />, title: "Strategy Development", description: "Based on the discovery phase, we develop a custom strategy tailored to your specific needs, outlining key objectives and actionable steps." },
    { icon: <FaBolt />, title: "Implementation", description: "Our team of IT specialists and marketing experts work together to execute the strategy, leveraging cutting-edge technologies and best practices." },
    { icon: <FaSyncAlt />, title: "Optimization", description: "We continuously monitor and optimize your campaigns or solutions to ensure the best possible performance, making data-driven adjustments as needed." },
    { icon: <FaFileAlt />, title: "Reporting", description: "We provide detailed reports and analytics to track the success of our efforts and identify opportunities for further improvement, ensuring transparency and measurable results." },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-3xl shadow-inner my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-800">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Process</span>
        </h2>
        <div className=" mx-auto space-y-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
