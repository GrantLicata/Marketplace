import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/market-100.png'

const Registration = () => {
  return (
    <div className='flex min-h-full items-center justify-center py-12 sm:px-6 lg:px-8 bg-'>
        <form className='px-6 rounded-lg py-4 w-96'>
        {/* Note: Consider playing with grid for sizing of the wrapper */}
            <div>
                <img
                  className="mx-auto h-12 w-auto"
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Register Your Account
                </h2>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
                Already a user?{' '}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
                </Link>
            </p>
            {/* First Name */}
            <div className='mt-6 mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    htmlFor="first-name">
                    First Name
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Last Name */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    htmlFor="first-name">
                    Last Name
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="text" 
                        name="first-name" 
                        id="first-name" 
                        className="block w-full rounded-md border-gray-300 pl-2 pr-42 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            

            {/* Email */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    htmlFor="email">
                    Email
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="block w-full rounded-md border-gray-300 pl-2 pr-42 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Password */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    htmlFor="password">
                    Password
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="block w-full rounded-md border-gray-300 pl-2 pr-42 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Password */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    htmlFor="confirm-password">
                    Confirm Password
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="password" 
                        name="confirm-password" 
                        id="confirm-password" 
                        className="block w-full rounded-md border-gray-300 pl-2 pr-42 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            
        </form>
    </div>
  )
}

export default Registration