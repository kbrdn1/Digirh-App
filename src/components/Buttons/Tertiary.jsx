import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'
const Tertiary = ({ iconLeft, iconRight, full, ...props }) => {
  const { children, ...rest } = props
  return (
    <button
      className={`text-primary font-bold font-franklin rounded-lg border-2 border-primary hover:bg-black disabled:bg-transparent disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
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

Tertiary.propTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  full: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Tertiary
