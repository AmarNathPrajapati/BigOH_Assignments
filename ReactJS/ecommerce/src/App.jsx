import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { Cart, Home, Wishlist } from './pages'
import { Navbar } from './components'
import { MainLayout } from './components/Layouts'
import { AllRoutes } from './routes/allRoutes'

function App() {

  return (
    <Router>
      <Routes>
        <Route path={AllRoutes.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={AllRoutes.wishlist} element={<Wishlist />} />
          <Route path={AllRoutes.cart} element={<Cart />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default App
