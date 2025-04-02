import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from organizations we've helped transform their approach to AI and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm relative">
            <div className="absolute -top-4 left-8 text-primary">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9334 24.3334H7.26669C6.80002 24.3334 6.33335 24.0667 6.13335 23.6667C5.93335 23.2667 5.93335 22.8 6.20002 22.4L13.8667 11.6C14.1334 11.2 14.6 11 15.0667 11H18.6667C19.4 11 20 11.6 20 12.3334V18.3334C20 19.0667 19.4 19.6667 18.6667 19.6667H14.0667L12.2667 22.3334H18.6667C19.4 22.3334 20 22.9334 20 23.6667V30.3334C20 31.0667 19.4 31.6667 18.6667 31.6667H12.9334C12.2 31.6667 11.6 31.0667 11.6 30.3334V25.6667C11.6 25 12.2 24.3334 12.9334 24.3334ZM32.9334 24.3334H27.2667C26.8 24.3334 26.3334 24.0667 26.1334 23.6667C25.9334 23.2667 25.9334 22.8 26.2 22.4L33.8667 11.6C34.1334 11.2 34.6 11 35.0667 11H38.6667C39.4 11 40 11.6 40 12.3334V18.3334C40 19.0667 39.4 19.6667 38.6667 19.6667H34.0667L32.2667 22.3334H38.6667C39.4 22.3334 40 22.9334 40 23.6667V30.3334C40 31.0667 39.4 31.6667 38.6667 31.6667H32.9334C32.2 31.6667 31.6 31.0667 31.6 30.3334V25.6667C31.6 25 32.2 24.3334 32.9334 24.3334Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 italic mb-6">
                "AIxDesign helped us navigate the complex landscape of AI opportunities. Their human-centered approach ensured that our AI initiatives aligned with our organizational values and genuinely improved our customer experience."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">CIO, NordicTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm relative">
            <div className="absolute -top-4 left-8 text-primary">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9334 24.3334H7.26669C6.80002 24.3334 6.33335 24.0667 6.13335 23.6667C5.93335 23.2667 5.93335 22.8 6.20002 22.4L13.8667 11.6C14.1334 11.2 14.6 11 15.0667 11H18.6667C19.4 11 20 11.6 20 12.3334V18.3334C20 19.0667 19.4 19.6667 18.6667 19.6667H14.0667L12.2667 22.3334H18.6667C19.4 22.3334 20 22.9334 20 23.6667V30.3334C20 31.0667 19.4 31.6667 18.6667 31.6667H12.9334C12.2 31.6667 11.6 31.0667 11.6 30.3334V25.6667C11.6 25 12.2 24.3334 12.9334 24.3334ZM32.9334 24.3334H27.2667C26.8 24.3334 26.3334 24.0667 26.1334 23.6667C25.9334 23.2667 25.9334 22.8 26.2 22.4L33.8667 11.6C34.1334 11.2 34.6 11 35.0667 11H38.6667C39.4 11 40 11.6 40 12.3334V18.3334C40 19.0667 39.4 19.6667 38.6667 19.6667H34.0667L32.2667 22.3334H38.6667C39.4 22.3334 40 22.9334 40 23.6667V30.3334C40 31.0667 39.4 31.6667 38.6667 31.6667H32.9334C32.2 31.6667 31.6 31.0667 31.6 30.3334V25.6667C31.6 25 32.2 24.3334 32.9334 24.3334Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 italic mb-6">
                "The AI Transformation Labs facilitated by AIxDesign were transformative for our executive team. We gained clarity on our AI strategy and built internal alignment that accelerated our digital transformation efforts."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Marcus Chen" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Marcus Chen</h4>
                  <p className="text-sm text-gray-600">CEO, GlobalFin Group</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm relative">
            <div className="absolute -top-4 left-8 text-primary">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9334 24.3334H7.26669C6.80002 24.3334 6.33335 24.0667 6.13335 23.6667C5.93335 23.2667 5.93335 22.8 6.20002 22.4L13.8667 11.6C14.1334 11.2 14.6 11 15.0667 11H18.6667C19.4 11 20 11.6 20 12.3334V18.3334C20 19.0667 19.4 19.6667 18.6667 19.6667H14.0667L12.2667 22.3334H18.6667C19.4 22.3334 20 22.9334 20 23.6667V30.3334C20 31.0667 19.4 31.6667 18.6667 31.6667H12.9334C12.2 31.6667 11.6 31.0667 11.6 30.3334V25.6667C11.6 25 12.2 24.3334 12.9334 24.3334ZM32.9334 24.3334H27.2667C26.8 24.3334 26.3334 24.0667 26.1334 23.6667C25.9334 23.2667 25.9334 22.8 26.2 22.4L33.8667 11.6C34.1334 11.2 34.6 11 35.0667 11H38.6667C39.4 11 40 11.6 40 12.3334V18.3334C40 19.0667 39.4 19.6667 38.6667 19.6667H34.0667L32.2667 22.3334H38.6667C39.4 22.3334 40 22.9334 40 23.6667V30.3334C40 31.0667 39.4 31.6667 38.6667 31.6667H32.9334C32.2 31.6667 31.6 31.0667 31.6 30.3334V25.6667C31.6 25 32.2 24.3334 32.9334 24.3334Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 italic mb-6">
                "Working with AIxDesign completely changed our perspective on AI. Their methodical approach to identifying opportunities and creating an implementation roadmap provided us with the confidence to move forward with our AI initiatives."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80" 
                  alt="Emma Lindberg" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emma Lindberg</h4>
                  <p className="text-sm text-gray-600">Head of Innovation, EcoSmart Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 font-medium">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 