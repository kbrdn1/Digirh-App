import TeamTable from '@components/Tables/TeamTable'
import teamStore from '@stores/Team'
import authStore from '@stores/Auth'
import { useEffect } from 'react'
import Card from '@components/Cards/Default'
import BtnGhost from '@components/Buttons/Ghost'
import BtnPrimary from '@components/Buttons/Primary'
import ProgressBar from '@components/ProgressBars/ProgressBar'
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Link } from 'react-router-dom'

const Teams = observer(() => {
  useEffect(() => {
    teamStore.getAllTeamsByOrganisation(authStore.user.team.organisation.id)
  }, [teamStore])

  return (
    <div className="flex flex-col gap-10">
      <Card
        title="Gestion des équipes"
        full
        footer={
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <div className="flex flex-col items-center md:flex-row">
              <BtnGhost iconLeft={faEye}>
                Afficher les équipes disponibles
              </BtnGhost>
              <BtnGhost iconLeft={faEye}>
                Afficher les équipes indisponibles
              </BtnGhost>
            </div>
            <div>
              <BtnPrimary>Créer une nouvelle équipe</BtnPrimary>
            </div>
          </div>
        }
      >
        {teamStore.teams ? (
          <>
            <p className="font-bold font-franklin mb-1">Informations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-black font-bold">
                    Nombre total d’équipes :
                  </span>{' '}
                  {teamStore.teams.length}
                </div>
                <div>
                  <span className="text-black font-bold">
                    Nombre d’équipes disponibles :
                  </span>{' '}
                  {teamStore.teams.filter((team) => team.isActive).length}
                </div>
                <div>
                  <span className="text-black font-bold">
                    Nombre d’équipes indisponibles :
                  </span>{' '}
                  {teamStore.teams.filter((team) => !team.isActive).length}
                </div>
                <div className="lg:w-1/2">
                  <ProgressBar
                    progress={
                      (teamStore.teams.filter((team) => team.isActive).length /
                        teamStore.teams.length) *
                      100
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-black font-bold">Effectif total:</span>{' '}
                  {teamStore.teams.reduce(
                    (acc, team) => acc + team.users.length,
                    0
                  )}
                </div>
                <div>
                  <span className="text-black font-bold">
                    Effectif présent :
                  </span>{' '}
                  ...
                </div>
                <div>
                  <span className="text-black font-bold">
                    Effectif absent :
                  </span>{' '}
                  ...
                </div>
                <div className="lg:w-1/2">
                  <ProgressBar
                    progress={
                      (teamStore.teams.reduce(
                        (acc, team) => acc + team.users.length,
                        0
                      ) /
                        teamStore.teams.length) *
                      100
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-black font-bold">
                    Frais de déplacement total :
                  </span>{' '}
                  ...
                </div>
                <div>
                  <span className="text-black font-bold">Plafond:</span> ...
                </div>
                <div className="lg:w-1/2">
                  <ProgressBar progress={80} inverse />
                </div>
                <Link
                  className="underline hover:text-primary-2 duration-200 ease-out"
                  to="/teams/1"
                >
                  Afficher les frais de déplacements
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="font-bold font-franklin">Informations</p>
            <div className="flex gap-2 text-sm font-semibold items-center">
              Chargement
              <FontAwesomeIcon icon={faSpinner} spinPulse />
            </div>
          </>
        )}
      </Card>
      <TeamTable teams={toJS(teamStore.teams)} />
    </div>
  )
})

export default Teams
