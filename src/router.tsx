import { Routes, Route } from 'react-router-dom'
import App from './App'
import First from './pages/First'

function Router() {
  const router = []
  return (
    <Routes>
      <Route path='/first' element={<First />} />
    </Routes>
  )
}

export default Router