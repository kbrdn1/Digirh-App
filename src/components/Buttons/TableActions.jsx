import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import {
  faEllipsisVertical,
  faEye,
  faTrashCan,
  faLockOpen,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalTeam from '@components/Modals/Team'

const TableActions = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false)

  window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('table-actions')) {
      setIsOpen(false)
    }
  })

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faEllipsisVertical}
        className={`cursor-pointer py-1 px-3 rounded-lg ${
          isOpen ? 'bg-primary-3 text-white' : 'text-gray-5'
        } duration-200 ease-out table-actions hover:bg-primary-3 hover:text-white`}
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
      />
      <div
        className={`bg-white divide-y divide-light-2 shadow-md h-fit rounded-xl border border-light-2 overflow-hidden duration-200 ease-out ${
          isOpen ? '' : 'hidden'
        } absolute top-6 -right-1 z-10`}
      >
        <Link
          className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-primary-5 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
          to={`/team/${team.id}`}
        >
          <FontAwesomeIcon
            icon={faEye}
            className="group-hover:rotate-12 duration-200 ease-out"
          />
          <span>Voir</span>
        </Link>
        <ModalTeam team={team} small />
        {team.isActive ? (
          <Link
            className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-amber-500 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
            to="#"
          >
            <FontAwesomeIcon
              icon={faLock}
              className="group-hover:rotate-12 duration-200 ease-out"
            />
            <span>Désactiver</span>
          </Link>
        ) : (
          <Link
            className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-amber-500 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
            to="#"
          >
            <FontAwesomeIcon
              icon={faLockOpen}
              className="group-hover:rotate-12 duration-200 ease-out"
            />
            <span>Activer</span>
          </Link>
        )}
        <Link
          className="group flex items-center gap-3 cursor-pointer text-sm text-danger-3 hover:bg-danger hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
          to="#"
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className="group-hover:rotate-12 duration-200 ease-out"
          />
          <span>Supprimer</span>
        </Link>
      </div>
    </div>
  )
}

TableActions.propTypes = {
  team: PropTypes.object.isRequired,
}

export default TableActions
