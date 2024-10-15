"use client"; // Ensure this is a Client Component
import { useEffect } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/breadcrumb';
import Team from '@/components/team';
import AboutSection from '@/components/aboutsection'; // Ensure this is used if needed
import AboutMain from '@/components/aboutmain';
import CallToAction from '@/components/CallToAction';
import ClientTestimonials from '@/components/ClientTestimonial';
import OurClients from '@/components/OurClient';
import ClientsCarousel from '@/components/client';
import OurProcess from '@/components/OurProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/portfolio';

function About() {
  const titlehead = "About Us"; // Title variable

  useEffect(() => {
    // Optionally remove this if you are already setting it in Head
    document.title = titlehead; // Fallback for title
  }, [titlehead]); // Add titlehead to dependencies

  return (
    <div className="container mx-auto">
      <Head>
        <title>{titlehead}</title>
        <meta name="description" content="Learn more about our institution, mission, values, and team." />
        {/* Additional SEO tags can be added here */}
      </Head>

      {/* Breadcrumb */}
      <Breadcrumb 
        subtitle="About Us" 
        content="Welcome to our institution, where we strive for excellence in education and research."
      />
      <AboutMain />
      <WhyChooseUs />
      <Team />
      <OurProcess />
      <Portfolio />
      <ClientsCarousel />
      <ClientTestimonials />
      <CallToAction
        title={"Ready to Grow Your Business?"}
        content={"Let's work together to create innovative solutions that drive real results."}
      />
    </div>
  );
}

export default About;
