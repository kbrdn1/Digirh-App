import Card from '@components/Cards/Default'
import ModalTrip from '@components/Modals/Trip'
import TripItem from '@components/Cards/TripItem'
import BtnSecondary from '@components/Buttons/Secondary'
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
        ticket: 'https://www.google.com',
        amount: 56.78,
        distance: 12.34,
        isVerified: false,
      },
      date_notif: '2023-09-05 14:45:00',
      reference: 1,
      isRead: false,
    },
    {
      id: 2,
      type: 'trip',
      data: {
        id_trip_expense: 2,
        ticket: 'https://www.google.com',
        amount: 16.7,
        distance: 5.67,
        isVerified: false,
      },
      date_notif: '2023-07-15 10:50:00',
      reference: 2,
      isRead: false,
    },
    {
      id: 3,
      type: 'trip',
      data: {
        id_trip_expense: 3,
        ticket: 'https://www.google.com',
        amount: 12.34,
        distance: 3.45,
        isVerified: true,
      },
      date_notif: '2023-03-22 8:10:00',
      reference: 3,
      isRead: false,
    },
  ],
}

const Trip = observer(() => {
  const user = authStore.user,
    navigate = useNavigate()

  return (
    <div className="flex flex-col gap-5">
      <Card
        full
        title="Demandes de frais de déplacement"
        footer={<ModalTrip user={user} primary />}
      >
        <div className="flex flex-col gap-1">
          <p className="font-bold font-franklin">Informations</p>
          <div className="flex flex-col gap-1 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            mauris id arcu sodales, euismod aliquam augue.
          </div>
        </div>
      </Card>
      <Card
        full
        title="Mes demandes"
        footer={
          <BtnSecondary onClickAction={() => navigate('/calendar')}>
            Voir sur le calendrier
          </BtnSecondary>
        }
      >
        {notificationStore.notifications.map((notif, index) => (
          <div key={index}>
            <TripItem notification={notif} />
            <div className="ml-5 w-1 h-3 bg-slate-200"></div>
          </div>
        ))}
      </Card>
    </div>
  )
})

export default Trip
