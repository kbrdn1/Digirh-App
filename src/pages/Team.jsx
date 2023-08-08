import BtnGhost from '@components/Buttons/Ghost'
import Card from '@components/Cards/Default'
import AddCollaborator from '@components/Modals/AddCollaborator'
import ModalTeam from '@components/Modals/EditTeam'
import ProgressBar from '@components/ProgressBars/ProgressBar'
import UserTable from '@components/Tables/UserTable'
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import teamStore from '@stores/Team'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Team = observer(() => {
  const { id } = useParams(),
    [activeUsers, setActiveUsers] = useState(null),
    [inactiveUsers, setInactiveUsers] = useState(null)

  useEffect(() => {
    teamStore.getTeamById(id)
  }, [teamStore, id])

  const viewActiveUsers = async () => {
      setInactiveUsers(null)
      setActiveUsers(await teamStore.getActiveUsers())
      console.log(activeUsers)
    },
    viewInactiveUsers = async () => {
      setActiveUsers(null)
      setInactiveUsers(await teamStore.getInactiveUsers())
      console.log(inactiveUsers)
    },
    viewAllUsers = () => {
      setActiveUsers(null)
      setInactiveUsers(null)
    }

  return (
    <>
      <div className="flex flex-col gap-10">
        {teamStore.team && (
          <Card
            title={teamStore.team.name_team}
            full
            footer={
              <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center xl:flex-row">
                  <BtnGhost iconLeft={faEye} onClick={viewActiveUsers}>
                    Afficher effectif disponibles
                  </BtnGhost>
                  <BtnGhost iconLeft={faEye} onClick={viewInactiveUsers}>
                    Afficher effectif indisponibles
                  </BtnGhost>
                  <BtnGhost iconLeft={faEye} onClick={viewAllUsers}>
                    Afficher tout l'effectif
                  </BtnGhost>
                </div>
                <div className="flex flex-col gap-2 items-center md:flex-row">
                  <ModalTeam team={teamStore.team} primary edit />
                  <AddCollaborator team={teamStore.team} />
                </div>
              </div>
            }
          >
            {teamStore.team.users ? (
              <>
                <p className="font-bold font-franklin mb-1">Informations</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col gap-2">
                    <div>
                      <span className="text-black font-bold">Statut:</span>{' '}
                      {teamStore.team.isActive ? 'Actif' : 'Inactif'}
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Effectif total:
                      </span>{' '}
                      {teamStore.team.users.length}
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Effectif présent :
                      </span>{' '}
                      {
                        teamStore.team.users.filter(
                          (user) => user.statut.name_statut === 'Présent'
                        ).length
                      }
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Effectif absent :
                      </span>{' '}
                      {
                        teamStore.team.users.filter(
                          (user) =>
                            user.statut.name_statut !== 'Présent' ||
                            user.statut.name_statut === null ||
                            user.statut.name_statut === 'Absent'
                        ).length
                      }
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Effectif minimum :
                      </span>{' '}
                      {teamStore.team.min_person}
                    </div>
                    <div className="lg:w-1/2">
                      <ProgressBar
                        progress={
                          teamStore.team.users.filter(
                            (user) => user.statut.name_statut === 'Présent'
                          ).length > teamStore.team.min_person
                            ? 100
                            : parseInt(
                                (
                                  (teamStore.team.users.filter(
                                    (user) =>
                                      user.statut.name_statut === 'Présent'
                                  ).length /
                                    teamStore.team.min_person) *
                                  100
                                ).toFixed(0)
                              )
                        }
                      />
                    </div>
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
        )}

        {teamStore.team &&
          (activeUsers ? (
            activeUsers.length > 0 ? (
              <UserTable users={activeUsers} />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold font-franklin">
                  Aucun collaborateurs disponibles
                </p>
              </div>
            )
          ) : inactiveUsers ? (
            inactiveUsers.length > 0 ? (
              <UserTable users={inactiveUsers} />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold font-franklin">
                  Aucun collaborateurs indisponibles
                </p>
              </div>
            )
          ) : (
            <UserTable
              users={
                toJS(teamStore.team.users) ? toJS(teamStore.team.users) : []
              }
            />
          ))}
      </div>
    </>
  )
})

export default Team
