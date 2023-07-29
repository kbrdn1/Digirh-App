import ProgressBar from '@components/ProgressBars/ProgressBar'
import TeamTableBadge from './TeamTableBadge'
import { useState } from 'react'
import TableActions from '@components/Buttons/TableActions'

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

const TeamTable = () => {
  const [activeActions, setActiveActions] = useState(-1)

  const toggleActions = (index) => {
    if (activeActions === index) {
      setActiveActions(-1)
    } else {
      setActiveActions(index)
    }
  }

  return (
    <div className="relative w-full font-franklin">
      <h1 className="w-[calc(100%-2rem)] mx-auto absolute -top-6 inset-x-0 bg-gradient-to-r from-primary to-primary-5 p-5 rounded-xl text-white items-center justify-start hidden shadow-xl sm:flex font-semibold font-franklin">
        Equipes
      </h1>
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
          {items.map((item, index) => (
            <tr
              key={index}
              className={`border-t border-light-2 ${
                activeActions === index ? 'bg-gray-1' : ''
              }`}
            >
              <td className="px-6 py-4 min-w-[200px]">
                <TeamTableBadge teamName={item.name} color={item.color} />
              </td>
              <td className="px-6 py-4 text-sm text-gray">
                {item.tripExpenses.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </td>
              <td className="px-6 py-4">
                <ProgressBar progress={item.progress} />
              </td>
              <td className="px-6 py-4 text-right w-8">
                <TableActions
                  active={activeActions === index}
                  toggleActions={() => toggleActions(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeamTable
