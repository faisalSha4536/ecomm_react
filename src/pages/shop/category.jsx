import React, { useContext, useEffect, useState } from 'react'
import { storeData } from '../../assets/assets/data/dummyData'
import { ShopContext } from '../../context/ShopContext'
import Product from './Product'
import { Link, useParams } from 'react-router-dom'
import './shop.css'


const Category = () => {
  const { addToCart, cartItems } = useContext(ShopContext)
  const [category, setCategory] = useState([])
  const uniqueType = [...new Set(storeData.map((product) => product.type))]
  const { type } = useParams()
  // const { id } = useParams()

  useEffect(() => {
    const fetchCategory = storeData.map((pro) => pro.type)
    setCategory(fetchCategory)
  }, [])

  return (
    <>
    <div className="cat_title">
      <h1>{type}</h1>
    </div>

      <div className='products'>
        {
          storeData.filter((product) => (product.type === type)).map((product, index) => {
            const cartItemsAmount = cartItems[product.id]
            return (
              <div key={index} className='product'>
               <Link to={`/product/${type}/${product.id}`}><img src={product.img} alt="" /></Link> 
                <div className="discription">
                  <p><b>{product.name}</b></p>
                  <p><b>${product.price}</b></p>
                </div>
                <button className="addto_cart" onClick={() => addToCart(product.id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>

              </div>
            )

          }
          )
        }
      </div>
    </>
  )
}

export default Category