import TeamRow from './TeamRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const items = [
  {
    name: 'Design',
    color: '#DF84CB',
    tripExpenses: 10000,
    progress: 100,
  },
  {
    name: 'Web Development',
    color: '#FBBF24',
    tripExpenses: 12500,
    progress: 50,
  },
  {
    name: 'Marketing',
    color: '#34D399',
    tripExpenses: 5000,
    progress: 75,
  },
  {
    name: 'Sales',
    color: '#3B82F6',
    tripExpenses: 7500,
    progress: 25,
  },
]

const TeamTable = ({ teams }) => {
  return (
    <div className="relative w-full font-franklin">
      <h1 className="w-[calc(100%-2rem)] mx-auto absolute -top-6 inset-x-0 bg-gradient-to-r from-primary to-primary-5 p-5 rounded-xl text-white items-center justify-start shadow-xl sm:flex font-semibold font-franklin">
        Equipes
      </h1>
      <div className="overflow-x-scroll">
        <table className="w-full text-left h-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="font-normal text-gray-5 text-xs">
              <th scope="col" className="px-6 pb-4 pt-14">
                Equipes
              </th>
              <th scope="col" className="px-6 pb-4 pt-14">
                Deplacements
              </th>
              <th scope="col" className="px-6 pb-4 pt-14">
                Effectif
              </th>
              <th scope="col" className="px-6 pb-4 pt-14 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teams ? (
              teams.map((team, index) => <TeamRow team={team} key={index} />)
            ) : (
              <tr className="border-t border-light-2 px-3">
                <td className="px-6 py-4 text-sm text-gray flex items-center gap-2 font-semibold" width={'250px'}>
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

export default TeamTable
