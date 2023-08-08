import PropTypes from 'prop-types'
import AuthContext from '@contexts/Auth.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const AuthGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (!authStore.jwt) {
    return <Navigate to="/login" replace />
  }

  return children
}

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthGuard
