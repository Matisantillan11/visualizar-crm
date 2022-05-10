import { Route, Routes } from 'react-router'
import { LoginView as Login } from '@/views/Login/Login.view';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
  )
}



