import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'

const Product = (props) => {
  const {id, productName, price, productImg} = props.data
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImg} alt="" />
      <div className="discription">
        <p><b>{productName}</b></p>
        <p><b>${price}</b></p>
      </div>
      <button className="addto_cart" onClick={()=> addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product