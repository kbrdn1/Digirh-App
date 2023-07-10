import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Items from './Items'

const DropdownItems = ({ content, iconLeft, full, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        className={`group flex items-center gap-4 rounded-lg font-franklin text-[1rem] text-white hover:text-secondary px-4 py-[10px] cursor-pointer ${
          full ? 'w-full' : 'w-fit'
        } ${
          isOpen ? 'bg-gradient-to-r from-primary to-primary-5 ' : ''
        } transition-all`}
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
          !isOpen ? 'hidden' : ''
        }`}
      >
        {items.map((item, key) => (
          <Items
            key={key}
            content={item.content}
            iconLeft={item.iconLeft}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}

export default DropdownItems
