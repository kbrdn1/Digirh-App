import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UserTableActions from '@components/Buttons/UserTableActions'

const UserRow = ({ user }) => {
  return (
    <tr className="border-t border-light-2">
      <td className="px-6 py-4 min-w-[200px]">
        <Link to={`/user/${user.id}`} className="flex items-center gap-3">
          <img
            src={user.avatar || '/Digirh-App/avatar.png'}
            alt="avatar"
            className="w-[40px] h-[40px] rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <p className="font-medium">{user.name + ' ' + user.firstname}</p>
            <span className="text-sm text-gray">{user.email}</span>
          </div>
        </Link>
      </td>
      <td className="px-6 py-4 text-sm text-gray">{user.fonction}</td>
      <td className="px-6 py-4">
        <div
          className={`text-white font-medium font-franklin text-[11px] py-[4px] px-[8px] h-fit uppercase w-fit flex items-center rounded-[10px] ${
            user.statut.name_statut === 'Présent' ? 'bg-valid' : 'bg-danger'
          }`}
        >
          {user.statut.name_statut === 'Présent' ? 'Présent' : 'Absent'}
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray">
        {new Date(user.hiring_date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}
      </td>
      <td className="px-6 py-4 text-right w-8">
        <UserTableActions user={user} inTeam/>
      </td>
    </tr>
  )
}

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserRow
