import React from 'react'
import Navigation from './Navigation/Navigation'

const ProductDetails = (product) => {
  return (
    <>
      <Navigation/>
      <div>
        <img src={product.image}/>
        <h2>{product.name}</h2>
        <p>{product.details}</p>
        <p>{product.price}</p>
      </div>
    </>
  )
}

export default ProductDetails