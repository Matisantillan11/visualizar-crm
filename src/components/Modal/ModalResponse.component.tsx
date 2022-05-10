import { Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import logo from '@/assets/images/Logo-VisualizAR.svg'
import { Button } from '../Button/CustomButton';

export interface IModalResponse {
	isOpen: boolean
	onClose: any
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string
  result: any
}

export const ModalResponseComponent = ({ isOpen, onClose, status, message , result }: IModalResponse) => {
	return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        
        <ModalCloseButton onClick={onClose} />
        <ModalBody
          marginY={5}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={logo} width={150} marginX="auto" height={150} />
          <Text>
            { status === 'fetched' && Object.keys(result.login.user).length > 0 && `Bienvenido ${result.login.user.email}!`}
            { status === 'error' && message }
          </Text>
          <Button color="#673AB7" marginVertical='25px' onClick={status === 'error' && onClose}> {status === 'error' ? 'Intentar nuevamente' : 'Continuar'} </Button>
          
        </ModalBody>

        
      </ModalContent>
    </Modal>
  )
}
