import React, { useState } from 'react'
import { HomeComponent } from '@/components/Home/Home.component'

export const HomeController = () => {
  const [ email, setEmail] = useState('example@example.com')
  const [ password, setPassword ] = useState('3x4mpl3_123')
  const [ show, setShow ] = useState(false)

  return (
    <HomeComponent 
      email={email}
      password={password}
      show={show}
      setEmail={setEmail}
      setPassword={setPassword}
      setShow={setShow}
    />
  )
}

