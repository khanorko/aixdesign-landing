import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Meaningful AI Transformations with Human Focus
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              AIxDesign Global AB combines advanced AI technology with design thinking to help organizations innovate and thrive in the age of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md font-medium">
                Book Consultation
              </button>
              <button className="bg-white text-primary border border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300 shadow-sm font-medium">
                Join AI Transformation Labs
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl transform rotate-3 scale-105 opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="AI and Design Thinking" 
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-800 mb-1">10+</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-800 mb-1">50+</h3>
            <p className="text-gray-600 text-sm">Global Clients</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-800 mb-1">98%</h3>
            <p className="text-gray-600 text-sm">Client Satisfaction</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-800 mb-1">200+</h3>
            <p className="text-gray-600 text-sm">AI Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 