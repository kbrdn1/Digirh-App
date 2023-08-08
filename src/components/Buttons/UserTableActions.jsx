import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import ModalUser from '@components/Modals/EditUser'
import {
  faEllipsisVertical,
  faEye,
  faLock,
  faLockOpen,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const UserTableActions = ({ user, inTeam }) => {
  const [isOpen, setIsOpen] = useState(false),
    ref = useRef(null)

  window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('table-actions')) {
      setIsOpen(false)
    }
  })

  const handleToggleModal = () => {
    ref.current.toggleModal()
  }

  return (
    <>
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
            to={`/user/${user.id}`}
          >
            <FontAwesomeIcon
              icon={faEye}
              className="group-hover:rotate-12 duration-200 ease-out"
            />
            <span>Voir</span>
          </Link>
          <div
            className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-primary-5 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
            onClick={handleToggleModal}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="group-hover:rotate-12 duration-200 ease-out"
            />
            <span>Editer</span>
          </div>

          {inTeam ? (
            <div className="group flex items-center gap-3 cursor-pointer text-sm text-danger-3 hover:bg-danger hover:text-white font-semibold px-4 py-2 duration-200 ease-out">
              <FontAwesomeIcon
                icon={faTrashCan}
                className="group-hover:rotate-12 duration-200 ease-out"
              />
              <span>Supprimer</span>
            </div>
          ) : user.isActive ? (
            <div className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-amber-400 hover:text-white font-semibold px-4 py-2 duration-200 ease-out">
              <FontAwesomeIcon
                icon={faLock}
                className="group-hover:rotate-12 duration-200 ease-out"
              />
              <span>Désactiver</span>
            </div>
          ) : (
            <div className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-amber-400 hover:text-white font-semibold px-4 py-2 duration-200 ease-out">
              <FontAwesomeIcon
                icon={faLockOpen}
                className="group-hover:rotate-12 duration-200 ease-out"
              />
              <span>Activer</span>
            </div>
          )}
        </div>
      </div>
      <ModalUser ref={ref} user={user} ext />
    </>
  )
}

UserTableActions.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserTableActions
