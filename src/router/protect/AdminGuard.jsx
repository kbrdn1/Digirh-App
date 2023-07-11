import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const AdminGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (!authStore.user.roles.includes('ROLE_ADMIN')) {
    return <Navigate to="/" replace />
  }

  return children
}

export default AdminGuard
