import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { storeData } from '../../assets/assets/data/dummyData'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'


const SingleProduct = () => {
  const { id, type } = useParams()
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]

  return (
    <>
      {storeData.map((product) => {
        return (
          <>
            {product.id === id && (
              <div className="single_product">
                <div className="left">
                  <img src={product.img} alt="" />
                </div>
                <div className="right">
                  <div className="upper_text">
                    <h5>{product.type}_</h5>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                  </div>
                  <div className="bottom">
                    <p>{product.text}</p>
                    <button className="addto_cart" onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>
                  </div>
                </div>
              </div>

            )}

          </>


        )
      })}
      <div className="suggest">
        <div className="title">
          <h3>Suggested Items</h3>

        </div>
        <hr />
        <div className="type_products">
        {
          storeData.map((product) => {
            return(
              <>
              {product.type === type && (
                 <div className="type_product">
                 <Link to={`/product/${product.type}/${product.id}`}><img src={product.img} alt= {product.name} /></Link> 
                 <h1>{product.name}</h1>
                 <h3>${product.price}</h3>
                 </div>
              )}
              </>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default SingleProduct