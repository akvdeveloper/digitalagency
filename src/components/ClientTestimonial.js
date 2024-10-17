import React from 'react';
import { FaStar } from 'react-icons/fa'; // Use react-icons for the star

const Testimonial = ({ quote, author, company }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={20} className="text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="mb-4 italic">&quot;{quote}&quot;</p> {/* Escape double quotes here */}
    <p className="font-semibold">{author}</p>
    <p className="text-gray-600">{company}</p>
  </div>
);

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote:
        "&quot;[Agency Name] helped us redesign our website and implement a comprehensive SEO strategy. Our traffic has increased by 150% and our sales have seen significant growth. We couldn't be happier!&quot;", // Escape double quotes here
      author: "John Smith",
      company: "Tech Innovations Inc.",
    },
    {
      quote:
        "&quot;The team at [Agency Name] truly understands digital marketing. Their PPC campaigns have dramatically improved our ROI and customer acquisition rates.&quot;", // Escape double quotes here
      author: "Sarah Johnson",
      company: "E-commerce Solutions Ltd.",
    },
    {
      quote:
        "&quot;Working with [Agency Name] has been a game-changer for our IT infrastructure. Their cloud solutions have improved our efficiency and scalability.&quot;", // Escape double quotes here
      author: "Michael Brown",
      company: "Global Manufacturing Co.",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
