import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cancel = ({
  children,
  iconLeft,
  iconRight,
  disabled,
  full,
  onClickAction,
}) => {
  return (
    <button
      className={`text-gray border border-gray font-bold font-franklin rounded-lg bg-transparent hover:border-danger hover:bg-red-50 hover:text-danger disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
        full ? ' w-full' : 'sm:w-fit'
      }`}
      disabled={disabled ? disabled : false}
      onClick={onClickAction}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {children}
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </button>
  )
}

export default Cancel
