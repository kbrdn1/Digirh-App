import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Items from './Items'

import PropTypes from 'prop-types'

const DropdownItems = ({ content, iconLeft, full, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        className={`group flex items-center gap-4 rounded-lg font-franklin text-[1rem] text-white hover:text-secondary px-4 py-[10px] cursor-pointer ${
          full ? 'w-full' : 'w-fit'
        } bg-gradient-to-r ${
          isOpen
            ? 'from-primary to-primary-5 bg-opacity-100 '
            : 'from-transparent to-transparent bg-opacity-0'
        } duration-300 ease-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={iconLeft}
          className="text-white group-hover:text-secondary"
        />
        <p>{content}</p>
        <FontAwesomeIcon
          icon={faCaretLeft}
          className={`ml-auto text-white ${
            isOpen ? 'transform -rotate-90' : ''
          } transition-all`}
        />
      </div>
      <div
        className={`flex flex-col justify-end gap-1 pl-10 ${
          !isOpen ? 'h-0' : 'mt-2 h-fit p-1'
        } duration-300 ease-out overflow-y-hidden`}
      >
        {items.map((item, key) => (
          <Items
            key={key}
            iconLeft={item.iconLeft}
            link={item.link}
            full
            className={`${isOpen ? 'w-fit h-fit' : 'h-0 w-0'}`}
          >
            {item.content}
          </Items>
        ))}
      </div>
    </div>
  )
}

DropdownItems.propTypes = {
  content: PropTypes.string.isRequired,
  iconLeft: PropTypes.object.isRequired,
  full: PropTypes.bool,
  items: PropTypes.array.isRequired,
}

export default DropdownItems
