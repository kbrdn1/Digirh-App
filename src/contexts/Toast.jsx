import { createContext } from 'react'
import toastStores from '@stores/Toast.jsx'

const ToastContext = createContext(toastStores)

export default ToastContext
