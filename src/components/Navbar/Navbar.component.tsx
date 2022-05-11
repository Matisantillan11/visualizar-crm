import { colors } from '@/utils/lib/theme/colors'
import { Box } from '@chakra-ui/react'
import { HamburguerComponent } from '../Hamburguer/Hamburguer'

export const NavbarComponent = () => {
	return (
		<Box w='100vw' h='10vh' background={colors.primary} position='fixed'>
			<HamburguerComponent />
		</Box>
	)
}
