import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-6 md:px-10 lg:px-14 pt-14 pb-8 text-gray-800">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary uppercase">
          Contact <span className="text-gray-800">Us</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm">
          We’re here to help you get the care you deserve — reach out anytime.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-8">
        
        {/* Right Image */}
        <img
          className="w-full md:max-w-[420px] rounded-lg shadow-md object-cover"
          src={assets.contact_image}
          alt="DocBook Office"
        />

        {/* Left Content */}
        <div className="flex flex-col gap-8 md:w-1/2">

          {/* Office Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">📍 Office Location</h3>
            <p className="text-gray-600 leading-relaxed">
              DocBook HQ, 802218, Rohtas, <br />
              Dinara road, Bihar, India<br />
              <span className="text-sm italic text-gray-500">
                (Near panjab Netional Bank )
              </span>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">📞 Contact Details</h3>
            <p className="text-gray-600">
              Phone: <a href="https://wa.me/qr/L6VNQA4LHI7PI1" className="hover:underline">+91 9031090292</a><br />
              Email: <a href="mailto:support@docbook.com" className="hover:underline">prajaptigolu07@gamil.com</a>
            </p>
          </div>

          {/* Support Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-2">⏰ Support Hours</h3>
            <p className="text-gray-600">
              Monday to Friday: 9:00 AM – 6:00 PM<br />
              Saturday: 10:00 AM – 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>

          {/* Careers Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">🚀 Careers at DocBook</h3>
            <p className="text-gray-600 mb-3">
              Want to be part of a fast-growing healthtech startup? Explore open roles and join us in shaping the future of healthcare.
            </p>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-6 py-2 rounded-md text-sm font-medium w-fit">
              View Open Roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
