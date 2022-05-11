import { NavbarController } from '@/controllers/Navbar/Navbar.controller'
import { Box } from '@chakra-ui/react'

export const HomeComponent = () => {
	return (
		<Box minW='100vw' h='100vh' background='black'>
			<NavbarController />
		</Box>
	)
}
