import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import './index.css';
import { AuthProvider } from './context/store/authentication/authContext';

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <AppState>
        <App />
      </AppState>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
