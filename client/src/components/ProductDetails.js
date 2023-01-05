import React from 'react'

const ProductDetails = (product) => {
  return (
    <div>
      <img src={product.image}/>
      <h2>{product.name}</h2>
      <p>{product.details}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetails