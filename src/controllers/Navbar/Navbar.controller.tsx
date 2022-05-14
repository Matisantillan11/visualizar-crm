import { INavbar, NavbarComponent } from '@/components/Navbar/Navbar.component'
import { AuthContext } from '@/context/store/authentication/authContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NavbarController = ({ status, setStatus }: INavbar) => {
	const { logout } = useContext(AuthContext)
	const history = useNavigate()

	const SignOut = () => {
		logout()
		history('/')
	}

	return <NavbarComponent status={status} setStatus={setStatus} SignOut={SignOut} />
}
