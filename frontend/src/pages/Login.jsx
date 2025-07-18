import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          toast.success('Account created successfully!')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          toast.success('Logged in successfully!')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 bg-white shadow-2xl rounded-2xl px-10 py-8 min-w-[340px] sm:min-w-[400px] border border-gray-100"
      >
        <div className="mb-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-500 text-base">
            {state === 'Sign Up'
              ? 'Sign up to book your appointment'
              : 'Log in to continue'}
          </p>
        </div>
        {state === 'Sign Up' && (
          <div className="w-full">
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              required
              placeholder="Enter your full name"
            />
          </div>
        )}
        <div className="w-full">
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700 mb-1 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 rounded-lg text-base font-semibold shadow-md mt-2 flex items-center justify-center ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : null}
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        <div className="text-center text-gray-600 mt-2">
          {state === 'Sign Up' ? (
            <span>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setState('Login')}
                className="text-blue-600 hover:underline font-medium"
              >
                Login here
              </button>
            </span>
          ) : (
            <span>
              New here?{' '}
              <button
                type="button"
                onClick={() => setState('Sign Up')}
                className="text-blue-600 hover:underline font-medium"
              >
                Create an account
              </button>
            </span>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login