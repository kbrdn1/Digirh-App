import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Danger = ({
  content,
  iconLeft,
  iconRight,
  disabled,
  full,
  onClickAction,
}) => {
  return (
    <button
      className={`text-white font-bold font-franklin rounded-lg bg-danger-2 hover:bg-danger-3 disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
        full ? ' w-full' : 'sm:w-fit'
      }`}
      disabled={disabled ? disabled : false}
      onClick={onClickAction}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {content}
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </button>
  )
}

export default Danger
