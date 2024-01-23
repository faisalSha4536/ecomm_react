import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const {id, name, price, type, img} = props.data
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
     <Link to={`/product/${type}/${id}`}> <img src={img} alt="" /></Link>
      <div className="discription">
        <h3><b>{name}</b></h3>
        <p><b>${price}</b></p>
      </div>
      <button className="addto_cart" onClick={()=> addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product