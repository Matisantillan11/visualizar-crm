import React from 'react'
import { Box } from '@chakra-ui/react'

export interface IDrawer {
	status: string
	color: string
	children?: React.ReactNode
}

export const DrawerComponent = ({ status, color, children }: IDrawer) => {
	return (
		<Box
			w='15vw'
			background={color}
			height='90vh'
			top='10vh'
			overflowY='scroll'
			left='0'
			position='absolute'
			zIndex={999999}
			transition='all 0.5s linear'
			transform={status === 'open' ? 'translateX(0%)' : 'translateX(-100%)'}
			__css={{
				'::-webkit-scrollbar': {
					display: 'none',
				},
			}}
		>
			{children}
		</Box>
	)
}
