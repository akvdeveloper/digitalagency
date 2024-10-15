"use client";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "SEO Specialist",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    message: "Thanks to their exceptional SEO services, my website's traffic has doubled in just three months. Highly recommend their team!",
    twitterLink: "https://twitter.com/ravikumar/status/1234567890",
  },
  {
    name: "Anjali Sharma",
    role: "Content Marketer",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    message: "Their content marketing strategies are top-notch! My engagement rates have skyrocketed since I started working with them.",
    instagramLink: "https://www.instagram.com/p/1234567890",
  },
  {
    name: "Vijay Singh",
    role: "PPC Manager",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    message: "The PPC campaigns they created brought incredible ROI! I couldn't be happier with the results.",
    facebookLink: "https://www.facebook.com/vijaysingh/posts/1234567890",
  },
  {
    name: "Priya Patel",
    role: "Social Media Influencer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    message: "The social media strategies they implemented have helped me grow my follower base significantly. Their insights are invaluable!",
    twitterLink: "https://twitter.com/priyapatel/status/1234567890",
  },
  {
    name: "Arjun Mehta",
    role: "Brand Strategist",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    message: "Their branding services helped me clarify my message and connect better with my audience. Highly effective!",
    instagramLink: "https://www.instagram.com/p/1234567890",
  },
  {
    name: "Sneha Rao",
    role: "Digital Marketing Consultant",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    message: "I am thrilled with the results from their comprehensive digital marketing services. They truly understand how to drive results!",
    facebookLink: "https://www.facebook.com/sneharao/posts/1234567890",
  },
];

const Testimonial = () => {
  return (
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
      <div className="py-4 text-center md:py-8">
        <h4 className="text-base font-bold tracking-wide text-center uppercase text-teal-600">Client Reviews</h4>
        <p className="mt-2 tracking-tight text-gray-900 text:xl md:text-2xl">What our clients say.</p>
      </div>

      <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10">
            <div className="flex gap-4 items-start">
              <img className="w-12 h-12 rounded-full" src={testimonial.avatar} alt={`${testimonial.name} avatar`} width="400" height="400" loading="lazy" />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">{testimonial.name}</h6>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex gap-4">
                  {testimonial.twitterLink && (
                    <a href={testimonial.twitterLink} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  )}
                  {testimonial.instagramLink && (
                    <a href={testimonial.instagramLink} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {testimonial.facebookLink && (
                    <a href={testimonial.facebookLink} className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-8">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
