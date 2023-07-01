import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cancel = ({
  content,
  iconLeft,
  iconRight,
  disabled,
  full,
  onClickAction,
}) => {
  return (
    <button
      className={`text-red-3 border border-x-red-600 font-bold font-franklin rounded-lg bg-transparent hover:bg-red-4 disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-[8px] ${
        full ? ' w-full' : 'w-fit'
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

export default Cancel