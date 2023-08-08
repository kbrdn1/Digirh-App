import PropTypes from 'prop-types'
import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const RFDGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (
    !authStore.user.roles.find(
      (role) =>
        role === 'ROLE_RFD' ||
        role === 'ROLE_SUPER_ADMIN' ||
        role === 'ROLE_RH' ||
        role === 'ROLE_ADMIN'
    )
  ) {
    return <Navigate to="/" replace />
  }

  return children
}

RFDGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RFDGuard
