import TeamRow from './TeamRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

// const items = [
//   {
//     name: 'Design',
//     color: '#DF84CB',
//     tripExpenses: 10000,
//     progress: 100,
//   },
//   {
//     name: 'Web Development',
//     color: '#FBBF24',
//     tripExpenses: 12500,
//     progress: 50,
//   },
//   {
//     name: 'Marketing',
//     color: '#34D399',
//     tripExpenses: 5000,
//     progress: 75,
//   },
//   {
//     name: 'Sales',
//     color: '#3B82F6',
//     tripExpenses: 7500,
//     progress: 25,
//   },
// ]

const TeamTable = ({ teams }) => {
  return (
    <div className="w-full font-franklin shadow-md">
      <div className="relative before:content-['Equipes'] before:w-[calc(100%-2rem)] before:z-10 before:left-1/2 before:-translate-x-1/2 -top-6 before:bg-gradient-to-r before:from-primary before:to-primary-5 before:p-5 before:rounded-xl before:absolute before:text-white before:items-center before:justify-start before:shadow-xl before:sm:flex before:font-semibold before:font-franklin"></div>
      <div className="table-scroll">
        <table className="w-full text-left h-full bg-white rounded-xl">
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
          <tbody className="">
            {teams ? (
              teams.map((team, index) => <TeamRow team={team} key={index} />)
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

TeamTable.propTypes = {
  teams: PropTypes.array,
}

export default TeamTable
