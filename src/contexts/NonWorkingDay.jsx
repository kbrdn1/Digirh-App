import { createContext } from 'react'
import nonWorkingDayStores from '@stores/NonWorkingDay.jsx'

const NonWorkingDayContext = createContext(nonWorkingDayStores)

export default NonWorkingDayContext
