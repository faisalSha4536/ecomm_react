import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export function CartItem(props) {
    const { id, name, price, img } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, totalAmount } = useContext(ShopContext)

    return (
        <div className='cart_item'>
            <img src={img} alt="" />
            <div className="discripition">
                <h2>{name}</h2>
                <p>${price}</p>
                <div className="count_handler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>

    )
}

