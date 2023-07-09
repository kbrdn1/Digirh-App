import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App.jsx'
import AuthGuard from './protect/AuthGuard.jsx'
import authStore from '@stores/Auth.jsx'
import Dashboard from '@pages/Dashboard.jsx'
import Login from '@pages/Login.jsx'
import Logout from '@pages/Logout.jsx'
import NotFound from '@pages/404.jsx'
import Error from '@pages/500.jsx'

const router = createBrowserRouter([
  {
    path: '/Digirh-App/',
    element: <App />,
    children: [
      {
        path: '/Digirh-App/',
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
        errorElement: <Error />,
      },
      {
        path: '/Digirh-App/login',
        element:
          authStore.jwt && authStore.user ? (
            <Navigate to="/Digirh-App/" replace />
          ) : (
            <Login />
          ),
        errorElement: <Error />,
      },
      {
        path: '/Digirh-App/logout',
        element: <Logout />,
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
