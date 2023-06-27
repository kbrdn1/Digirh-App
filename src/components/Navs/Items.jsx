import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Items = ({ content, iconLeft, full, link }) => {
  return (
    <div
      className={`group flex items-center gap-4 rounded-lg font-franklin text-[1rem] text-white hover:text-secondary px-4 py-[10px] cursor-pointer ${
        full ? 'w-full' : 'w-fit'
      }`}
      onClick={() => redirect(link)}
    >
      <FontAwesomeIcon
        icon={iconLeft}
        size="md"
        className="text-white group-hover:text-secondary"
      />
      <p>{content}</p>
    </div>
  )
}

export default Items
