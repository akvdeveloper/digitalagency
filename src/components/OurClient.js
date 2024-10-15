import React from 'react';

const OurClients = () => {
  const clients = [
    "https://source.unsplash.com/random/200x100?logo",
    "https://source.unsplash.com/random/200x100?brand",
    "https://source.unsplash.com/random/200x100?company",
    "https://source.unsplash.com/random/200x100?business",
    "https://source.unsplash.com/random/200x100?enterprise",
    "https://source.unsplash.com/random/200x100?corporation",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>
        <p className="text-center mb-8">
          We are proud to have worked with a diverse range of clients, from small businesses to large enterprises, across various industries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={client} alt={`Client ${index + 1}`} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
