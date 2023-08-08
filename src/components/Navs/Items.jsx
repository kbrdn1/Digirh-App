import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Items = ({ iconLeft, full, link, ...props }) => {
  const { children, className, ...rest } = props
  return (
    <NavLink
      className={`group flex items-center gap-4 rounded-lg font-franklin text-[1rem] text-white hover:text-secondary px-4 py-[10px] cursor-pointer ${
        full ? 'w-full' : 'w-fit'
      } duration-300 ease-out overflow-hidden ${className}`}
      to={link}
      {...rest}
    >
      <FontAwesomeIcon icon={iconLeft} />
      <p>{children}</p>
    </NavLink>
  )
}

Items.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconLeft: PropTypes.object.isRequired,
  full: PropTypes.bool,
  link: PropTypes.string.isRequired,
}

export default Items
