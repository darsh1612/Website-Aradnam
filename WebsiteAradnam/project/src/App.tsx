import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { IndianRupee, Phone, MessageSquare, Calculator, Users, Truck, ChevronRight, Star } from 'lucide-react';
import LoanCalculator from './components/LoanCalculator';
import TestimonialCard from './components/TestimonialCard';
import BlogCard from './components/BlogCard';
import WhatsAppForm from './components/WhatsAppForm';
import ErickshawBlog from './components/blogs/ErickshawBlog';
import ElectronicsBlog from './components/blogs/ElectronicsBlog';
import SuccessStoryAnimation from './components/SuccessStoryAnimation';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';

function App() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Electronics Store Owner",
      content: "Thanks to Aradhnam Finance, I was able to expand my electronics inventory. The loan process was quick and simple.",
      rating: 5
    },
    {
      name: "Amit Singh",
      business: "E-rickshaw Driver",
      content: "Getting an e-rickshaw loan was hassle-free. The team guided me through every step.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "Understanding E-rickshaw Financing",
      excerpt: "Learn about the benefits of investing in an e-rickshaw and how our loans can help.",
      image: "/erickshaw.jpg",
      path: "/blog/erickshaw-financing"
    },
    {
      title: "Smart Electronics Investment",
      excerpt: "Tips for electronics store owners on managing inventory and growth.",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=400",
      path: "/blog/electronics-investment"
    }
  ];

  const HomePage = () => {
    const navigate = useNavigate();
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <IndianRupee className="h-8 w-8" />
                <span className="text-2xl font-bold">Aradhnam Finance</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/about" className="hover:text-blue-200">About</Link>
                <a href="#services" className="hover:text-blue-200">Services</a>
                <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
                <a href="#contact" className="hover:text-blue-200">Contact</a>
              </div>
            </div>
          </nav>
          
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Empower Your Business Growth
                </h1>
                <p className="text-xl mb-8">
                  Quick and hassle-free loans for electronic gadgets and e-rickshaws
                </p>
                <WhatsAppForm />
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" 
                  alt="Business Growth"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Loan Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">E-Rickshaw Loans</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Start your own business with our affordable e-rickshaw financing options.
                  Flexible interest rates from 10-20% with flexible repayment terms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Minimal documentation</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Electronic Gadget Loans</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expand your electronics business with our gadget financing solutions.
                  Competitive interest rates and flexible terms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Partner with leading dealers</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Easy repayment options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Animation Section */}
        <SuccessStoryAnimation />

        {/* Loan Calculator Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Calculate Your EMI</h2>
            <LoanCalculator />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Financial Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+91 9310519082</span>
                  </p>
                  <p>
                    Have questions? Our team is here to help you with your loan requirements.
                  </p>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <IndianRupee className="h-6 w-6" />
                <span className="text-xl font-bold">Aradhnam Finance</span>
              </div>
              <div className="text-sm">
                © 2024 Aradhnam Finance. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog/erickshaw-financing" element={<ErickshawBlog />} />
      <Route path="/blog/electronics-investment" element={<ElectronicsBlog />} />
    </Routes>
  );
}

export default App;