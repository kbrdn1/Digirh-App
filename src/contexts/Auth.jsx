import { createContext } from 'react'
import authStores from '@stores/Auth.jsx'

const AuthContext = createContext(authStores)

export default AuthContext
