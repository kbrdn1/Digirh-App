import { createContext } from 'react'
import userStores from '@stores/User.jsx'

const UserContext = createContext(userStores)

export default UserContext
