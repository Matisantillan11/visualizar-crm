import { NavbarController } from '@/controllers/Navbar/Navbar.controller'
import { TableController } from '@/controllers/Table/Table.controller'
import { Box } from '@chakra-ui/react'

export const HomeComponent = () => {
	return (
		<Box minW='100vw' h='100vh' background='black' position='relative'>
			<NavbarController />
			<TableController />
		</Box>
	)
}
