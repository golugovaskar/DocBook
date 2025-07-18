import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10'>

            {/* --------- Left Content --------- */}
            <div className='md:w-1/2 flex flex-col justify-center gap-6'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </p>

                <div className='flex items-center gap-4 text-white text-sm font-light'>
                    <img className='w-20 md:w-28' src={assets.group_profiles} alt="Group Profiles" />
                    <p>
                        Simply browse through our extensive list of trusted doctors,<br className='hidden md:block' />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a
                    href='#speciality'
                    className='flex items-center gap-2 bg-white px-6 py-3 rounded-full text-[#595959] text-sm w-max hover:scale-105 transition-all duration-300'
                >
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow Icon" />
                </a>

                {/* Stats */}
                <div className='flex flex-wrap gap-6 mt-4 text-sm'>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-white'>1200+</span>
                        <span className='text-white text-[14px] opacity-80'>Happy Patients</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-white'>200+</span>
                        <span className='text-white text-[14px] opacity-80'>Verified Doctors</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-white'>99%</span>
                        <span className='text-white text-[14px] opacity-80'>Success Rate</span>
                    </div>
                </div>
            </div>

            {/* --------- Right Image --------- */}
            <div className='md:w-1/2 flex justify-center'>
                <img
                    className='max-w-[600px] w-full h-auto rounded-lg'
                    src={assets.header_img}
                    alt="Doctor"
                />
            </div>

        </div>
    )
}

export default Header
