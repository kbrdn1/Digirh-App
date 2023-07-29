import { createHashRouter, Navigate } from 'react-router-dom'
import App from '../App'
import AuthGuard from './protect/AuthGuard'
import authStore from '@stores/Auth'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import Logout from '@pages/Logout'
import NotFound from '@pages/404'
import Error from '@pages/500'
import Teams from '@pages/Teams'
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
        path: '/organization/teams',
        element: (
          <AuthGuard>
            <Teams />
          </AuthGuard>
        ),
        errorElement: <Error />,
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
