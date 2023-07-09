import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../contexts/Auth.jsx'

const Logout = () => {
  const authStore = useContext(AuthContext)

  useEffect(() => {
    authStore.logout()
  }, [])

  return <Navigate to="/Digirh-App/login" replace />
}

export default Logout
