import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckDouble,
  faClock
} from '@fortawesome/free-solid-svg-icons'

const TripItem = ({ notification }) => {
  const { type, data, date_notif } = notification

  if (type === 'trip') {
    return (
      <div className="w-full flex gap-2 items-center">
        <FontAwesomeIcon
          icon={data.isVerified ? faCheckDouble : faClock}
          className={`text-2xl ${
            data.isVerified ? 'text-green-500' : 'text-amber-500'
          } p-2`}
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg text-black">
            Déplacement du&nbsp; 
            {new Date(date_notif).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
          <p className="text-sm text-black font-bold flex gap-2">
            Prix: <span className="text-gray font-normal">{data.amount} €</span>
          </p>
          <p className="text-sm text-black font-bold flex gap-2">
            Distance: <span className="text-gray font-normal">{data.distance} km</span>
          </p>
        </div>
      </div>
    )
  }
}

export default TripItem
