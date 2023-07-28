import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCarSide,
  faCircleMinus,
  faCirclePlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const Activity = ({ notification }) => {
  const { type, data, date_notif } = notification

  if (type === 'trip') {
    return (
      <div className="w-full flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faCarSide}
          className="text-2xl text-amber-600 p-2"
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg text-black">
            Déplacement - {data.amount} €
          </div>
          <p className="text-sm text-gray uppercase">
            {new Date(date_notif).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
      </div>
    )
  }

  if (type === 'leave') {
    return (
      <div className="w-full flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faCircleMinus}
          className="text-2xl text-danger-3 p-2"
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg text-black">
            Absence - {data.name_absence}
          </div>
          <p className="text-sm text-gray uppercase">
            {new Date(date_notif).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
      </div>
    )
  }

  if (type === 'return') {
    return (
      <div className="w-full flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="text-2xl text-valid p-2"
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg text-black">Retour - {data.name_absence}</div>
          <p className="text-sm text-gray uppercase">
            {new Date(date_notif).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
      </div>
    )
  }

  if (type === 'team') {
    return (
      <div className="w-full flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faUsers}
          className="text-2xl text-blue-400 p-2"
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg text-black">Equipe - {data.name_team}</div>
          <p className="text-sm text-gray uppercase">
            {new Date(date_notif).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
      </div>
    )
  }
}

export default Activity
