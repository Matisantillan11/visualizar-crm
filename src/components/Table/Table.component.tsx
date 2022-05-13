import { colors } from '@/utils/lib/theme/colors'
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, TableContainer } from '@chakra-ui/react'
import { FaPen as EditIcon } from 'react-icons/fa'
interface ITable {
	columns: any
	data: any
	keyRows: any
	addFieldChecked: (value: number, checked: any) => void
}
export const TableComponent = ({ columns, data, keyRows, addFieldChecked }: ITable) => {
	return (
		<TableContainer w='100vw' minH='100vh' height='auto' paddingTop='10vh' overflow='scroll'>
			<Table variant='striped' color={colors.white} colorScheme={colors.primary} size='lg'>
				<Thead color={colors.white}>
					<Tr>
						<Th w={10} />
						<Th w={10} />
						{columns.map((column: any, index: number) => (
							<Th key={index}>{column}</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{data.map((val: any, index: number) => {
						return (
							<Tr key={index} _hover={{ backgroundColor: colors.dryPrimary }}>
								<Td>
									<Checkbox
										onChange={(e: any) => addFieldChecked(index, e.target.checked)}
										colorScheme={colors.primary}
									/>
								</Td>
								<Td>
									<EditIcon color={colors.white} size={15} />
								</Td>
								{keyRows.map((key: any, index: number) => (
									<Td key={index}>{val[key]}</Td>
								))}
							</Tr>
						)
					})}
				</Tbody>
			</Table>
		</TableContainer>
	)
}
