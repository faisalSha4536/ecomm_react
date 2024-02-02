import React, { useContext, useState } from 'react'
import './Login.css'
import Icons from './Icons'
import { shopContext } from '../../context'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const {loginEmail, setLoginEmail, loginPass, setLoginPass, handleSubmit, error} = useContext(shopContext)
  const navigate = useNavigate()

  return (
    <div className='login'>
      <div className="login_form">
        <Icons />
        <div className="login_buttons">
          <div className= 'first_btn clicked'>
            Login
          </div>

        </div>
        <div className="main_form">
            <>
              <form id='login_form'>
                <ul>
                  <li>
                    <input type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder='example@gmail.com'/>
                  </li>
                  <li>
                    <input type="password" value={loginPass} onChange={(e)=> {Number(setLoginPass(e.target.value))}}   placeholder='Password...'/>
                  </li>
                  <p style={{color: 'white', fontSize: '1vw', marginTop: '-20px'}}>{error}</p>
                </ul>
              </form>
              <div className="sub_btn">
              <button onClick={()=>handleSubmit(navigate)}>Submit</button>

              </div>
            
            </>         
        </div>
      </div>
    </div>
  )
}

export default Login