import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import { storeData } from '../../assets/assets/data/dummyData'
import Product from './Product'
import './shop.css'
import { Link } from 'react-router-dom'

const shop = () => {
  const uniqueType = [...new Set(storeData.map((product)=>product.type))]
  return (
    <div className='shop'>
      <div className="shop_title">
        <h1>Faisal Shop</h1>
        </div>

        <div className='types'>
        {
          uniqueType.map((product) => {
            return (
              <div key={product} className='btns'>
                <Link to={`/category/${product}`} className='addto_cart'>{product}</Link>
              </div>
            )
          })
        }
          </div>
       
       <div className="products" >
        {storeData.map((product) => <Product data={product} />)}


        </div>
    </div>
  )
}

export default shop
