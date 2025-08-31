// components/landing/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Book & Pay Online",
      description: "Fill out our simple form with delivery details and make secure payment",
      icon: "📦"
    },
    {
      number: 2,
      title: "We Pick Up Your Item",
      description: "Our verified courier will collect your package from your location",
      icon: "🚗"
    },
    {
      number: 3,
      title: "Fast Inter-City Delivery",
      description: "Your package is safely transported to the destination city",
      icon: "✈️"
    },
    {
      number: 4,
      title: "Receiver Gets Notification",
      description: "The recipient is notified and the package is delivered",
      icon: "📱"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sending packages from one city to another city has never been easier. Our process is simple, secure, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl mb-4">
                {step.icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;