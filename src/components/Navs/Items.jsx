import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Items = ({ content, iconLeft, full, link }) => {
  return (
    <NavLink
      className={`group flex items-center gap-4 rounded-lg font-franklin text-[1rem] text-white hover:text-secondary px-4 py-[10px] cursor-pointer ${
        full ? 'w-full' : 'w-fit'
      }`}
      to={link}
    >
      <FontAwesomeIcon icon={iconLeft} />
      <p>{content}</p>
    </NavLink>
  )
}

Items.propTypes = {
  content: PropTypes.string.isRequired,
  iconLeft: PropTypes.object.isRequired,
  full: PropTypes.bool,
  link: PropTypes.string.isRequired,
}

export default Items
