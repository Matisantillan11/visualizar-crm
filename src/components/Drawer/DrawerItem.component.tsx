import { Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface IDrawerItem {
	title: string
	colorText: string
	children: ReactNode
}
export const DrawerItemComponent = ({ title, colorText, children }: IDrawerItem) => {
	return (
		<Box
			display='flex'
			justifyContent='flex-start'
			alignItems='center'
			w='100%'
			h='70px'
			paddingX='15px'
			_hover={{
				background: '#f2f2f24f',
			}}
		>
			{children}
			<Text marginX='15px' color={colorText}>
				{title}
			</Text>
		</Box>
	)
}
