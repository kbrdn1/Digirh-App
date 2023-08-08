import BtnGhost from '@components/Buttons/Ghost'
import Card from '@components/Cards/Default'
import AddCollaborator from '@components/Modals/AddCollaborator'
import ModalTeam from '@components/Modals/EditTeam'
import ProgressBar from '@components/ProgressBars/ProgressBar'
import UserTable from '@components/Tables/UserTable'
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userStore from '@stores/User'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect } from 'react'

const Users = observer(() => {

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
                  <BtnGhost iconLeft={faEye}>
                    Afficher effectif disponibles
                  </BtnGhost>
                  <BtnGhost iconLeft={faEye}>
                    Afficher effectif indisponibles
                  </BtnGhost>
                </div>
                <div className="flex flex-col gap-2 items-center md:flex-row">
                  <ModalTeam team={userStore.team} primary edit />
                  <AddCollaborator team={userStore.team} />
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
                        progress={
                              parseInt(
                                (
                                  (userStore.users.filter(
                                    (user) =>
                                      user.statut.name_statut === 'Présent'
                                  ).length /
                                    userStore.users.length) *
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

        {userStore.users && (
          <UserTable
            users={toJS(userStore.users) ? toJS(userStore.users) : []}
          />
        )}
      </div>
    </>
  )
})

export default Users
