import { Book, User } from '@/interfaces/interfaces'

export interface UserState {
	status: 'fetching' | 'fetched' | 'error' | 'initial'
	message: string
	error: boolean
	result: {
		users: User[] | User
	}
}

export const userInitialState: UserState = {
	status: 'initial',
	message: '',
	error: false,
	result: {
		users: [
			{
				_id: '',
				name: '',
				lastname: '',
				dni: 0,
				enabled: false,
				email: '',
				verified: false,
				creationDate: '',
			},
		],
	},
}

type UserAction =
	| { type: 'USER_PENDING' }
	| {
			type: 'USER_FULLFILLED'
			payload: { result: { users: User[] | User }; status: string; message: string; error: boolean }
	  }
	| { type: 'USER_REJECTED'; payload: { result: any; status: string; message: string; error: boolean } }

export const userReducer = (state: UserState, action: UserAction): UserState => {
	switch (action.type) {
		case 'USER_PENDING': {
			return {
				...state,
				status: 'fetching',
			}
		}
		case 'USER_FULLFILLED': {
			const { result, status, message, error } = action.payload

			return {
				...state,
				status: 'fetched',
				message,
				error: false,
				result: {
					users: result.users,
				},
			}
		}

		case 'USER_REJECTED': {
			const { result, status, message, error } = action.payload

			return {
				...state,
				status: 'error',
				message,
				error: true,
			}
		}

		default: {
			return state
		}
	}
}
