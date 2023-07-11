import { Outlet } from 'react-router-dom'
import AuthContext from '@contexts/Auth.jsx'
import authStore from '@stores/Auth'
import Sidebar from '@components/Navs/Sidebar'
import Tabbar from '@components/Navs/Tabbar'

const App = () => {
  return (
    <AuthContext.Provider value={authStore}>
      <Sidebar />
      <main
        className={`${
          authStore.user &&
          authStore.jwt &&
          'lg:ml-[calc(256px+20px)] py-4 px-4'
        }`}
      >
        <Tabbar />
        <Outlet />
      </main>
    </AuthContext.Provider>
  )
}

export default App
