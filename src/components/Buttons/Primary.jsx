import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Primary = ({
  content,
  iconLeft,
  iconRight,
  disabled,
  full,
  onClickAction,
  iconSpin,
}) => {
  return (
    <button
      className={`text-white font-bold font-nunito rounded-lg bg-primary-5 hover:bg-primary-hover disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-[8px] ${
        full ? ' w-full' : 'w-fit'
        }`}
      type='submit'
      disabled={disabled ? disabled : false}
      onClick={onClickAction}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {content}
      {iconRight && <FontAwesomeIcon icon={iconRight} spinPulse={iconSpin} />}
    </button>
  )
}

export default Primary
