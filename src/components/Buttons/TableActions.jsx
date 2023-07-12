import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisVertical,
  faEye,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const TableActions = () => {
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
        } duration-200 ease-out table-actions`}
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
      />
      <div
        className={`bg-white divide-y divide-light-2 shadow-sm h-fit rounded-xl border border-light-2 overflow-hidden duration-200 ease-out ${
          isOpen ? '' : 'hidden'
        } absolute top-6 -right-1 z-10`}
      >
        <Link
          className="flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-primary-5 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
          to="#"
        >
          <FontAwesomeIcon icon={faEye} />
          <span href="#">Voir</span>
        </Link>
        <Link
          className="flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-primary-5 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
          to="#"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          <span href="#">Editer</span>
        </Link>
        <Link
          className="flex items-center gap-3 cursor-pointer text-sm text-red-500 hover:bg-danger hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
          to="#"
        >
          <FontAwesomeIcon icon={faTrashCan} />
          <span href="#">Supprimer</span>
        </Link>
      </div>
    </div>
  )
}

export default TableActions
