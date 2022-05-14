import { HomeComponent } from '@/components/Home/Home.component'
import { BookContext } from '@/context/store/entities/book.action'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'

export const HomeController = () => {
	const { entity } = useParams()
	const [statusBurger, setStatus] = useState('close')

	const bookContext = useContext(BookContext)
	let status: 'fetched' | 'error' | 'initial' | 'fetching' = 'initial'
	const getAll = async () => {
		switch (entity) {
			case 'Book':
				bookContext.getAllBooks()
				status = bookContext.status
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

			default:
				return []
		}
	}, [entity, bookContext])

	return <HomeComponent status={statusBurger} setStatus={setStatus} result={result} statusContext={status} />
}
