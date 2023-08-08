import ProTypes from 'prop-types'
import UserRow from './UserRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const UserTable = ({ users }) => {
  return (
    <div className="w-full font-franklin">
      <div className="relative before:content-['Collaborateurs'] before:bg-primary before:w-[calc(100%-2rem)] before:z-10 before:left-1/2 before:-translate-x-1/2 -top-6 before:p-5 before:rounded-xl before:absolute before:text-white before:items-center before:justify-start before:shadow-xl before:sm:flex before:font-semibold before:font-franklin"></div>
      <div className="overflow-x-scroll table-scroll">
        <table className="w-full text-left h-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="font-normal text-gray-5 text-xs">
              <th scope="col" className="px-6 pb-4 pt-14">
                Collaborateurs
              </th>
              <th scope="col" className="px-6 pb-4 pt-14">
                Fonctions
              </th>
              <th scope="col" className="px-6 pb-4 pt-14">
                Statuts
              </th>
              <th scope="col" className="px-6 pb-4 pt-14">
                Embauches
              </th>
              <th scope="col" className="px-6 pb-4 pt-14 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users ? (
              users.map((user, index) => <UserRow user={user} key={index} />)
            ) : (
              <tr className="border-t border-light-2 px-3">
                <td
                  className="px-6 py-4 text-sm text-gray flex items-center gap-2 font-semibold"
                  width={'250px'}
                >
                  Chargement des données
                  <FontAwesomeIcon icon={faSpinner} spinPulse />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

UserTable.propTypes = {
  users: ProTypes.array,
}

export default UserTable
