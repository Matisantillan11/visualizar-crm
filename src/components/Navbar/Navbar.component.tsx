import { colors } from '@/utils/lib/theme/colors'
import { Box, Container } from '@chakra-ui/react'
import { HamburguerComponent } from '../Hamburguer/Hamburguer'
import { AiOutlinePoweroff as LogoutIcon } from 'react-icons/ai'
import { DrawerController } from '@/controllers/Drawer/Drawer.controller'
import { DrawerItemController } from '@/controllers/Drawer/DrawerItem.controller'
import { FaUserAlt as UserIcon } from 'react-icons/fa'
import { ENTITIES } from '@/utils/constants/ENTITIES'
import { Link } from 'react-router-dom'
export interface INavbar {
	SignOut?: () => void
	status: string
	setStatus: (value: string | ((prevState: string) => string)) => void
}

export const NavbarComponent = ({ SignOut, status, setStatus }: INavbar) => {
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
			<HamburguerComponent status={status} setStatus={setStatus} />
			<DrawerController color={colors.primary} status={status}>
				{ENTITIES.map((entity) => (
					<Link to={`/admin/${entity.name}`}>
						<DrawerItemController title={entity.name} colorText={colors.white}>
							<entity.icon size={20} color={colors.white} />
						</DrawerItemController>
					</Link>
				))}
			</DrawerController>
			<LogoutIcon onClick={SignOut} color={colors.white} size={25} />
		</Box>
	)
}
