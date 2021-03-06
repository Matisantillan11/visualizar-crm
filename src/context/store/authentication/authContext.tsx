import React, { createContext, useReducer } from 'react'
import { api } from '@/utils/lib/api/axios.config'
import { authInitialState, authReducer } from './auth.reducer'
import config from '@/config/dev-local.config'
import { API_ROUTES } from '@/utils/constants/API_ROUTES'
import { Storage } from '@/config/storage'

type AuthContextProps = {
	login: (email: string, password: string) => void
	/*register: () => void;*/
	logout: () => void
	result: any
	error: boolean
	status: 'fetching' | 'fetched' | 'error' | 'initial'
	message: string
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState)

	const login = async (email: string, password: string) => {
		if (email !== '' && email !== 'example@example.com' && password !== '' && password !== '3x4mpl3_123') {
			dispatch({ type: 'LOGIN_PENDING' })
			try {
				const payload = await api.post(`${API_ROUTES.AUTH.LOGIN}/${config.db}`, { email, password })
				console.log({ payload })
				if (payload.data.status !== 404 && payload.data.status !== 401 && payload.data.status !== 500) {
					return dispatch({
						type: 'LOGIN_FULLFILLED',
						payload: {
							result: payload.data.result,
							status: 'fetched',
							message: payload.data.message,
							error: payload.data.error,
						},
					})
				}

				return dispatch({
					type: 'LOGIN_REJECTED',
					payload: {
						result: payload.data.result,
						status: 'error',
						message: payload.data.message,
						error: payload.data.error,
					},
				})
			} catch (error: any) {
				return dispatch({
					type: 'LOGIN_REJECTED',
					payload: {
						result: error.response.data.result,
						status: 'error',
						message: error.response.data.message,
						error: error.response.data.error,
					},
				})
			}
		}
	}

	const logout = () => {
		localStorage.removeItem(Storage.token)
		localStorage.removeItem(Storage.userId)
		localStorage.removeItem(Storage.user)
	}

	return (
		<AuthContext.Provider
			value={{
				...authState,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
