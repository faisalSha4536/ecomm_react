import React from 'react'
import {PRODUCTS} from '../../products'
import Product from './Product'
import './shop.css'

const shop = () => {
  return (
    <div className='shop'>
        <div className="shop_title">
            <h1>Faisal Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => <Product data = {product}/>)}
        </div>
    </div>
  )
}

export default shop
