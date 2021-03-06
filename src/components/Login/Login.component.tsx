import React, { Fragment } from 'react'
import { Container } from '@/components/Container'
//import { Input } from '../Input/CustomInput'
import { Button } from '../Button/CustomButton'
import { Input, FormControl, InputGroup, InputRightElement, Spinner, FormErrorMessage } from '@chakra-ui/react'
import { IoEyeSharp as ShowIcon, IoEyeOffSharp as NoShowIcon } from "react-icons/io5";


import LogoVisualizar from '@/assets/images/Logo-VisualizAR.svg'
import '@/components/Login/styles/home.styles.css'
import { ModalResponseController } from '@/controllers/Modal/ModalResponse.controller';

export interface ILogin {
  email: string
  password: string
  show: Boolean
  formTested: boolean
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  setEmail: (value: string | ((prevVar: string) => string)) => void 
  setPassword: (value: string | ((prevVar: string) => string)) => void 
  setShow:  (value: boolean | ((prevVar: boolean) => boolean)) => void
  result: any
  message: string
  SignIn: () => void
  validateField: (typeInput: string, value: string) => boolean
}

export const LoginComponent = ({
  email,
  password,
  show,
  formTested,
  status,
  setEmail,
  setPassword,
  setShow,
  result,
  message,
  SignIn,
  validateField,
}: ILogin) => {

  return (
    <Fragment>
      {
        status === 'fetching' ? (
          <Container display='flex' flexDirection='column' BgColor='#333'>
            <Spinner size='md' color="#673AB7"/>
          </Container>
        ) : (
        <Container display='flex' flexDirection='row' BgColor='#333'>
          <div className="form">
            <img className="logo" src={LogoVisualizar} alt="visualizar"/>

            <FormControl 
            w='70%' 
            marginTop='40px'
            isInvalid={
              formTested
                ? validateField('email', email)
                  ? false
                  : true
                : false
            }>
              <Input outline='none' color="white" value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" width='100%' />
              {!validateField('email', email) && (
                <FormErrorMessage>
                  {email === ''
                    ? 'El email es un campo obligatorio.'
                    : 'Debes ingresar un correo electr??nico v??lido. example@example.com'}
                </FormErrorMessage>
              )}
              
            </FormControl>

            <FormControl 
            w='70%' 
            marginTop='40px'
            isInvalid={
              formTested
                ? validateField('password', password)
                  ? false
                  : true
                : false
            }> 
              <InputGroup>
                <Input outline='none' color="white" value={password} onChange={(e: any) => setPassword(e.target.value)} type={show ? "text" : "password"} width='100%'/>
                <InputRightElement children={show ? <ShowIcon onClick={() => setShow(!show)} color="white"/> : <NoShowIcon onClick={() => setShow(!show)} color="white"/>} />
              </InputGroup>
              {!validateField('password', password) && (
              <FormErrorMessage>
                {password === ''
                  ? 'La contrase??a es un campo obligatorio.'
                  : 'La contrase??a debe tener entre 8 y 12 car??cteres. Tambi??n debes incluir al menos una may??scula, un n??mero y un caracter especial. Ejemplo: C0ntras3??a-1'}
              </FormErrorMessage>
              )}
            </FormControl>

            <Button color="#673AB7" marginVertical='45px' onClick={SignIn}> Ingresar </Button>
          </div>
          <ModalResponseController status={status} result={result} message={message}/>  
        </Container>
        )
      }
    </Fragment>
  )
}
