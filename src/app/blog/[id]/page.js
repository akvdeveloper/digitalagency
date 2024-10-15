
import { notFound } from 'next/navigation'; 
import Link from 'next/link'; 
import { FaArrowLeft } from 'react-icons/fa'; 

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we\'ll cover the basics of setting up a Next.js project and creating your first pages.',
    date: '2023-05-15',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    content: 'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this post, we\'ll explore advanced techniques for using Tailwind CSS, including creating custom configurations and optimizing for production.',
    date: '2023-05-20',
  },
  {
    id: 3,
    title: 'The Power of Server-Side Rendering',
    content: 'Server-side rendering (SSR) is a technique that allows web applications to render content on the server before sending it to the client. In this post, we\'ll discuss the benefits of SSR, including improved performance and SEO, and how to implement it in your Next.js applications.',
    date: '2023-05-25',
  },
];

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }) {
  // Find the post based on the dynamic route param (id)
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  // If the post is not found, trigger Next.js notFound function
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog post title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      {/* Blog post date */}
      <p className="text-gray-500 mb-8">{post.date}</p>
      
      {/* Blog post content */}
      <div className="prose lg:prose-xl mb-8">
        <p>{post.content}</p>
      </div>
      
      {/* Back to Home button with an arrow icon */}
      <Link href="/" passHref>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Home
        </button>
      </Link>
    </div>
  );
}
