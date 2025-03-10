import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, TrendingUp, Calendar, Home } from 'lucide-react';

const SuccessStoryAnimation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const steps = [
    {
      icon: <IndianRupee className="h-8 w-8 text-blue-600" />,
      title: "Loan Approval",
      description: "Got ₹1,50,000 E-rickshaw loan"
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "12 Months EMI",
      description: "Paid ₹14,500 monthly EMI"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Daily Earnings",
      description: "Earning ₹1,200 per day"
    },
    {
      icon: <Home className="h-8 w-8 text-red-600" />,
      title: "Better Life",
      description: "Supporting family comfortably"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Journey: Rajesh's Story</h2>
        
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-blue-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <blockquote className="text-lg text-center italic text-gray-700">
            "Thanks to Aradhnam Finance, I was able to start my own e-rickshaw business. 
            After completing my EMIs, I'm now earning a stable income and providing a better life for my family."
            <footer className="mt-4 font-semibold">- Rajesh Kumar, E-rickshaw Owner</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoryAnimation;