import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import logo from './images/market-100.png'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

const Login = () => {
    return (
        <>
          <Navigation/>
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <img
                  className="mx-auto h-12 w-auto"
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Not a user?{' '}
                  <Link to="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Register
                  </Link>
                </p>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div className='mb-4'>
                    {/* <label 
                        className='text-sm font-medium text-gray-700' 
                        htmlFor="email-address">
                        Email Address
                    </label> */}
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <input 
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Email address"
                            required
                            className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-sm"
                        />
                    </div>
                  </div>
                  <div className='mb-4'>
                    {/* <label 
                        className='text-sm font-medium text-gray-700' 
                        htmlFor="password">
                        Password
                    </label> */}
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Password"
                            className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-sm"
                        />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
    
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
    )
}

export default Login

// The documentation for this component mentioned that changes are needed to the tailwind configuration file. However, when changes are applied they cause a major break. Without the config changes, everything seems to be running smoothly.