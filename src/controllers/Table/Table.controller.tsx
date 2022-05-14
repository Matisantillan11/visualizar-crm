import { TableComponent } from '@/components/Table/Table.component'
import { useMemo, useState } from 'react'

export const TableController = ({ status }: any) => {
	const [fieldChecked, setFieldChecked] = useState<number[]>([])

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

	const addFieldChecked = (value: number, checked: any) => {
		if (checked) {
			setFieldChecked((prevState: number[]) => [...prevState, value])
		} else {
			setFieldChecked(fieldChecked.filter((field) => field !== value))
		}
	}

	return (
		<TableComponent data={data} columns={columns} keyRows={keyRows} addFieldChecked={addFieldChecked} status={status} />
	)
}
