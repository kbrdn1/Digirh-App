import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Error = ({ text, onClose, fixed }) => {
  return (
    <div
      className={`${
        fixed ? 'fixed bottom-4 right-4' : null
      } bg-danger-2 hover:bg-danger-3 text-white font-semibold text-sm rounded-lg border shadow-lg p-4 flex gap-2 items-center duration-200 ease-out justify-between`}
    >
      <FontAwesomeIcon icon={faCircleExclamation} beat />
      <div className="self-center">{text}</div>
      {onClose && (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="cursor-pointer text-lg hover:text-slate-400 duration-200 ease-out"
        />
      )}
    </div>
  )
}

export default Error
