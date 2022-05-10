import React from 'react'
import styled from 'styled-components'

interface IStyledInput {
  width?: string
  height?: string
  round?: string
  error?: boolean
  errorColor?: string
  color?: string
  variant?: string
  className?: string
  marginTop?: string
  onChange?: any
  value?: string
  type: string
}

const InputHelper: React.FC<IStyledInput> = ({ children, type, onChange, value, className }) => {
  return <input type={type} onChange={onChange} value={value} className={className}>{children}</input>
}

export const Input = styled(InputHelper)`
  width:${(props) => props.width ? props.width : '80%'};
  height: ${(props) => props.height ? props.height : '25px'};
  border-radius: ${(props) => props.round ? props.round : '13.2px'};
  border: ${(props) => props.error ? `2px solid ${props.errorColor}` : 'none'};
  outline: none;
  color: ${(props) => props.color ? props.color : '#000'};
  margin-top: ${(props) => props.marginTop ? props.marginTop : '25px'};
  padding: 5px 15px;
` 
