import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10 md:py-[6vw] text-white">

      {/* -------- Header Left -------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="Doctors Group" />
          <p>
            Simply browse through our extensive list of trusted doctors,<br className="hidden sm:block" />
            and schedule your appointment hassle-free.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-primary text-sm font-medium hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-8 mt-6 text-sm">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">1200+</span>
            <span className="text-white text-[14px] opacity-80">Happy Patients</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">200+</span>
            <span className="text-white text-[14px] opacity-80">Verified Doctors</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">99%</span>
            <span className="text-white text-[14px] opacity-80">Success Rate</span>
          </div>
        </div>
      </div>

      {/* -------- Header Right -------- */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          className="w-full md:max-w-[560px] rounded-xl  object-cover"
          src={assets.header_img}
          alt="Doctor Appointment"
        />
      </div>
    </div>
  );
};

export default Header;
