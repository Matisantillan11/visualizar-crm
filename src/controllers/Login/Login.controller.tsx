import React, { useContext, useState } from 'react'
import { LoginComponent } from '@/components/Login/Login.component'
import { AuthContext } from '@/context/store/authentication/authContext'
import { useValidateForm } from '@/hooks/useValidationForm'

export const LoginController = () => {
  const { validateField } = useValidateForm()
  const { login, status, result, message } = useContext(AuthContext)
  const [ email, setEmail] = useState('example@example.com')
  const [ password, setPassword ] = useState('3x4mpl3_123')
  const [ show, setShow ] = useState(false)
  const [ formTested, setFormTested] = useState(false)

  const checkAllFields = (email: string, password: string) => {
    setFormTested(!formTested)

    if (validateField('email', email) && validateField('text', password)) {
      return true
    } else {
      window.scrollTo(0, 0)
      return false
    }
  }

  const SignIn = () => {
    if (checkAllFields(email, password)) {
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
      result={result}
      message={message}
      formTested={formTested}
      validateField={validateField}
    />
  )
}

