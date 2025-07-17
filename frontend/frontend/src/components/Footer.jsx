// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

//         <div>
//           {/* <img className='mb-5 w-40' src={assets.logo} alt="" /> */}
//           <div 
//   onClick={() => navigate('/')} 
//   className="flex items-center gap-2 cursor-pointer w-44"
// >
//   <span className="text-blue-500 text-5xl font-bold">+</span>
//   <h4 className="text-blue-500 text-3xl font-bold">
//     DocBook
//   </h4>
// </div>
//           <p className='w-full md:w-2/3 text-gray-600 leading-6'>🩺 "DocBook – Your Health, One Click Away."
// 👨‍⚕️ Instantly book appointments with trusted doctors anytime.
// 📅 Smart scheduling, easy rescheduling, and zero wait times.
// 💊 Personalized dashboard for patients and doctors.
// ⚡ Fast, secure, and built with love for better healthcare.</p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>
// <div>
//   <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//   <ul className='flex flex-col gap-2 text-gray-600'>
//     <li>📞 +91 9031090292</li>
//     <li>📧 prajaptigolu07@gmail.com</li>
//     <li>
//       📸 <a href="https://www.instagram.com/golugovaskar_45/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline">Instagram</a>
//     </li>
//     <li>
//       🌐 <a href="https://my-portfolio-nine-ecru-56.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline">My Portfolio</a>
//     </li>
//   </ul>
// </div>


//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Built with 💙, bugs, and caffeine by Golu Gavaskar @ All rights reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    
    <footer className="bg-white text-gray-700 md:mx-10 px-4 sm:px-10"><hr></hr>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* Left Logo & Intro */}

        <div>
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer mb-4"
          >
            <span className="text-primary text-5xl font-bold">+</span>
            <h4 className="text-primary text-3xl font-bold">DocBook</h4>
          </div>

          <p className="text-gray-600 leading-6 text-justify md:w-4/5">
            🩺 DocBook – Your Health, One Click Away.  
            👨‍⚕️ Book trusted doctors anytime.  
            📅 Smart scheduling, zero wait time.  
            💊 Personalized experience for patients and doctors.  
            ⚡ Secure, fast, and built with ❤️ by Golu.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Delivery</li>
            <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>📞 +91 9031090292</li>
            <li>📧 prajaptigolu07@gmail.com</li>
            <li>
              📸 <a href="https://www.instagram.com/golugovaskar_45/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline">Instagram</a>
            </li>
            <li>
              🌐 <a href="https://my-portfolio-nine-ecru-56.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline">My Portfolio</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="border-t border-gray-200 pt-4 pb-6 text-center text-sm text-gray-500">
        © 2025 DocBook. Built with 💙, bugs, and caffeine by <span className="text-blue-500 font-medium">Golu Gavaskar</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
