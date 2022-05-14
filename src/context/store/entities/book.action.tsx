import React, { createContext, useReducer } from 'react'
import { api } from '@/utils/lib/api/axios.config'
import config from '@/config/dev-local.config'
import { API_ROUTES } from '@/utils/constants/API_ROUTES'
import { Storage } from '@/config/storage'
import { bookInitialState, bookReducer } from './book.reducer'

type BookContextProps = {
	getAllBooks: () => void
	result: any
	error: boolean
	status: 'fetching' | 'fetched' | 'error' | 'initial'
	message: string
}

export const BookContext = createContext({} as BookContextProps)

export const BookProvider = ({ children }: any) => {
	const [bookState, dispatch] = useReducer(bookReducer, bookInitialState)

	const getAllBooks = async () => {
		dispatch({ type: 'BOOK_PENDING' })
		try {
			const project = {
				_id: 1,
				name: 1,
				editorial: 1,
				course: 1,
				teacher: 1,
				author: 1,
				'creationUser.fullname': 1,
				creationDate: 1,
				operationType: 1,
			}

			const match = {
				operationType: { $ne: 'D' },
			}
			const limit = 10
			const skip = 0
			const aggregations = {
				match,
				limit,
				skip,
			}
			const payload = await api.get(
				`${API_ROUTES.BOOKS.GET_ALL_WITHOUT_AUTH}/${config.db}?aggregations=${JSON.stringify(aggregations)}`,
			)

			if (payload.data.status !== 404 && payload.data.status !== 401 && payload.data.status !== 500) {
				return dispatch({
					type: 'BOOK_FULLFILLED',
					payload: {
						result: { books: payload.data.result },
						status: 'fetched',
						message: payload.data.message,
						error: payload.data.error,
					},
				})
			}

			return dispatch({
				type: 'BOOK_REJECTED',
				payload: {
					result: payload.data.result,
					status: 'error',
					message: payload.data.message,
					error: payload.data.error,
				},
			})
		} catch (error: any) {
			return dispatch({
				type: 'BOOK_REJECTED',
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
		<BookContext.Provider
			value={{
				...bookState,
				getAllBooks,
			}}
		>
			{children}
		</BookContext.Provider>
	)
}
