import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const SuperAdminGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (!authStore.user.roles.includes('ROLE_SUPERADMIN')) {
    return <Navigate to="/Digirh-App/" replace />
  }

  return children
}

export default SuperAdminGuard
