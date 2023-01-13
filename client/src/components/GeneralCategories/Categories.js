import React from 'react';
import { Link } from 'react-router-dom';
import fruit_img from './images/fruit.jpg';


// Pivoting to small community farm support
// Images to be provided on each category card eventually
const categories = [
  { name: 'Vehicles', href: '/categories/fruit', image: fruit_img },
  { name: 'Property', href: '/categories/fruit', image: fruit_img },
  { name: 'Apparel', href: '/categories/fruit', image: fruit_img },
  { name: 'Classifieds', href: '/categories/fruit', image: fruit_img },
  { name: 'Electronics', href: '/categories/fruit', image: fruit_img },
  { name: 'Family', href: '/categories/fruit', image: fruit_img },
  { name: 'Free Stuff', href: '/categories/fruit', image: fruit_img },
  { name: 'Garden & Outdoor', href: '/categories/fruit', image: fruit_img },
  { name: 'Home Goods', href: '/categories/fruit', image: fruit_img },
  { name: 'Musical Instruments', href: '/categories/fruit', image: fruit_img },
  { name: 'Office Supplies', href: '/categories/fruit', image: fruit_img },
  { name: 'Pet Supplies', href: '/categories/fruit', image: fruit_img },
  { name: 'Sporting Goods', href: '/categories/fruit', image: fruit_img },
  { name: 'Toys & Games', href: '/categories/fruit', image: fruit_img },
]

// >>> TO-DO: Image sizing needs to be corrected to be consistent...

const GeneralCategories = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-6'>
        {categories.map((item) => (
          <Link
            key={item.name}
            to={item.href}
          >
            <div className='w-auto'>
              <img 
                src={item.image} 
                alt='Category image'
                className=' border border-slate-200 rounded-lg shadow-md overflow-hidden'/>
              <h3 className='text-medium text-center font-normal text-slate-700'>{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GeneralCategories