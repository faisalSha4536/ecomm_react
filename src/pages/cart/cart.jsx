import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from '../../context/ShopContext'
import { CartItem } from './cartItem'
import './cart.css'
import {useNavigate} from 'react-router-dom'
import { storeData } from '../../assets/assets/data/dummyData'

const Cart = () => {
  const { cartItems, totalAmount} = useContext(ShopContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className='item'>
        {storeData.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data = {product}/>
          }
        })}
      </div>
      {totalAmount() > 0 ? <p> <b>Total : ${totalAmount()}</b></p> : <h1>Your Cart is Empty</h1>}
      <div className="last_button">
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart