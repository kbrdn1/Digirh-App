import ProfileCard from '@components/Cards/Profile'
import BtnSecondary from '@components/Buttons/Secondary'
import BtnGhost from '@components/Buttons/Ghost'
import Card from '@components/Cards/Default'
import ModalProfile from '@components/Modals/Profile'
import ModalLeave from '@components/Modals/Leave'
import ModalTrip from '@components/Modals/Trip'
import ActivityItem from '@components/Cards/ActivityItem'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import authStore from '@stores/Auth'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'

// Notification store for the demo
const notificationStore = {
  notification: null,
  notifications: [
    {
      id: 1,
      type: 'trip',
      data: {
        id_trip_expense: 1,
        ticket:
          'https://www.google.com/maps/dir/?api=1&destination=Paris&origin=Lyon&travelmode=driving',
        amount: 56.78,
        distance: 450,
        isVerified: true,
      },
      date_notif: '2023-09-05 14:45:00',
      reference: 1,
      isRead: false,
    },
    {
      id: 2,
      type: 'leave',
      data: {
        id_absence: 2,
        name_absence: 'Congés payés',
        document: 'https://www.google.com',
        start_date: '2023-08-11',
        end_date: '2023-08-15',
        isAccepted: false,
      },
      date_notif: '2023-08-11 19:30:00',
      reference: 2,
      isRead: false,
    },
    {
      id: 3,
      type: 'return',
      data: {
        id_absence: 3,
        name_absence: 'Congés maladie',
        document: 'https://www.google.com',
        start_date: '2023-07-17',
        end_date: '2023-07-17',
        isAccepted: true,
      },
      date_notif: '2023-07-17 8:30:00',
      reference: 3,
      isRead: false,
    },
    {
      id: 4,
      type: 'team',
      data: {
        id_team: 1,
        name_team: 'Développement Web',
        description_team:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.',
        min_person: 3,
        isActive: true,
      },
      date_notif: '2023-07-01 11:00:00',
      reference: 1,
      isRead: false,
    },
  ],
}

const Profile = observer(() => {
  const user = authStore.user,
    navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          {user && (
            <ProfileCard
              user={user}
              full
              footer={<ModalProfile user={user} primary />}
            />
          )}
          <Card
            full
            title="Demandes d’absences"
            footer={<ModalLeave user={user} />}
          >
            <div className="flex flex-col gap-1">
              <p className="font-bold font-franklin">Absences disponibles</p>
              <div className="flex flex-col gap-1 text-sm">
                <div>
                  <span className="text-black font-bold">Congés :</span>
                  <span> 5 jours</span>
                </div>
                <div>
                  <span className="text-black font-bold">RTT :</span>
                  <span> 5 jours</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <Card
            full
            title="Aperçu de l'activité"
            footer={
              <>
                <BtnSecondary onClick={() => navigate('/calendar')}>
                  Voir sur le calendrier
                </BtnSecondary>
                <BtnGhost
                  iconLeft={faEye}
                  onClick={() => navigate('/activity')}
                >
                  Voir toute l’activité
                </BtnGhost>
              </>
            }
          >
            {notificationStore.notifications.map((notif, index) => (
              <div key={index}>
                <ActivityItem notification={notif} />
                <div className="ml-5 w-1 h-3 bg-slate-200"></div>
              </div>
            ))}
          </Card>
          <Card
            full
            title="Demandes de frais de déplacement"
            footer={<ModalTrip user={user} />}
          >
            <div className="flex flex-col gap-1">
              <p className="font-bold font-franklin">Informations</p>
              <div className="flex flex-col gap-1 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae mauris id arcu sodales, euismod aliquam augue.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
})

export default Profile
