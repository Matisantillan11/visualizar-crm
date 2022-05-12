import { NavbarComponent } from '@/components/Navbar/Navbar.component'
import { AuthContext } from '@/context/store/authentication/authContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NavbarController = () => {
	const [status, setStatus] = useState('close')
	const { logout } = useContext(AuthContext)
	const history = useNavigate()
	const SignOut = () => {
		logout()
		history('/')
	}

	return <NavbarComponent SignOut={SignOut} status={status} setStatus={setStatus} />
}
