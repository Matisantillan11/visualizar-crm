import { Book } from '@/interfaces/interfaces'

export interface BookState {
	status: 'fetching' | 'fetched' | 'error' | 'initial'
	message: string
	error: boolean
	result: {
		books: Book[] | Book
	}
}

export const bookInitialState: BookState = {
	status: 'initial',
	message: '',
	error: false,
	result: {
		books: [
			{
				_id: '',
				name: '',
				editorial: '',
				course: '',
				teacher: '',
				author: '',
				creationUser: {
					_id: '',
					name: '',
					lastname: '',
					dni: 0,
					enabled: false,
					email: '',
					verified: false,
					creationDate: '',
				},
				creationDate: '',
				operationType: '',
			},
		],
	},
}

type BookAction =
	| { type: 'BOOK_PENDING' }
	| {
			type: 'BOOK_FULLFILLED'
			payload: { result: { books: Book[] | Book }; status: string; message: string; error: boolean }
	  }
	| { type: 'BOOK_REJECTED'; payload: { result: any; status: string; message: string; error: boolean } }

export const bookReducer = (state: BookState, action: BookAction): BookState => {
	switch (action.type) {
		case 'BOOK_PENDING': {
			return {
				...state,
				status: 'fetching',
			}
		}
		case 'BOOK_FULLFILLED': {
			const { result, status, message, error } = action.payload

			return {
				...state,
				status: 'fetched',
				message,
				error: false,
				result: {
					books: result.books,
				},
			}
		}

		case 'BOOK_REJECTED': {
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
