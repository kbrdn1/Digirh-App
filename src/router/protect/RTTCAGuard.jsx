import PropTypes from 'prop-types'
import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const RTTCAGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (
    !authStore.user.roles.find(
      (role) =>
        role === 'ROLE_RTT_CA' ||
        role === 'ROLE_RH' ||
        role === 'ROLE_ADMIN' ||
        role === 'ROLE_SUPER_ADMIN'
    )
  ) {
    return <Navigate to="/" replace />
  }

  return children
}

RTTCAGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RTTCAGuard
