import { createContext } from 'react'
import organisationStores from '@stores/Organisation.jsx'

const OrganisationContext = createContext(organisationStores)

export default OrganisationContext
