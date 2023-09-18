import BtnGhost from '@components/Buttons/Ghost'
import Card from '@components/Cards/Default'
import ModalEditUser from '@components/Modals/EditUser'
import ProgressBar from '@components/ProgressBars/ProgressBar'
import UserTable from '@components/Tables/UserTable'
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userStore from '@stores/User'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'

const Users = observer(() => {
  const [activeUsers, setActiveUsers] = useState(null),
    [inactiveUsers, setInactiveUsers] = useState(null),
    viewActiveUsers = async () => {
      setInactiveUsers(null)
      const users = await userStore.getActiveUsers()
      setActiveUsers(users)
    },
    viewInactiveUsers = async () => {
      setActiveUsers(null)
      const users = await userStore.getInactiveUsers()
      setInactiveUsers(users)
    },
    resetUsers = () => {
      setActiveUsers(null)
      setInactiveUsers(null)
    }

  useEffect(() => {
    userStore.getAllUsers()
  }, [userStore])

  return (
    <>
      <div className="flex flex-col gap-10">
        {userStore.users && (
          <Card
            title="Liste des collaborateurs"
            full
            footer={
              <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center md:flex-row">
                  <BtnGhost iconLeft={faEye} onClick={viewActiveUsers}>
                    Afficher effectif disponibles
                  </BtnGhost>
                  <BtnGhost iconLeft={faEye} onClick={viewInactiveUsers}>
                    Afficher effectif indisponibles
                  </BtnGhost>
                  <BtnGhost iconLeft={faEye} onClick={resetUsers}>
                    Afficher tout l'effectif
                  </BtnGhost>
                </div>
                <div className="flex flex-col gap-2 items-center md:flex-row">
                  <ModalEditUser />
                </div>
              </div>
            }
          >
            {userStore.users ? (
              <>
                <p className="font-bold font-franklin mb-1">Informations</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col gap-2">
                    <div>
                      <span className="text-black font-bold">
                        Effectif total:
                      </span>{' '}
                      {userStore.users.length}
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Effectif présent :
                      </span>{' '}
                      {
                        userStore.users.filter(
                          (user) => user.statut.name_statut === 'Présent'
                        ).length
                      }
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Effectif absent :
                      </span>{' '}
                      {
                        userStore.users.filter(
                          (user) =>
                            user.statut.name_statut !== 'Présent' ||
                            user.statut.name_statut === null ||
                            user.statut.name_statut === 'Absent'
                        ).length
                      }
                    </div>
                    <div className="lg:w-1/2">
                      <ProgressBar
                        progress={parseInt(
                          (
                            (userStore.users.filter(
                              (user) => user.statut.name_statut === 'Présent'
                            ).length /
                              userStore.users.length) *
                            100
                          ).toFixed(0)
                        )}
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

        {userStore.users &&
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

export default Users
