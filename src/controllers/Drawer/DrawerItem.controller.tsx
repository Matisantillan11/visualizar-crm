import { DrawerItemComponent, IDrawerItem } from '@/components/Drawer/DrawerItem.component'

export const DrawerItemController = (props: IDrawerItem) => {
	return <DrawerItemComponent {...props} />
}
