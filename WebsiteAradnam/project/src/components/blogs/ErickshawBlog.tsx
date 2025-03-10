import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, IndianRupee } from 'lucide-react';

const ErickshawBlog = () => {
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
        <h1 className="text-4xl font-bold mb-6">Understanding E-rickshaw Financing</h1>
        
        <img
          src="/erickshaw.jpg"
          alt="E-rickshaw Driver Success"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Why Choose E-rickshaw as a Business?</h2>
          <p className="mb-6">
            E-rickshaws have revolutionized last-mile connectivity in India, offering an eco-friendly and cost-effective 
            transportation solution. As a business opportunity, e-rickshaws present several advantages:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Low operational costs compared to traditional auto-rickshaws</li>
            <li className="mb-2">Growing demand for eco-friendly transportation</li>
            <li className="mb-2">Government support and incentives</li>
            <li className="mb-2">Stable daily income potential</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Financing Solutions</h2>
          <p className="mb-6">
            At Aradhnam Finance, we understand the unique needs of e-rickshaw operators and offer tailored financing solutions:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Features of Our E-rickshaw Loans</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Competitive interest rate of 20% per annum</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Flexible repayment terms up to 36 months</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Minimal documentation requirements</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>Quick loan approval process</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Documentation Required</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Valid ID proof (Aadhaar Card/PAN Card)</li>
            <li className="mb-2">Address proof</li>
            <li className="mb-2">Two passport-size photographs</li>
            <li className="mb-2">Bank account statements for the last 3 months</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <blockquote className="italic">
              "Thanks to Aradhnam Finance's e-rickshaw loan, I was able to start my own business. 
              The EMIs are manageable, and the team helped me throughout the process."
            </blockquote>
            <p className="mt-2 font-semibold">- Rajesh Kumar, E-rickshaw Owner</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your E-rickshaw Business?</h2>
          <p className="mb-6">
            Contact us today to learn more about our e-rickshaw financing options and take the first step 
            towards owning your business. Our team is ready to guide you through the entire process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ErickshawBlog;