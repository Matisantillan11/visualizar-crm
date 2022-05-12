import { colors } from '@/utils/lib/theme/colors'
import { Box, Container } from '@chakra-ui/react'
import { HamburguerComponent } from '../Hamburguer/Hamburguer'
import { AiOutlinePoweroff as LogoutIcon } from 'react-icons/ai'
import { DrawerController } from '@/controllers/Drawer/Drawer.controller'
import { DrawerItemController } from '@/controllers/Drawer/DrawerItem.controller'
import { FaUserAlt as UserIcon } from 'react-icons/fa'
export interface INavbar {
	SignOut: () => void
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
				<DrawerItemController title='User' colorText={colors.white}>
					<UserIcon size={20} color={colors.white} />
				</DrawerItemController>
			</DrawerController>
			<LogoutIcon onClick={SignOut} color={colors.white} size={25} />
		</Box>
	)
}
