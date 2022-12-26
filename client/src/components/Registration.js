import React from 'react'

const Registration = () => {
  return (
    <div className='flex min-h-full items-center justify-center py-12 sm:px-6 lg:px-8 bg-'>
        <form className='px-6 rounded-lg py-4 bg-slate-100'>
            <div className='mb-6'>
                <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Register Your Account
                </h2>
            </div>
            {/* First Name */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    for="first-name">
                    First Name
                </label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        class="block w-full rounded-md border-gray-300 pl-2 pr-28 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Last Name */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    for="first-name">
                    Last Name
                </label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="text" 
                        name="first-name" 
                        id="first-name" 
                        class="block w-full rounded-md border-gray-300 pl-2 pr-28 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Email */}
            <div className='mb-4'>
                <label 
                    className='block text-sm font-medium text-gray-700' 
                    for="email">
                    Email
                </label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        class="block w-full rounded-md border-gray-300 pl-2 pr-28 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </form>
    </div>
  )
}

export default Registration