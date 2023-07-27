import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Success = ({ text, onClose, fixed }) => {
  return (
    <div
      className={`${
        fixed ? 'fixed bottom-4 right-4' : null
      } bg-valid text-white font-semibold text-sm rounded-lg border shadow-lg p-4 flex gap-2 items-center duration-200 ease-out`}
    >
      <FontAwesomeIcon icon={faCircleCheck} beat />
      <div className="self-center">{text}</div>
      {onClose && (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="cursor-pointer text-lg hover:text-danger duration-200 ease-out"
        />
      )}
    </div>
  )
}

export default Success
