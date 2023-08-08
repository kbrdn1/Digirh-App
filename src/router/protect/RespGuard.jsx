import PropTypes from 'prop-types'
import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const RespGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (
    !authStore.user.roles.find(
      (role) =>
        role === 'ROLE_RESP' ||
        role === 'ROLE_SUPER_ADMIN' ||
        role === 'ROLE_RH' ||
        role === 'ROLE_ADMIN'
    )
  ) {
    return <Navigate to="/" replace />
  }

  return children
}

RespGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RespGuard
