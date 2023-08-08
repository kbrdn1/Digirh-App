import { createHashRouter, Navigate } from 'react-router-dom'
import App from '../App'
import AuthGuard from './protect/AuthGuard'
import AdminGuard from './protect/AdminGuard'
import RespGuard from './protect/RespGuard'
import SuperAdminGuard from './protect/SuperAdminGuard'
import RTTCAGuard from './protect/RTTCAGuard'
import RFDGuard from './protect/RFDGuard'
import authStore from '@stores/Auth'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import Logout from '@pages/Logout'
import NotFound from '@pages/404'
import Error from '@pages/500'
import Teams from '@pages/Teams'
import Team from '@pages/Team'
import Users from '@pages/Users'
import Profile from '@pages/Profile'
import Calendar from '@pages/Calendar'
import Trips from '@pages/Trips'
import Leaves from '@pages/Leaves'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
        errorElement: <Error />,
      },
      {
        path: '/profile',
        element: (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        ),
        errorElement: <Error />,
      },
      {
        path: '/logout',
        element: <Logout />,
        errorElement: <Error />,
      },
      {
        path: 'organization/collaborators',
        element: (
          <AuthGuard>
            <AdminGuard>
              <Users />
            </AdminGuard>
          </AuthGuard>
        ),
        errorElement: <Error />,
      },
      {
        path: '/organization/teams',
        element: (
          <AuthGuard>
            <AdminGuard>
              <Teams />
            </AdminGuard>
          </AuthGuard>
        ),
        errorElement: <Error />,
      },
      {
        path: '/team/:id',
        element: (
          <AuthGuard>
            <AdminGuard>
              <Team />
            </AdminGuard>
          </AuthGuard>
        ),
      },
      {
        path: '/calendar',
        element: (
          <AuthGuard>
            <Calendar />
          </AuthGuard>
        ),
        errorElement: <Error />,
      },
      {
        path: '/trips',
        element: (
          <AuthGuard>
            <Trips />
          </AuthGuard>
        ),
      },
      {
        path: '/leaves',
        element: (
          <AuthGuard>
            <Leaves />
          </AuthGuard>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/login',
    element:
      authStore.jwt && authStore.user ? <Navigate to="/" replace /> : <Login />,
    errorElement: <Error />,
  },
])

export default router
