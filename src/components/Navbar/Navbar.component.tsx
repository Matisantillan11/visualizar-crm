import { colors } from '@/utils/lib/theme/colors'
import { Box } from '@chakra-ui/react'
import { HamburguerComponent } from '../Hamburguer/Hamburguer'
import { AiOutlinePoweroff as LogoutIcon } from 'react-icons/ai'

export interface INavbar {
	SignOut: () => void
}

export const NavbarComponent = ({ SignOut }: INavbar) => {
	return (
		<Box
			w='100vw'
			h='10vh'
			background={colors.primary}
			position='fixed'
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			paddingRight='35px'
		>
			<HamburguerComponent />
			<LogoutIcon onClick={SignOut} color={colors.white} size={25} />
		</Box>
	)
}
