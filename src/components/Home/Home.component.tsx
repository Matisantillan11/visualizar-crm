import { NavbarController } from '@/controllers/Navbar/Navbar.controller'
import { TableController } from '@/controllers/Table/Table.controller'
import { Box } from '@chakra-ui/react'
import { Fragment } from 'react'

export interface IHome {
	status: string
	setStatus: (value: string | ((prevState: string) => string)) => void
}

export const HomeComponent = ({ status, setStatus }: IHome) => {
	return (
		<Fragment>
			<Box minW='100vw' h='100vh' background='#333' position='relative'>
				<NavbarController status={status} setStatus={setStatus} />
				<TableController status={status} />
			</Box>
		</Fragment>
	)
}
