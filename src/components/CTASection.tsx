import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization with AI?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
            Join our AI Transformation Labs or book a consultation to explore how AIxDesign Global AB can help your organization leverage AI with a human-centered approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md font-medium text-lg">
              Book a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition duration-300 font-medium text-lg">
              Join AI Transformation Labs
            </button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-white/80 mb-6">Want to learn more before getting started?</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#" className="flex items-center text-white hover:text-blue-100 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
                Download Our Whitepaper
              </a>
              <a href="#" className="flex items-center text-white hover:text-blue-100 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch Case Study Videos
              </a>
              <a href="#" className="flex items-center text-white hover:text-blue-100 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                </svg>
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 