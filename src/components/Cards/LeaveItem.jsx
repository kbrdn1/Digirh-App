import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckDouble,
  faClock
} from '@fortawesome/free-solid-svg-icons'

const LeaveItem = ({ notification }) => {
  const { type, data, date_notif } = notification

  if (type === 'leave') {
    return (
      <div className="w-full flex gap-2 items-center">
        <FontAwesomeIcon
          icon={data.isAccepted ? faCheckDouble : faClock}
          className={`text-2xl ${
            data.isAccepted ? 'text-green-500' : 'text-amber-500'
          } p-2`}
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg text-black">
            {data.name_absence}
          </div>
          <p className="text-sm text-black font-bold flex gap-2">
            Type: <span className="text-gray font-normal">{data.type}</span>
          </p>
          <p className="text-sm text-black font-bold flex gap-2">
            Début: <span className="text-gray font-normal">{data.start_date}</span>
          </p>
          <p className="text-sm text-black font-bold flex gap-2">
            Fin: <span className="text-gray font-normal">{data.end_date}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default LeaveItem
