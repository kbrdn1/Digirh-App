import { Outlet } from 'react-router-dom'
import AuthContext from '@contexts/Auth.jsx'
import authStore from '@stores/Auth'
import Sidebar from '@components/Navs/Sidebar'
import Tabbar from '@components/Navs/Tabbar'

const App = () => {
  return (
    <AuthContext.Provider value={authStore}>
      <Sidebar />
      <main className="lg:ml-[276px] py-4 px-4 pt-24 duration-200 ease-out">
        <Tabbar />
        <Outlet />
      </main>
    </AuthContext.Provider>
  )
}

export default App
