import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toastStore from '@stores/Toast'

const Success = ({ message, close, animation }) => {

  const handleClose = () => {
    document.querySelector('.toast-success').classList.remove('toast-anim')
    document.querySelector('.toast-success').classList.add('toast-anim-out')
    setTimeout(() => {
      toastStore.removeToast()
    }, 700)
  }

  return (
    <div
      className={`toast-success ${
        animation ? 'toast-anim' : null 
      } bg-valid text-white font-semibold text-sm rounded-lg shadow-lg p-4 flex gap-2 items-center duration-200 ease-out`}
    >
      <FontAwesomeIcon icon={faCircleCheck} beat />
      <div className="self-center">{message}</div>
      {close && (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleClose}
          className="cursor-pointer text-lg hover:text-danger duration-200 ease-out"
        />
      )}
    </div>
  )
}

export default Success
