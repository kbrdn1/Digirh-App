import { Outlet } from 'react-router-dom'
import AuthContext from '@contexts/Auth.jsx'
import authStore from '@stores/Auth'

const App = () => {
  return (
    <>
      <AuthContext.Provider value={authStore}>
        <Outlet />
      </AuthContext.Provider>
    </>
  )
}

export default App
