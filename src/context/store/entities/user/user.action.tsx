import { API_ROUTES } from '@/utils/constants/API_ROUTES'
import { api } from '@/utils/lib/api/axios.config'
import config from '@/config/dev-local.config'
import { createContext, useReducer } from 'react'
import { userInitialState, userReducer } from './user.reducer'

type UserContextProps = {
	getAllUsers: () => void
	result: any
	error: boolean
	status: 'fetching' | 'fetched' | 'error' | 'initial'
	message: string
}

export const UserContext = createContext({} as UserContextProps)

export const UserProvider = ({ children }: any) => {
	const [userState, dispatch] = useReducer(userReducer, userInitialState)

	const getAllUsers = async () => {
		dispatch({ type: 'USER_PENDING' })
		try {
			const match = {
				operationType: { $ne: 'D' },
			}
			const aggregations = {
				match,
			}
			const payload = await api.get(
				`${API_ROUTES.USERS.GET_ALL_WITHOUT_AUTH}/${config.db}?aggregations=${JSON.stringify(aggregations)}`,
			)
			if (payload.data.status !== 404 && payload.data.status !== 401 && payload.data.status !== 500) {
				return dispatch({
					type: 'USER_FULLFILLED',
					payload: {
						result: { users: payload.data.result },
						status: 'fetched',
						message: payload.data.message,
						error: payload.data.error,
					},
				})
			}

			return dispatch({
				type: 'USER_REJECTED',
				payload: {
					result: payload.data.result,
					status: 'error',
					message: payload.data.message,
					error: payload.data.error,
				},
			})
		} catch (error: any) {
			return dispatch({
				type: 'USER_REJECTED',
				payload: {
					result: error.response.data.result,
					status: 'error',
					message: error.response.data.message,
					error: error.response.data.error,
				},
			})
		}
	}

	return (
		<UserContext.Provider
			value={{
				...userState,
				getAllUsers,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
