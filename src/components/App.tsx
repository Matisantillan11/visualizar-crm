import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginView as Login } from '@/views/Login/Login.view'
import { HomeView as Home } from '@/views/Home/Home.view'
import { Storage } from '@/config/storage'
import { ENTITIES } from '@/utils/constants/ENTITIES'
export const App = () => {
	return (
		<Routes>
			<Route
				path='/admin/:entity'
				element={localStorage.getItem(Storage.token) ? <Home /> : <Navigate replace to='/' />}
			/>
			<Route
				path='/'
				element={
					localStorage.getItem(Storage.token) ? <Navigate replace to={`/admin/${ENTITIES[0].name}`} /> : <Login />
				}
			/>
		</Routes>
	)
}
