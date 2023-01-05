import React from 'react';
import { Link } from 'react-router-dom';
import fruit_img from './images/fruit.jpg';
import meat_img from './images/meat.jpg';
import mushrooms_img from './images/mushrooms.jpg';
import seafood_img from './images/seafood.jpg';
import vegetables_img from './images/vegetables.jpg';
import grains_img from './images/grains.jpg';
import nuts_img from './images/nuts.jpg';
import dairy_img from './images/dairy.jpg';
import eggs_img from './images/eggs.jpg';
import baked_goods_img from './images/baked-goods.jpg';
import canned_goods_img from './images/canned-goods.jpg';


// Pivoting to small community farm support
// Images to be provided on each category card eventually
const categories = [
  { name: 'Fruit', href: '/categories/fruit', image: fruit_img },
  { name: 'Vegetables', href: '/categories/vegetables', image: vegetables_img },
  { name: 'Mushrooms', href: '/categories/mushrooms', image: mushrooms_img },
  { name: 'Meat', href: '/categories/meat', image: meat_img },
  { name: 'Seafood', href: '/categories/seafood', image: seafood_img },
  { name: 'Grains', href: '/categories/grains', image: grains_img },
  { name: 'Nuts', href: '/categories/nuts', image: nuts_img },
  { name: 'Dairy', href: '/categories/dairy', image: dairy_img },
  { name: 'Eggs', href: '/categories/eggs', image: eggs_img },
  { name: 'Baked Goods', href: '/categories/baked_goods', image: baked_goods_img },
  { name: 'Canned Goods', href: '/categories/canned_goods', image: canned_goods_img },
]

// >>> TO-DO: Image sizing needs to be corrected to be consistent...

const FoodCategories = () => {
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

export default FoodCategories