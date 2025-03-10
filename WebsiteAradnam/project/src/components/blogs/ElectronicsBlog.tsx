import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, IndianRupee } from 'lucide-react';

const ElectronicsBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <IndianRupee className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Aradhnam Finance</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Smart Electronics Investment</h1>
        
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200"
          alt="Electronics Store"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Growing Your Electronics Business</h2>
          <p className="mb-6">
            The electronics retail sector in India is experiencing unprecedented growth, driven by increasing 
            consumer demand and technological advancement. Here's how you can make smart investments in your 
            electronics business:
          </p>

          <h2 className="text-2xl font-semibold mb-4">Strategic Inventory Management</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Areas to Focus On:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Popular smartphone brands and models</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Smart home devices and accessories</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Gaming consoles and accessories</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Laptops and tablets</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Financing Solutions</h2>
          <p className="mb-6">
            Aradhnam Finance offers specialized loans for electronics retailers to help manage inventory 
            and expand their business:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Inventory Financing</h3>
              <ul className="space-y-2">
                <li>Loans up to ₹5,00,000</li>
                <li>Competitive interest rates</li>
                <li>Flexible repayment terms</li>
                <li>Quick approval process</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Business Expansion</h3>
              <ul className="space-y-2">
                <li>Store renovation loans</li>
                <li>Working capital support</li>
                <li>Equipment financing</li>
                <li>Marketing support</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Market Trends and Opportunities</h2>
          <p className="mb-6">
            Understanding current market trends is crucial for success in the electronics retail business:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Growing demand for smart home devices</li>
            <li className="mb-2">Increase in online shopping presence</li>
            <li className="mb-2">Rise of mobile payment solutions</li>
            <li className="mb-2">Focus on after-sales service</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Success Story</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <blockquote className="italic">
              "With Aradhnam Finance's support, I was able to double my inventory and expand my product range. 
              The flexible repayment terms helped me manage my cash flow effectively."
            </blockquote>
            <p className="mt-2 font-semibold">- Amit Sharma, Electronics Store Owner</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ready to Grow Your Electronics Business?</h2>
          <p className="mb-6">
            Contact us today to discuss how our financing solutions can help you expand your electronics 
            business. Our team will work with you to create a customized financing plan that meets your 
            specific needs.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ElectronicsBlog;