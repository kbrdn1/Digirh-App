import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tertiary = ({
  content,
  iconLeft,
  iconRight,
  disabled,
  full,
  onClickAction,
}) => {
  return (
    <button
      className={`text-primary font-bold rounded-lg border-2 border-primary hover:bg-black disabled:bg-transparent disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-[8px] ${
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

export default Tertiary
