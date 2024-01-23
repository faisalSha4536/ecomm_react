import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import { storeData } from '../../assets/assets/data/dummyData'
import Product from './Product'
import { FaSearch } from "react-icons/fa";
import './shop.css'
import { Link } from 'react-router-dom'
import '../../components/Searchbar/Searchbar.css'

const Shop = () => {
  const [searchInput, setSearchInput] = useState('')

  const filteredProducts = storeData.filter((product) =>
  product.name.toLowerCase().includes(searchInput.toLowerCase())
);
  const uniqueType = [...new Set(storeData.map((product)=>product.type))]
  return (
    <div className='shop'>
      <div className="shop_title">
        <h1>Faisal Shop</h1>
        </div>

        
          <div className='search_bar'>
        <div className="input">
            <input type="text" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} placeholder='Search Products...'/>
            <button><FaSearch /></button>
        </div>      
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
        {filteredProducts.map((product) => <Product data={product} />)}
        </div>
        {filteredProducts.length === 0 && 'No product found'}
    </div>
  )
}

export default Shop
