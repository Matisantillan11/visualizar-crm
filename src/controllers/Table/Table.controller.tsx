import { TableComponent } from '@/components/Table/Table.component'
import { useMemo } from 'react'
import { useTable } from 'react-table'
export const TableController = () => {
	const data = [
		{ name: 'Anom', age: 19, gender: 'Male' },
		{ name: 'Megha', age: 19, gender: 'Female' },
		{ age: 25, gender: 'Male' },
	]

	const columns = useMemo(() => {
		if (data.length > 0) return Object.keys(data[0])
		return []
	}, [data])

	const keyRows = useMemo(() => {
		if (columns.length > 0) return columns
		return []
	}, [columns])
	return <TableComponent data={data} columns={columns} keyRows={keyRows} />
}
