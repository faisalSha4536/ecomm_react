import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'

const Product = (props) => {
  const {id, name, price, img} = props.data
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="discription">
        <p><b>{name}</b></p>
        <p><b>${price}</b></p>
      </div>
      <button className="addto_cart" onClick={()=> addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product