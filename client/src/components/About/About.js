import React from 'react';
import vegetable_image from './images/vegetable_market.jpg';

const About = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className=''>
        <img src={vegetable_image} alt="market-image" className='h-80'/>
      </div>
    </div>
  )
}

// Check this out for making the columns right:  https://tailwindcss.com/docs/columns

export default About