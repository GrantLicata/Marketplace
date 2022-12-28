import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Vehicles', href: '/categories/vehicles' },
  { name: 'Property Rentals', href: '/categories/property_rentals' },
  { name: 'Apparel', href: '/categories/apparel' },
  { name: 'Classifieds', href: '/categories/classifieds' },
  { name: 'Electronics', href: '/categories/electronics' },
  { name: 'Entertainment', href: '/categories/entertainment' },
  { name: 'Family', href: '/categories/family' },
  { name: 'Free Stuff', href: '/categories/free_stuff' },
  { name: 'Garden and Outdoor', href: '/categories/garden_and_outdoor' },
  { name: 'Hobbies', href: '/categories/hobbies' },
  { name: 'Home Goods', href: '/categories/home_goods' },
  { name: 'Home Improvement', href: '/categories/home_improvement' },
  { name: 'Pet Supplies', href: '/categories/pet_supplies' },
  { name: 'Sporting Goods', href: '/categories/sporting_goods' },
  { name: 'Toys and Games', href: '/categories/toys_and_games' },
]

const Categories = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-6'>
        {categories.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className='w-auto h-16 flex justify-center items-center p-4 bg-slate-200 border border-slate-300 text-center rounded-lg shadow-md'
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories