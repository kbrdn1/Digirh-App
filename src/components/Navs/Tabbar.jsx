import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Searchbar from '@components/Inputs/Search'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react'
import authStore from '@stores/Auth'

const Tabbar = observer(() => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  if (!authStore.user && !authStore.jwt) return null

  return (
    <div className="sticky bg-white flex items-center justify-between py-[8px] px-[16px] ml-16 md:ml-0 mb-5 rounded-lg shadow-sm duration-300 ease-out">
      <div className="flex flex-col gap-1">
        <div className="text-sm text-black">
          <span className="opacity-50 text-gray">Dashboard</span>
          {path ? ' / ' : null}
          {path ? <span className="first-letter:uppercase">{path}</span> : null}
        </div>
        <p className="text-md text-black font-semibold font-franklin first-letter:uppercase">
          {path ? path : 'Dashboard'}
        </p>
      </div>
      <Searchbar />
      <FontAwesomeIcon icon={faCog} className="hidden lg:flex text-gray" size="lg" />
    </div>
  )
})

export default Tabbar
