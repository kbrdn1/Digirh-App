import { createHashRouter, Navigate } from 'react-router-dom'
import App from '../App.jsx'
import AuthGuard from './protect/AuthGuard.jsx'
import authStore from '@stores/Auth.jsx'
import Dashboard from '@pages/Dashboard.jsx'
import Login from '@pages/Login.jsx'
import Logout from '@pages/Logout.jsx'
import NotFound from '@pages/404.jsx'
import Error from '@pages/500.jsx'
import Teams from '@pages/Teams.jsx'

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
        path: '/login',
        element:
          authStore.jwt && authStore.user ? (
            <Navigate to="/" replace />
          ) : (
            <Login />
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
        path: '*',
        element: <NotFound />,
        errorElement: <Error />,
      },
    ],
  },
])

export default router
