import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Confirm = ({
  children,
  iconLeft,
  iconRight,
  disabled,
  full,
  onClickAction,
  iconSpin,
}) => {
  return (
    <button
      className={`text-white font-bold font-franklin rounded-lg bg-valid hover:bg-valid-2 disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
        full ? ' w-full' : 'sm:w-fit'
      }`}
      disabled={disabled ? disabled : false}
      onClick={onClickAction}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {children}
      {iconRight && <FontAwesomeIcon icon={iconRight} spinPulse={iconSpin} />}
    </button>
  )
}

export default Confirm
