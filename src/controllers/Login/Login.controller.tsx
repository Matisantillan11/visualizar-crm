import React, { useContext, useState } from 'react'
import { LoginComponent } from '@/components/Login/Login.component'
import { AuthContext } from '@/context/store/authentication/authContext'

export const LoginController = () => {
  const [ email, setEmail] = useState('example@example.com')
  const [ password, setPassword ] = useState('3x4mpl3_123')
  const [ show, setShow ] = useState(false)
  const { login, status, result } = useContext(AuthContext)

  const SignIn = () => {
    if(email !== '' && email !== 'example@example.com' && password !== '' && password !== '3x4mpl3_123'){
      login(email, password)
    }
  }

  return (
    <LoginComponent 
      email={email}
      password={password}
      show={show}
      setEmail={setEmail}
      setPassword={setPassword}
      setShow={setShow}
      SignIn={SignIn}
      status={status}
    />
  )
}

