import ProgressBar from '@components/ProgressBars/ProgressBar'
import TableActions from '@components/Buttons/TableActions'
import TeamTableBadge from './TeamTableBadge'
import { Link } from 'react-router-dom'

const TeamRow = ({ team }) => {
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
          progress={
            team.users.length > team.min_person
              ? 100
              : (team.users.length / team.min_person) * 100
          }
        />
      </td>
      <td className="px-6 py-4 text-right w-8">
        <TableActions team={team} />
      </td>
    </tr>
  )
}

export default TeamRow
