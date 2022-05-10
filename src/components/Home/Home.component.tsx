import React, { Fragment } from 'react'
import { Container } from '@/components/Container'
//import { Input } from '../Input/CustomInput'
import { Button } from '../Button/CustomButton'
import { Input, FormControl, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IoEyeSharp as ShowIcon, IoEyeOffSharp as NoShowIcon } from "react-icons/io5";


import LogoVisualizar from '@/assets/images/Logo-VisualizAR.svg'
import '@/components/Home/styles/home.styles.css'

export interface IHome {
  email: string
  setEmail: (value: string | ((prevVar: string) => string)) => void 
  password: string
  setPassword: (value: string | ((prevVar: string) => string)) => void 
  show: Boolean
  setShow:  (value: boolean | ((prevVar: boolean) => boolean)) => void
}

export const HomeComponent = ({
  email,
  setEmail,
  password,
  setPassword,
  show,
  setShow,
}: IHome) => {

  console.log({ email })
  console.log({password})
  return (
    <Fragment>
      <Container display='flex' flexDirection='row' BgColor='#333'>
        <form className="form">
          <img className="logo" src={LogoVisualizar} alt="visualizar"/>

          <FormControl w='70%' marginTop='40px'>
            <Input outline='none' color="white" value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" width='100%' />
          </FormControl>

          <FormControl w='70%' marginTop='40px'>
            <InputGroup>
              <Input outline='none' color="white" value={password} onChange={(e: any) => setPassword(e.target.value)} type={show ? "text" : "password"} width='100%'/>
              <InputRightElement children={show ? <ShowIcon onClick={() => setShow(!show)} color="white"/> : <NoShowIcon onClick={() => setShow(!show)} color="white"/>} />
            </InputGroup>
          </FormControl>

          <Button color="#673AB7" marginVertical='45px'> Ingresar </Button>
        </form>
      </Container>
    </Fragment>
  )
}
