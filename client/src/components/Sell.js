import React, { useState, useEffect } from 'react'
import Navigation from './Navigation/Navigation';

const Sell = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <Navigation/>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col'>
        <div className="mt-3 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Product Profile</h3>
          <p className="mt-1 text-sm text-gray-600">Enter information for the product you would like to sell with us.</p>
        </div>

        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input type="text" className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-sm mt-1" placeholder='Enter your products name'/>
        </div>

        <div className='mt-4'>
          <label for="description" className="block text-sm font-medium text-gray-700">Description</label>
          <div className="mt-1">
            <textarea id="about" 
            name="about" 
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter a brief description of your product"/>
          </div>
        </div>

        {/* <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Price
          </label>
          <input type="text" className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-sm mt-1" placeholder='$0.00'/>
        </div> */}

        <div className='mt-4 w-max'>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="0.00"
            />
          </div>
        </div>

        { !selectedImage ?
          <div className='mt-4'>
            <label className="block text-sm font-medium text-gray-700">Cover photo</label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a Photo</span>
                    <input 
                      type="file"
                      id="file-upload" 
                      name="file-upload" 
                      onChange={(e) => setSelectedImage(e.target.files[0])}
                      className="sr-only" 
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>:
          null
        }

        <div className='mt-4'>
          {imageUrl && selectedImage && (
                <div>
                  <div className='block text-sm font-medium text-gray-700 mb-1'>Image Preview</div>
                  <img 
                    src={imageUrl} 
                    alt={selectedImage.name} 
                    height="100px" 
                    className='rounded-lg max-h-56 w-auto'
                  />
                </div>
              )}
        </div>

        <div className='mt-4'>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
            Publish
          </button>
        </div>

      </div>
    </>
  )
}

export default Sell