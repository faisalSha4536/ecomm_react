import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './Navbar.css'
import { shopContext } from '../context'

const Navbar = () => {
  const navigate = useNavigate()
  const {isLogin, username, setIsLogin} = useContext(shopContext)
  return (
    <div className='navbar'>
        <div className="links">
          {
            isLogin === true ? (
              <>
              <p style={{color: 'white', fontSize: '1vw'}}>Hi, {username}</p>
              <button onClick={()=>{setIsLogin(false)}}><Link to='/login'>Signout</Link></button>
              </>
            ):(
              <button onClick={()=>{navigate('/login')}}>Login</button>
            )
          }
            <button onClick={()=>{navigate('/')}}>Shop</button>
            <Link to='/cart'><ShoppingCart size={32}/></Link>
        </div>
    </div>

  )
}

export default Navbar