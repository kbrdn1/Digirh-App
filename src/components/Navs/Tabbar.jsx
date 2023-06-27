import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Searchbar from '@components/Inputs/Search'
import { useState } from 'react'

const Tabbar = (props) => {
  // get pathnames without "/" and first letter uppercase
  const [pathname, setPathname] =
    (useState < string) |
    (undefined >
      window.location.pathname.split('/')[1].charAt(0).toUpperCase() +
        window.location.pathname.split('/')[1].slice(1))

  if (pathname === '') setPathname('Tableau de bord')
  return (
    <div className="sticky bg-white flex items-center justify-between py-[8px] px-[16px] ml-16 md:ml-0 my-[20px] rounded-lg shadow-sm">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-black">
          <span className="opacity-50 text-gray">
            {pathname !== 'Tableau de bord' ? 'Tableau de bord / ' : ''}
          </span>
          {pathname}
        </p>
        <p className="text-md text-black font-semibold font-franklin first-letter:uppercase">
          {pathname}
        </p>
      </div>
      <Searchbar />
      <FontAwesomeIcon
        icon="fa-solid fa-gear"
        className="text-gray"
        size="lg"
      />
    </div>
  )
}

export default Tabbar
