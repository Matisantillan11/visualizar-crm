import { TableComponent } from '@/components/Table/Table.component'
import { useMemo } from 'react'
import { useTable } from 'react-table'
export const TableController = () => {
	const data = [
		{ name: 'Anom', age: 19, gender: 'Male' },
		{ name: 'Megha', age: 19, gender: 'Female' },
		{ name: 'Subham', age: 25, gender: 'Male' },
	]

	const columns = useMemo(() => {
		if (data.length > 0) return Object.keys(data[0])
		return []
	}, [data])

	return <TableComponent data={data} columns={columns} />
}
