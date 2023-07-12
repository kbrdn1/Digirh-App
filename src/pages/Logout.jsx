import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '@contexts/Auth.jsx'
import authStore from '@stores/Auth.jsx'

const Logout = () => {

  useEffect(() => {
    authStore.logout()
  }, [])
  
  return <Navigate to="/login" replace />
}

export default Logout
