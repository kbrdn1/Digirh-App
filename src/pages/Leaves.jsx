import Card from '@components/Cards/Default';
import ModalLeave from '@components/Modals/Leave';
import LeaveItem from '@components/Cards/LeaveItem';
import BtnSecondary from '@components/Buttons/Secondary';
import authStore from '@stores/Auth';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

// Notification store for the demo
const notificationStore = {
  notification: null,
  notifications: [
    {
      id: 1,
      type: 'leave',
      data: {
        id_absence: 1,
        name_absence: 'Congés payés',
        document: 'https://www.google.com',
        start_date: '2023-09-05',
        end_date: '2023-09-10',
        isAccepted: false,
        type: 'CP',
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
        name_absence: 'RTT',
        document: 'https://www.google.com',
        start_date: '2023-07-15',
        end_date: '2023-07-20',
        isAccepted: true,
        type: 'RTT',
      },
      date_notif: '2023-07-15 10:50:00',
      reference: 2,
      isRead: false,
    },
    {
      id: 3,
      type: 'leave',
      data: {
        id_absence: 3,
        name_absence: 'Congés payés',
        document: 'https://www.google.com',
        start_date: '2023-03-22',
        end_date: '2023-03-27',
        isAccepted: true,
        type: 'CP',
      },
      date_notif: '2023-03-22 8:10:00',
      reference: 3,
      isRead: false,
    },
  ],
}

const Leave = observer(() => {
  const user = authStore.user,
    navigate = useNavigate()
  return (
    <div className="flex flex-col gap-5">
      <Card
        full
        title="Demandes d'absences"
        footer={<ModalLeave user={user} primary />}
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
      <Card full title="Mes demandes d'absences"
        footer={
          <BtnSecondary
            onClickAction={() => navigate('/calendar')}
          >
            Voir sur calendrier
        </BtnSecondary>
      }
      >
        <div className="flex flex-col gap-5">
          {notificationStore.notifications.map((notification) => (
            <div key={notification.id}>
              <LeaveItem notification={notification} />
              <div className="ml-5 w-1 h-3 bg-slate-200"></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
})

export default Leave;