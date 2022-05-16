import { HomeComponent } from '@/components/Home/Home.component'
import { BookContext } from '@/context/store/entities/book.action'
import { UserContext } from '@/context/store/entities/user/user.action'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'

export const HomeController = () => {
	const { entity } = useParams()
	const [statusBurger, setStatus] = useState('close')

	const bookContext = useContext(BookContext)
	const userContext = useContext(UserContext)

	const getAll = async () => {
		switch (entity) {
			case 'Book':
				bookContext.getAllBooks()
				break
			case 'User':
				userContext.getAllUsers()
				break
			default:
				break
		}
	}

	useEffect(() => {
		getAll()
	}, [entity])

	const result = useMemo(() => {
		switch (entity) {
			case 'Book':
				if (bookContext.status === 'fetched' && bookContext.result.books.length > 0) return bookContext.result.books
				return []
			case 'User':
				if (userContext.status === 'fetched' && userContext.result.users.length > 0) return userContext.result.users
				return []
			default:
				return []
		}
	}, [entity, bookContext, userContext])

	const status: any = useMemo(() => {
		switch (entity) {
			case 'Book':
				return bookContext.status
			case 'User':
				return userContext.status
			default:
				return []
		}
	}, [entity, bookContext, userContext])

	return <HomeComponent status={statusBurger} setStatus={setStatus} result={result} statusContext={status} />
}
