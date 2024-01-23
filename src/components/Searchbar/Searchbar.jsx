import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './Searchbar.css'
import { storeData } from '../../assets/assets/data/dummyData';

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState('')

    const filteredProducts = storeData.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>

    <div className='products'>
        {filteredProducts.map((product) => (
          <div className='product'>
          <img src={product.img} alt="" />
          <div className="discription">
            <p><b>{product.name}</b></p>
            <p><b>${product.price}</b></p>
          </div>
          {/* <button className="addto_cart" onClick={()=> addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button> */}
        </div>
        ))}
        {filteredProducts.length === 0 && <p>No matching products found.</p>}
      </div>
    </>
  )
}

export default Searchbar