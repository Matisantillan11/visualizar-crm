import { NavbarController } from '@/controllers/Navbar/Navbar.controller'
import { TableController } from '@/controllers/Table/Table.controller'
import { colors } from '@/utils/lib/theme/colors'
import { Box, Spinner } from '@chakra-ui/react'
import { Fragment } from 'react'

export interface IHome {
	status: string
	setStatus: (value: string | ((prevState: string) => string)) => void
	statusContext: 'fetched' | 'error' | 'initial' | 'fetching'
	result: any
}

export const HomeComponent = ({ status, setStatus, statusContext, result }: IHome) => {
	return (
		<Fragment>
			<Box minW='100vw' h='100vh' background='#333' position='relative'>
				{statusContext === 'fetching' ? (
					<Spinner size='md' color={colors.primary} />
				) : (
					<Fragment>
						<NavbarController status={status} setStatus={setStatus} />
						<TableController status={status} data={result} />
					</Fragment>
				)}
			</Box>
		</Fragment>
	)
}
