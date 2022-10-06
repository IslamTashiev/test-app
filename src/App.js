import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Confirm, Home, Login, Register } from "./views"
import { useNavigate, useLocation } from "react-router-dom"

const PrivateRoute = (Component) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const user = JSON.parse(localStorage.getItem(currentUser))
    const publicRoutes = ["/login", '/confirm', '/register']
    if (!user && !publicRoutes.includes(location.pathname)) {
      navigate("/login")
    }
  }, [location, navigate])

  return Component
}
function App() {
  return (
    <Routes>
      <Route path="/" element={PrivateRoute(<Home />)} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirm" element={PrivateRoute(<Confirm />)} />
      <Route path="/register" element={PrivateRoute(<Register />)} />
    </Routes>
  )
}

export default App
