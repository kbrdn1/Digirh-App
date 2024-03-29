import PropTypes from 'prop-types'
import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const SuperAdminGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (!authStore.user.roles.includes('ROLE_SUPER_ADMIN')) {
    return <Navigate to="/" replace />
  }

  return children
}

SuperAdminGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SuperAdminGuard
