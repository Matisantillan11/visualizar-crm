import React from 'react'
import styled from 'styled-components'

export interface IContainer {
  width?: string
  height?: string
  display?: 'flex' | 'block' | 'inline'
  flexDirection?: 'row' | 'column'
  JContent?: 'justify-content' | 'space-evenly' | 'space-between' | 'center' | 'flex-start'
  AItems?: 'justify-content' | 'space-evenly' | 'space-between' | 'center' | 'flex-start'
  BgColor?: string
  className?: string
}

const helperContainer: React.FC<IContainer> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
export const Container = styled(helperContainer)`
  width: ${(props) => props.width ? props.width : '100vw'};
  height: ${(props) => props.height ? props.height : '100vh'};
  display: ${(props) => props.display ? props.display : 'block'};
  flex-direction: ${(props) => props.flexDirection };
  justify-content: ${(props) => props.JContent ? props.JContent : 'center'};
  align-items: ${(props) => props.AItems ? props.AItems : 'center'};
  background-color: ${(props) => props.BgColor ? props.BgColor : 'transparent'};
`
