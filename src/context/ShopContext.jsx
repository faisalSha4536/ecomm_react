import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'
import { storeData } from '../assets/assets/data/dummyData';

export const ShopContext = createContext(null)

const getDefualtCart = () => {
  let cart = {};
  for(let i = 1; i < storeData.length + 1; i++){
    cart [i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefualtCart( ))

  const totalAmount = () => {
    let total = 0
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = storeData.find((product) => product.id === item)
       
        total += cartItems[item] * itemInfo.price
      }
    }
    return total
  }

  const addToCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
  }

  const updateCartItemCount = (newCount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newCount}))
  }



  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, totalAmount}

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

