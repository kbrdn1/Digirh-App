import authStore from '@stores/Auth'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import organisationStore from '../stores/Organisation'

const Organization = observer(() => {
    const { id } = useParams()
    
  if (authStore.user.team.organisation.id !== parseInt(id)) {
    return <Navigate to="/" />
  }

  useEffect(() => {
      
      organisationStore.getOrganisationByUserId(authStore.getUser().id) === parseInt(id)
  }, [])

    return (<div>
        {organisationStore.organisation.name_organisation}
      
  </div>)
})

export default Organization
