import React, { createContext, useState } from 'react'

export const shopContext = createContext()


const Context = ({children}) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const user = {
        gmail: 'dummy@gmail.com',
        password: 123456,
        username: 'Dummy User'
      }
    
      const {gmail, password, username} = user
    
      const handleSubmit = (navigate)=> {
          if(loginEmail == gmail && loginPass == password){
            navigate('/')
            setIsLogin(true)
            setLoginEmail('')
            setLoginPass('')
          } else{
            setError(
                <>
                You have entered wrong email or password <br />
                <strong>Email:</strong> dummy@gmail.com <br />
                <strong>Password:</strong> 123456
              </>
            ) 
          } 
      }

      const values = {loginEmail, setLoginEmail, loginPass, error, setLoginPass, handleSubmit, isLogin, username, setIsLogin}
  return (
    <shopContext.Provider value={values}>
        {children}
    </shopContext.Provider>
  )
}

export default Context