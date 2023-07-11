import PropTypes from 'prop-types'

const TeamTableBadge = ({ teamName, color }) => {
  //Récupère les premières lettres de chaque mot du nom de l'équipe
  const initials = teamName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
  const displayName = teamName.includes(' ') ? teamName.toUpperCase() : teamName

  return (
    <div className="flex items-center gap-5">
      <div
        className={`w-10 h-10 rounded-md text-white flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <p className="text-sm">{displayName}</p>
    </div>
  )
}

TeamTableBadge.propTypes = {
  teamName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default TeamTableBadge
