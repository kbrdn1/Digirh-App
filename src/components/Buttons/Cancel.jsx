import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'
const Cancel = ({ iconLeft, iconRight, full, ...props }) => {
  const { children, ...rest } = props
  return (
    <button
      className={`text-gray border border-gray font-bold font-franklin rounded-lg bg-transparent hover:border-danger hover:bg-red-50 hover:text-danger disabled:grayscale duration-200 py-2 px-7 flex justify-center items-center gap-2 w-full ${
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

Cancel.propTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  full: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Cancel
