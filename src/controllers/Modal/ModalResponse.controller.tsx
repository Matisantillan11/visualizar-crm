import { ModalResponseComponent } from '@/components/Modal/ModalResponse.component'
import { Storage } from '@/config/storage'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export interface IModalResponseController {
	status: 'fetching' | 'fetched' | 'error' | 'initial'
	message: string
	result: any
}

export const ModalResponseController = ({ status, message, result }: IModalResponseController) => {
	const { onOpen, onClose, isOpen } = useDisclosure()
	const history = useNavigate()

	useEffect(() => {
		if (status !== 'fetching' && status !== 'initial') onOpen()
	}, [status])

	const redirectTo = () => {
		onClose()
		history('/admin/user')
	}

	return (
		<ModalResponseComponent
			result={result}
			message={message}
			status={status}
			onClose={onClose}
			isOpen={isOpen}
			redirectTo={redirectTo}
		/>
	)
}
