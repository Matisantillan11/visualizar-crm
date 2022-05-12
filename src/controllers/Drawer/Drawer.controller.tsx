import { DrawerComponent, IDrawer } from '@/components/Drawer/Drawer.component'

export const DrawerController = (props: IDrawer) => {
	return <DrawerComponent {...props} />
}
