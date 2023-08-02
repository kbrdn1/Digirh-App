import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toastStore from '@stores/Toast'
import PropTypes from 'prop-types'

const Error = ({ message, close, animation }) => {
  const handleClose = () => {
    document.querySelector('.toast-error').classList.remove('toast-anim')
    document.querySelector('.toast-error').classList.add('toast-anim-out')
    setTimeout(() => {
      toastStore.removeToast()
    }, 700)
  }

  return (
    <div
      className={`toast-error ${
        animation ? 'toast-anim' : null
      } bg-danger-2 hover:bg-danger-3 text-white font-semibold text-sm rounded-lg shadow-lg p-4 flex gap-2 items-center duration-200 ease-out justify-between`}
    >
      <FontAwesomeIcon icon={faCircleExclamation} beat />
      <div className="self-center">{message}</div>
      {close && (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleClose}
          className="cursor-pointer text-lg hover:text-slate-400 duration-200 ease-out"
        />
      )}
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  close: PropTypes.bool,
  animation: PropTypes.bool,
}

export default Error
