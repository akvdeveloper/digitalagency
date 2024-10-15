"use client"; // Ensures this is a client component

import Breadcrumb from '@/components/breadcrumb';
import Link from 'next/link'; // Importing Link from Next.js
import { FaArrowRight } from 'react-icons/fa'; // React Icons import

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    description: 'Learn the basics of Next.js and start building your first app.',
    date: '2023-05-15',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    description: 'Dive deep into Tailwind CSS and create beautiful, responsive designs.',
    date: '2023-05-20',
  },
  {
    id: 3,
    title: 'The Power of Server-Side Rendering',
    description: 'Explore the benefits of server-side rendering in modern web applications.',
    date: '2023-05-25',
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto">
        <Breadcrumb
            subtitle={"Blog"}
            content={"Welcome to Our Blog"}
        />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-lg p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-500">{post.date}</p>
            </div>
            <div className="mb-4">
              <p>{post.description}</p>
            </div>
            <div>
              <Link href={`/blog/${post.id}`} passHref>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                  Read More <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
