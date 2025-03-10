import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  path: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, path }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button 
          onClick={() => navigate(path)}
          className="mt-4 text-blue-600 font-semibold hover:text-blue-800"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;