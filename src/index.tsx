import ReactDOM from 'react-dom'
import { App } from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'
import { AuthProvider } from './context/store/authentication/authContext'
import { BookProvider } from './context/store/entities/book.action'
import { UserProvider } from './context/store/entities/user/user.action'

const AppState = ({ children }: any) => {
	return (
		<AuthProvider>
			<UserProvider>
				<BookProvider>{children}</BookProvider>
			</UserProvider>
		</AuthProvider>
	)
}

ReactDOM.render(
	<BrowserRouter>
		<ChakraProvider>
			<AppState>
				<App />
			</AppState>
		</ChakraProvider>
	</BrowserRouter>,
	document.getElementById('root'),
)
