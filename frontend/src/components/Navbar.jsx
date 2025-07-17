// import { useContext, useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { AppContext } from '../context/AppContext'



// const Navbar = () => {

//   const navigate = useNavigate()

//   const [showMenu, setShowMenu] = useState(false)
//   const { token, setToken, userData } = useContext(AppContext)

//   const logout = () => {
//     localStorage.removeItem('token')
//     setToken(false)
//     navigate('/login')
//   }

//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
// <div 
//   onClick={() => navigate('/')} 
//   className="flex items-center gap-2 cursor-pointer w-44"
// >
//   <span className="text-primary text-5xl font-bold">+</span>
//   <h4 className="text-primary text-3xl font-bold">
//     DocBook
//   </h4>
// </div>

//       <ul className='md:flex items-start gap-5 font-medium hidden'>
//         <NavLink to='/' >
//           <li className='py-1'>HOME</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/doctors' >
//           <li className='py-1'>ALL DOCTORS</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/about' >
//           <li className='py-1'>ABOUT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/contact' >
//           <li className='py-1'>CONTACT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>

//         <div className="flex items-center">
//   <NavLink to="https://docbook-admin-67ok.onrender.com">
//     <li className="w-12 h-12 flex justify-center items-center rounded-half border-2 border-black text-sm hover:bg-gray-100 transition duration-200 ml-4">
//       Admin pannel
//     </li>
//   </NavLink>
// </div>

//       </ul>

//       <div className='flex items-center gap-4 '>
//         {
//           token && userData
//             ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={userData.image} alt="" />
//               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
//                   <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                   <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>
//             : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
//         }
//         <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

//         {/* ---- Mobile Menu ---- */}
//         <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//           <div className='flex items-center justify-between px-5 py-6'>
//             <img src={assets.logo} className='w-36' alt="" />
//             <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
//           </div>
//           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
//             <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar





import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  const linkClass = ({ isActive }) =>
    `py-1 transition-colors duration-200 ${
      isActive ? 'text-primary font-semibold' : 'text-black'
    }`

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD] px-4 md:px-10'>
      {/* Left Logo */}
      <div
        onClick={() => navigate('/')}
        className='flex items-center gap-2 cursor-pointer w-44'
      >
        <span className='text-primary text-5xl font-bold'>+</span>
        <h4 className='text-primary text-3xl font-bold'>DocBook</h4>
      </div>

      {/* Desktop Links */}
      <ul className='md:flex items-center gap-5 font-medium hidden'>
        <li><NavLink to='/' className={linkClass}>HOME</NavLink></li>
        <li><NavLink to='/doctors' className={linkClass}>ALL DOCTORS</NavLink></li>
        <li><NavLink to='/about' className={linkClass}>ABOUT</NavLink></li>
        <li><NavLink to='/contact' className={linkClass}>CONTACT</NavLink></li>
        <li>
          <a
  href='https://docbook-admin-67ok.onrender.com'
  target='_blank'
  rel='noopener noreferrer'
  className='px-3 py-1.5 border-2 border-black rounded-full text-xs transition duration-200 ml-4
             hover:bg-primary hover:text-white hover:border-transparent'
>
  Admin Panel
</a>


        </li>
      </ul>

      {/* User Section */}
      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img
              className='w-8 h-8 rounded-full object-cover'
              src={userData.image}
              alt='User Profile'
            />
            <img className='w-2.5' src={assets.dropdown_icon} alt='Dropdown Icon' />
            <div className='absolute top-12 right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-gray-50 rounded shadow-md flex flex-col gap-4 p-4'>
                <p
                  onClick={() => navigate('/my-profile')}
                  className='hover:text-black cursor-pointer'
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('/my-appointments')}
                  className='hover:text-black cursor-pointer'
                >
                  My Appointments
                </p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}

        {/* Hamburger Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden cursor-pointer'
          src={assets.menu_icon}
          alt='Menu'
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-30 bg-white transition-all duration-300 ease-in-out ${
          showMenu ? 'w-full h-full px-6 py-6' : 'w-0 h-0 overflow-hidden'
        }`}
      >
        <div className='flex justify-between items-center mb-6'>
          <img src={assets.logo} className='w-36' alt='DocBook Logo' />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className='w-7 cursor-pointer'
            alt='Close'
          />
        </div>
        <ul className='flex flex-col gap-4 text-lg font-medium'>
          <NavLink to='/' onClick={() => setShowMenu(false)} className={linkClass}>
            HOME
          </NavLink>
          <NavLink to='/doctors' onClick={() => setShowMenu(false)} className={linkClass}>
            ALL DOCTORS
          </NavLink>
          <NavLink to='/about' onClick={() => setShowMenu(false)} className={linkClass}>
            ABOUT
          </NavLink>
          <NavLink to='/contact' onClick={() => setShowMenu(false)} className={linkClass}>
            CONTACT
          </NavLink>
          <a
  href='https://docbook-admin-67ok.onrender.com'
  target='_blank'
  rel='noopener noreferrer'
  className='px-3 py-1.5 border-2 border-black rounded-full text-xs hover:bg-primary hover:text-white transition duration-200 ml-4'
>
  Admin Panel
</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
