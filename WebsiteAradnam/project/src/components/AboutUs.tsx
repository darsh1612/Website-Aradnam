import React from 'react';
import { Target, Rocket, Users, Building2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const founders = [
    {
      name: "Amit Gupta",
      title: "Co-Founder",
      description: "Entrepreneur with 25+ years of experience. Runs a ₹100+ crore distribution chain in Delhi NCR. Expert in finance, consumer financing, and financial planning. Worked with brands like Samsung, Philips, Godrej, Panasonic, Oppo, LG, Tecno and Nokia. Promoter of M/s Omenta Pharma with strong presence in the pharmaceutical industry. Active in various NGO working committees.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sonu Garg",
      title: "Co-Founder",
      description: "Sales and marketing expert with over 20 years of experience. Started with Vodafone India's distribution network in Delhi NCR. Commerce graduate with knowledge in working capital management and financial distribution. Worked with companies like Tata Sky, Okaya Batteries, Godrej Electronics, Tecno, Oppo and Nokia. Expert in distribution of products across retail chains in Delhi NCR.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Raghav Garg",
      title: "Co-Founder",
      description: "Member of Bar Council of Delhi, practicing lawyer in IPR & Trademark with a firm in New Delhi. Commerce graduate and CA (I) from ICAI. Trained at M/s Mohinder Puri & Co. with expertise in banking & Auditing. Worked with large businesses like Nike, Reebok, Adidas, Esaar India Ltd and Puma. Seasoned investor with a focus on start-ups and sustainable business solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-xl">
                Ensure access to financial services for underserved population, particularly in
                rural and semi-urban areas through innovative and accessible financial products.
              </p>
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <Rocket className="h-8 w-8" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl">
                Access of Capital for every household to elevate their lifestyle
                through various Fintech Solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workspace Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Building2 className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Our Workspace</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Office Space"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">Where Innovation Meets Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Our modern workspace in the heart of Delhi NCR is more than just an office - it's a hub of innovation 
                and collaboration. Here, our diverse team of financial experts, technology enthusiasts, and customer 
                service professionals work together to revolutionize financial accessibility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in creating an environment that inspires creativity and fosters growth. Our open-plan office 
                encourages communication and collaboration, while dedicated meeting spaces facilitate focused discussions 
                and strategic planning.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">Join Our Team</h4>
                <p className="text-gray-700">
                  We're always looking for passionate individuals who share our vision of financial inclusion and 
                  technological innovation. Join us in our mission to transform lives through accessible financial solutions.
                </p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  View Career Opportunities
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Our Founders</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{founder.title}</p>
                  <p className="text-gray-600">{founder.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;