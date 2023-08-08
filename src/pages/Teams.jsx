import BtnGhost from '@components/Buttons/Ghost'
import BtnPrimary from '@components/Buttons/Primary'
import Card from '@components/Cards/Default'
import ProgressBar from '@components/ProgressBars/ProgressBar'
import TeamTable from '@components/Tables/TeamTable'
import ModalEditTeam from '@components/Modals/EditTeam'
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import teamStore from '@stores/Team'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const Teams = observer(() => {
  const [activeTeams, setActiveTeams] = useState(null),
    [inactiveTeams, setInactiveTeams] = useState(null),
    creatTeamRef = useRef(null)

  useEffect(() => {
    teamStore.getAllTeams()
  }, [teamStore])

  const viewActiveTeams = async () => {
      setInactiveTeams(null)
      setActiveTeams(await teamStore.getActiveTeams())
    },
    viewInactiveTeams = async () => {
      setActiveTeams(null)
      setInactiveTeams(await teamStore.getInactiveTeams())
    },
    viewAllTeams = () => {
      setActiveTeams(null)
      setInactiveTeams(null)
    },
    handleToggleModal = () => {
      creatTeamRef.current.toggleModal()
    }

  return (
    <div className="flex flex-col gap-10">
      <ModalEditTeam ext ref={creatTeamRef} />
      <Card
        title="Gestion des équipes"
        full
        footer={
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <div className="flex flex-col items-center xl:flex-row">
              <BtnGhost iconLeft={faEye} onClick={viewActiveTeams}>
                Afficher les équipes disponibles
              </BtnGhost>
              <BtnGhost iconLeft={faEye} onClick={viewInactiveTeams}>
                Afficher les équipes indisponibles
              </BtnGhost>
              <BtnGhost iconLeft={faEye} onClick={viewAllTeams}>
                Afficher toutes les équipes
              </BtnGhost>
            </div>
            <div>
              <BtnPrimary onClick={handleToggleModal}>Créer une nouvelle équipe</BtnPrimary>
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
      {activeTeams ? (
        activeTeams.length > 0 ? (
          <TeamTable
            title="Équipes disponibles"
            teams={toJS(activeTeams)}
            full
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="font-bold font-franklin">Aucune équipe disponible</p>
          </div>
        )
      ) : inactiveTeams ? (
        inactiveTeams.length > 0 ? (
          <TeamTable
            title="Équipes indisponibles"
            teams={toJS(inactiveTeams)}
            full
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="font-bold font-franklin">
              Aucune équipe indisponible
            </p>
          </div>
        )
      ) : (
        <TeamTable
          title="Toutes les équipes"
          teams={toJS(teamStore.teams)}
          full
        />
      )}
    </div>
  )
})

export default Teams
