import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  business: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, business, content, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{business}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;