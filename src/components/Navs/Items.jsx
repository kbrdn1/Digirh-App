import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Items = ({ content, iconLeft, full, link }) => {
  const navigate = useNavigate()

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

export default Items
