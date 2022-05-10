import { ModalResponseComponent } from '@/components/Modal/ModalResponse.component'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react';
export interface IModalResponseController{
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string
  result: any
}

export const ModalResponseController = ({ status, message, result }: IModalResponseController) => {
	const { onOpen, onClose, isOpen } = useDisclosure()

  useEffect(() =>{
    if(status !== 'fetching' && status !== 'initial') onOpen()
  }, [status])

	return <ModalResponseComponent result={result} message={message} status={status} onClose={onClose} isOpen={isOpen} />
}
