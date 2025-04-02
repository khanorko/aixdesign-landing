import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80" 
                alt="AIxDesign Team" 
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About AIxDesign Global AB</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are a groundbreaking partner for companies seeking meaningful AI transformations. Our expertise lies in combining advanced AI technology with design thinking—always with a human focus.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our multidisciplinary team brings together expertise in AI, design, business strategy, and change management to provide holistic solutions that drive business value while keeping humans at the center.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To humanize AI integration and help organizations leverage technology for genuine positive impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  A world where AI enhances human potential, enabling individuals and organizations to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 