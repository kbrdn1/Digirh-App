import { createContext } from 'react'
import countryStores from '@stores/Country.jsx'

const CountryContext = createContext(countryStores)

export default CountryContext
