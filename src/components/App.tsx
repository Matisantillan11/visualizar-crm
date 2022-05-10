import { Route, Routes } from 'react-router'
import { HomeView as Home } from '@/views/Home/Home.view';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  )
}



