"use client";
import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaStar, FaGlobe, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

const Milestone = () => {
  const data = [
    { icon: FaStar, count: 6, description: "YEARS EXPERIENCE" },
    { icon: FaGlobe, count: 100, description: "WEBSITE BUILT" },
    { icon: FaMapMarkerAlt, count: 15, description: "SERVICE LOCATION" },
    { icon: FaCheck, count: 35, description: "HAPPY CUSTOMERS" },
  ];

  const [startCounting, setStartCounting] = useState(false);
  const milestoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (milestoneRef.current) {
      observer.observe(milestoneRef.current);
    }

    return () => {
      if (milestoneRef.current) {
        observer.unobserve(milestoneRef.current);
      }
    };
  }, []);

  return (
    <div ref={milestoneRef} className="flex flex-col items-center justify-center min-h-96 py-2 px-4">
      <h1 className="text-3xl font-bold mb-8">MILESTONES</h1>
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl md:grid-cols-2 lg:grid-cols-4">
        {data.map(({ icon: Icon, count, description }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="text-blue-500 text-4xl mb-2" />
            <p className="text-2xl font-semibold">
              {startCounting ? <CountUp end={count} duration={2} /> : "0"}+
            </p>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestone;
