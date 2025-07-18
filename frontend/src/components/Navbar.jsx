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
        <li><NavLink to='/' className={linkClass}>HOME </NavLink></li>
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
          <div
        onClick={() => navigate('/')}
        className='flex items-center gap-2 cursor-pointer w-44'
      >
        <span className='text-primary text-5xl font-bold'>+</span>
        <h2 className='text-primary text-2xl font-bold'>DocBook</h4>
      </div>
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
        </ul>
      </div>
    </div>
  )
}

export default Navbar
