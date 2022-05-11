import { Route, Routes } from 'react-router'
import { LoginView as Login } from '@/views/Login/Login.view'
import { HomeView as Home } from '@/views/Home/Home.view'

export const App = () => {
	return (
		<Routes>
			<Route path='/admin/:entity' element={<Home />} />
			<Route path='/' element={<Login />} />
		</Routes>
	)
}
