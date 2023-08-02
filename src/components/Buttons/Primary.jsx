import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'
const Primary = ({ iconLeft, iconRight, full, iconSpin, ...props }) => {
  const { children, ...rest } = props
  return (
    <button
      className={`text-white font-bold font-franklin rounded-lg bg-primary-5 hover:bg-primary-hover disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
        full ? ' w-full' : 'sm:w-fit'
      }`}
      type="submit"
      {...rest}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {children}
      {iconRight && <FontAwesomeIcon icon={iconRight} spinPulse={iconSpin} />}
    </button>
  )
}

Primary.propTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  full: PropTypes.bool,
  iconSpin: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Primary
