import { colors } from '@/utils/lib/theme/colors'
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, TableContainer } from '@chakra-ui/react'
import { FaPen as EditIcon } from 'react-icons/fa'
interface ITable {
	columns: any
	data: any
	keyRows: any
	addFieldChecked: (value: number, checked: any) => void
	status: string
}
export const TableComponent = ({ columns, data, keyRows, addFieldChecked, status }: ITable) => {
	return (
		<TableContainer
			position='absolute'
			top='10vh'
			w={status === 'close' ? '100vw' : '85vw'}
			minH='90vh'
			height='auto'
			overflow='scroll'
			transition='all 0.5s linear'
			transform={status === 'open' ? 'translateX(calc(100% - 85vw))' : 'translateX(0)'}
			marginLeft={status === 'close' ? 0 : '15vw'}
		>
			<Table variant='striped' color={colors.white} colorScheme={colors.primary} size='lg'>
				<Thead color={colors.white}>
					<Tr>
						<Th w={10} color={colors.white} />
						<Th w={10} color={colors.white} />
						{columns.map((column: any, index: number) => (
							<Th color={colors.white} key={index}>
								{column}
							</Th>
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
