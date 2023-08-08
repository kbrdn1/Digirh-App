import ProgressBar from '@components/ProgressBars/ProgressBar'
import TeamTableActions from '@components/Buttons/TeamTableActions'
import TeamTableBadge from './TeamTableBadge'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TeamRow = ({ team }) => {
  if (team.name_team === 'Équipe par défaut') return null
  return (
    <tr className="border-t border-light-2">
      <td className="px-6 py-4 min-w-[200px]">
        <Link to={`/team/${team.id}`}>
          <TeamTableBadge teamName={team.name_team} color={team.color} />
        </Link>
      </td>
      <td className="px-6 py-4 text-sm text-gray">
        {/* {team.tripExpenses.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })} */}
      </td>
      <td className="px-6 py-4">
        <ProgressBar
          progress={parseInt(
            team.users.length > team.min_person
              ? 100
              : ((team.users.length / team.min_person) * 100).toFixed(0)
          )}
        />
      </td>
      <td className="px-6 py-4 text-right w-8">
        <TeamTableActions team={team} />
      </td>
    </tr>
  )
}

TeamRow.propTypes = {
  team: PropTypes.object.isRequired,
}

export default TeamRow
