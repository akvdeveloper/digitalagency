"use client"; // Ensure this is a Client Component
import { useEffect } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/breadcrumb';
import AboutMain from '@/components/aboutmain';
import CallToAction from '@/components/CallToAction';
import ClientTestimonials from '@/components/ClientTestimonial';
import OurProcess from '@/components/OurProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/portfolio';

export default function About() {
  const titlehead = "About Us"; // Title variable

  useEffect(() => {
    document.title = titlehead; // Set the document title
  }, [titlehead]);

  return (
    <div className="container mx-auto">
      <Head>
        <title>{titlehead}</title>
        <meta name="description" content="Learn more about our institution, mission, values, and team." />
      </Head>

      {/* Breadcrumb */}
      <Breadcrumb 
        subtitle="About Us" 
        content="Welcome to our institution, where we strive for excellence in education and research."
      />
      <AboutMain />
      <WhyChooseUs />
      <OurProcess />
      <Portfolio />
      <ClientTestimonials />
      <CallToAction
        title={"Ready to Grow Your Business?"}
        content={"Let's work together to create innovative solutions that drive real results."}
      />
    </div>
  );
}


