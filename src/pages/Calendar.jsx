import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import frLocale from '@fullcalendar/core/locales/fr'

// Notification store for the demo
const notificationStore = {
  notification: null,
  notifications: [
    {
      id: 1,
      type: 'trip',
      data: {
        amount: 56.78,
      },
      date_notif: '2023-09-05 14:45:00',
    },
    {
      id: 2,
      type: 'leave',
      data: {
        name_absence: 'Congés payés',
      },
      date_notif: '2023-08-11 19:30:00',
    },
    {
      id: 3,
      type: 'return',
      data: {
        name_absence: 'Congés maladie',
      },
      date_notif: '2023-07-17 8:30:00',
    },
    {
      id: 4,
      type: 'team',
      data: {
        name_team: 'Développement Web',
      },
      date_notif: '2023-07-01 11:00:00',
    },
  ],
}

const Calendar = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-5xl mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridYear,dayGridMonth,dayGridWeek,dayGridDay',
          }}
          events={
            // notificationStore.notifications.map((notification) => {
            //   return {
            //     title:
            //       notification.data.name_absence ||
            //       notification.data.name_team ||
            //       'Déplacement',
            //     date: notification.date_notif,
            //     color:
            //       notification.type === 'trip'
            //         ? '#F59E0B'
            //         : notification.type === 'leave'
            //         ? '#EF4444'
            //         : notification.type === 'return'
            //         ? '#10B981'
            //         : '#3B82F6',
            //   }
            // }).push(
            [
              {
                title: 'Congés payés',
                start: '2023-08-11',
                end: '2023-08-13',
                color: '#EF4444',
                display: 'background',
              },
            ]
            //)
          }
          locales={[frLocale]}
          locale={'fr'}
        />
      </div>
    </div>
  )
}

export default Calendar
