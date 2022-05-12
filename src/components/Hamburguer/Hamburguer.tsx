import { colors } from '@/utils/lib/theme/colors'
import { Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components'

interface IStick {
	className?: string
	width?: string
	height?: string
	marginHorizontal?: string
	marginVertical?: string
	marginR?: string
	marginL?: string
	color?: string
	status?: string
	rotate: string
	translate: string
}

const StickHelper: React.FC<IStick> = ({ children, className }) => {
	return <div className={className}>{children}</div>
}

export const Stick = styled(StickHelper)`
	background: ${(props) => (props.color ? props.color : colors.white)};
	width: ${(props) => (props.width ? props.width : '35px')};
	height: ${(props) => (props.height ? props.height : '5px')};
	margin-top: ${(props) => (props.marginVertical ? props.marginVertical : '2px')};
	margin-bottom: ${(props) => (props.marginVertical ? props.marginVertical : '2px')};
	margin-left: ${(props) => (props.marginHorizontal ? props.marginHorizontal : props.marginL ? props.marginL : '0px')};
	margin-right: ${(props) => (props.marginHorizontal ? props.marginHorizontal : props.marginR ? props.marginR : '0px')};
	border-radius: 15px;
	transition: all 0.5s linear;
	transform: ${(props) =>
		props.status === 'open' && props.translate
			? `rotate(${props.rotate}deg) translate3d(${props.translate})`
			: 'rotate(0)'};
	&:hover {
		cursor: pointer;
	}
`

interface IHamburguer {
	status: string
	setStatus: (value: string | ((prevState: string) => string)) => void
}

export const HamburguerComponent = ({ status, setStatus }: IHamburguer) => {
	return (
		<Container
			margin='0'
			padding='0'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			w='100px'
			h='100%'
			onClick={() => (status === 'close' ? setStatus('open') : setStatus('close'))}
		>
			<Stick status={status} marginVertical='5px' rotate='45' translate='5px, 3px, 0' />
			<Stick status={status} marginL='30px' rotate='-45' translate='-5px, -14px, 0' />
		</Container>
	)
}
