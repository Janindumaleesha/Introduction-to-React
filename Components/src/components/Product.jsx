import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <>
        <ul>
            <li><b>Product Title:</b> {props.title}</li>
            <li><b>Product Description:</b> {props.description}</li>
            <li><b>Product Price:</b> {props.price}</li>
            <li><b>Product Category:</b> {props.category}</li>
            <li><b>Product Rating:</b> {props.rating.rate}</li>
        </ul>
    </>
  )
}

export default Product