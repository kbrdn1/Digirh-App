import { createContext } from 'react'
import notificationStores from '@stores/Notification.jsx'

const NotificationContext = createContext(notificationStores)

export default NotificationContext
