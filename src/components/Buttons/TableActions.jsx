import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export const TableActions = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <FontAwesomeIcon
        icon={faEllipsisVertical}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`bg-primary-5 h-40 w-36 rounded-xl ${
          isOpen ? '' : 'hidden'
        } absolute`}
      >
        <a
          className="flex justify-center items-center gap-3 cursor-pointer text-light"
          href="#"
        >
          <FontAwesomeIcon icon={faEye} />
          <span href="#">Voir</span>
        </a>
      </div>
    </>
  )
}
