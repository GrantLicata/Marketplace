import React from 'react';
import vegetable_image from './images/vegetable_market.jpg';
import Navigation from '../Navigation/Navigation';

const About = () => {
  return (
    <>
    <Navigation/>
      <div className='mx-auto max-w-7xl pr-4 sm:pr-6 lg:pr-8'>
        <div className='sm:grid sm:grid-cols-3'>
          <div>
            <img src={vegetable_image} alt="market-image" className='h-84 sr-only sm:not-sr-only'/>
          </div>
          <div className='col-span-2 ml-4 mt-2'>
            <h3 className='font-medium'>About the Marketplace</h3>
            <p className='mt-1'>Duis est est qui reprehenderit esse deserunt cupidatat reprehenderit velit aute culpa nostrud amet eu. Amet consequat adipisicing cillum non id officia enim cupidatat elit laboris. Laboris laborum qui sint cillum in laborum aliqua ut elit. Veniam exercitation sunt ex est id duis Lorem veniam Lorem do ea eiusmod eu. Esse magna duis deserunt nostrud laboris consequat est. Excepteur mollit consequat eu nulla est esse minim aute enim minim.</p>
            <p className='mt-1'>Duis est est qui reprehenderit esse deserunt cupidatat reprehenderit velit aute culpa nostrud amet eu. Amet consequat adipisicing cillum non id officia enim cupidatat elit laboris. Laboris laborum qui sint cillum in laborum aliqua ut elit. Veniam exercitation sunt ex est id duis Lorem veniam Lorem do ea eiusmod eu. Esse magna duis deserunt nostrud laboris consequat est. Excepteur mollit consequat eu nulla est esse minim aute enim minim.</p>
            <p className='mt-1'>Duis est est qui reprehenderit esse deserunt cupidatat reprehenderit velit aute culpa nostrud amet eu. Amet consequat adipisicing cillum non id officia enim cupidatat elit laboris. Laboris laborum qui sint cillum in laborum aliqua ut elit. Veniam exercitation sunt ex est id duis Lorem veniam Lorem do ea eiusmod eu. Esse magna duis deserunt nostrud laboris consequat est. Excepteur mollit consequat eu nulla est esse minim aute enim minim.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About