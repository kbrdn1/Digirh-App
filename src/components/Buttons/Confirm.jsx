import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'
const Confirm = ({ iconLeft, iconRight, full, iconSpin, ...props }) => {
  const { children, ...rest } = props
  return (
    <button
      className={`text-white font-bold font-franklin rounded-lg bg-valid hover:bg-valid-2 disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
        full ? ' w-full' : 'sm:w-fit'
      }`}
      {...rest}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {children}
      {iconRight && <FontAwesomeIcon icon={iconRight} spinPulse={iconSpin} />}
    </button>
  )
}

Confirm.propTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  full: PropTypes.bool,
  iconSpin: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Confirm
