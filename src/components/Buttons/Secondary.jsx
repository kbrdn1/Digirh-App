import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'
const Secondary = ({ iconLeft, iconRight, full, ...props }) => {
  const { children, ...rest } = props
  return (
    <button
      className={`text-white font-bold font-franklin rounded-lg bg-primary hover:bg-primary-3 disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
        full ? ' w-full' : 'sm:w-fit'
      }`}
      {...rest}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {children}
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </button>
  )
}

Secondary.propTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  full: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Secondary
