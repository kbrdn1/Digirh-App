import { createContext } from 'react'
import tripStores from '@stores/Trip.jsx'

const TripContext = createContext(tripStores)

export default TripContext
