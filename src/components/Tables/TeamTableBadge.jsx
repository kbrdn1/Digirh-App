const TeamTableBadge = ({ teamName, color }) => {
  //Récupère les premières lettres de chaque mot du nom de l'équipe
  const initials = teamName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

  return (
    <div className="flex items-center gap-5 w-fit">
      <div
        className={`w-10 h-10 rounded-md text-white flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <p className="text-sm font-semibold">{teamName}</p>
    </div>
  )
}

export default TeamTableBadge
