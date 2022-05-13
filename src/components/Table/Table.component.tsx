import { colors } from '@/utils/lib/theme/colors'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, color } from '@chakra-ui/react'

interface ITable {
	columns: any
	data: any
}
export const TableComponent = ({ columns, data }: ITable) => {
	return (
		<TableContainer w='100vw' minH='100vh' height='auto' paddingTop='10vh' overflow='scroll'>
			<Table variant='striped' color={colors.white} colorScheme={colors.primary} size='lg'>
				<Thead color={colors.white}>
					<Tr>
						{columns.map((column: any) => (
							<Th>{column}</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{data.map((val: any, key: number) => {
						return (
							<Tr key={key}>
								<Td>{val.name}</Td>
								<Td>{val.age}</Td>
								<Td>{val.gender}</Td>
							</Tr>
						)
					})}
				</Tbody>
			</Table>
		</TableContainer>
	)
}
