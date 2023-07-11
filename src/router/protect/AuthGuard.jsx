import AuthContext from '@contexts/Auth.jsx'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const AuthGuard = ({ children }) => {
  const authStore = useContext(AuthContext)

  if (!authStore.jwt) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default AuthGuard
