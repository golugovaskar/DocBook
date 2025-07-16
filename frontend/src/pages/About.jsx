import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 py-10 text-gray-700">
      
      {/* ABOUT US Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">About <span className="text-gray-800">DocBook</span></h2>
        <p className="mt-2 text-sm text-gray-500">Simplifying your healthcare journey with smart technology.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <img className="w-full md:max-w-[300px] rounded-lg shadow-md" src={assets.appointment_img} alt="About DocBook" />
        
        <div className="flex flex-col gap-6 text-[15px] leading-relaxed md:w-3/5">
          <p>
            Welcome to <span className="font-semibold text-primary">DocBook</span>, your trusted partner in managing healthcare needs easily and efficiently. At DocBook, we know how stressful it can be to schedule doctor appointments and manage medical records — we’re here to simplify it.
          </p>
          <p>
            Our platform is built with care and precision to provide a seamless, stress-free healthcare experience. Whether you're scheduling your first visit or managing ongoing care, <span className="font-semibold text-primary">DocBook</span> empowers you every step of the way.
          </p>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Our Vision</h3>
            <p>
              We aim to bridge the gap between patients and healthcare providers by using modern technology to make medical care more accessible, reliable, and personalized for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="mt-20 mb-10 text-center">
        <h2 className="text-2xl font-bold text-primary">Why <span className="text-gray-800">Choose Us</span></h2>
        <p className="mt-2 text-sm text-gray-500">What makes DocBook the smarter choice for your health.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-gray-600">
        {/* Card 1 */}
        <div className="border rounded-lg p-8 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <h4 className="font-semibold mb-3 text-lg">Efficiency</h4>
          <p>Streamlined appointment scheduling that fits your busy life with just a few clicks.</p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-8 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <h4 className="font-semibold mb-3 text-lg">Convenience</h4>
          <p>Instant access to a wide network of verified and trusted healthcare professionals.</p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-8 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <h4 className="font-semibold mb-3 text-lg">Personalization</h4>
          <p>Smart recommendations and reminders that help you take control of your health journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
