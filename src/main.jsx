import ReactDOM from 'react-dom/client'
import '@styles/index.css'
import '@styles/animations.css'
import { RouterProvider } from 'react-router-dom'
import router from '@router'
import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
