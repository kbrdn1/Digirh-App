import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Success = ({ text, onClose, animation }) => {
  return (
    <div
      className={`${
        animation ? 'toast-anim' : null
      } bg-valid text-white font-semibold text-sm rounded-lg shadow-lg p-4 flex gap-2 items-center duration-200 ease-out`}
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
