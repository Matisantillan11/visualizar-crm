import { TableComponent } from '@/components/Table/Table.component'
import { useMemo, useState } from 'react'

export interface ITableController {
	status: string
	data: any
}
export const TableController = ({ status, data }: ITableController) => {
	const [fieldChecked, setFieldChecked] = useState<string[]>([])

	const columns = useMemo(() => {
		if (data.length > 0) return Object.keys(data[0])
		return []
	}, [data])

	const keyRows = useMemo(() => {
		if (columns.length > 0) return columns
		return []
	}, [columns])

	const addFieldChecked = (value: string, checked: any) => {
		if (checked) {
			setFieldChecked((prevState: string[]) => [...prevState, value])
		} else {
			setFieldChecked(fieldChecked.filter((field) => field !== value))
		}
	}

	return (
		<TableComponent data={data} columns={columns} keyRows={keyRows} addFieldChecked={addFieldChecked} status={status} />
	)
}
