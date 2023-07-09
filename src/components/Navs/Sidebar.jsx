import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import ButtonDelete from '@components/Buttons/ButtonDelete'
import ButtonSecondary from '@components/Buttons/ButtonSecondary'
import Items from './Items'
import DropdownItems from './DropdownItems.jsx'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openOption, setOpenOption] = useState(false)
  const user = useContext(UserContext)

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setIsOpen(false)
    }
  })

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <button
        className={`fixed top-7 left-4 z-10 bg-black rounded-lg w-[48px] h-[48px] flex items-center justify-center transition-all md:hidden ${
          isOpen ? 'hidden' : 'block'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="text-white"
          size="lg"
        />
      </button>
      <aside
        className={`fixed z-10 bg-black flex flex-col justify-between gap-2 rounded-xl md:w-[256px] transition-all md:translate-x-0 md:left-4 ${
          !isOpen ? '-translate-x-full' : 'left-4'
        }`}
      >
        <Link
          href="/"
          className="w-full py-[22px] flex items-center justify-center border-b border-primary"
        >
          <Image src={logoDigirh} alt="logo_digirh" className="w-[146px]" />
        </Link>
        <div className="h-full">
          <div className="w-full flex flex-col px-4 gap-1">
            <Items
              content="Tableau de bord"
              full
              iconLeft={'fa-house'}
              link="home"
            />
            <Items
              content="Calendier"
              full
              iconLeft={'fa-calendar-days'}
              link="calendar"
            />
            <DropdownItems
              content="Absences"
              full
              iconLeft={'fa-suitcase'}
              items={LeavesItems}
            />
            <DropdownItems
              content="Organisation"
              full
              iconLeft={'fa-sitemap'}
              items={OrganizationItems}
            />
            <Items
              content="Déplacements"
              full
              iconLeft={'fa-car'}
              link="trip"
            />
            <Items
              content="Statistiques"
              full
              iconLeft={'fa-chart-line'}
              link="stats"
            />
            <Items
              content="Notifications"
              full
              iconLeft={'fa-bell'}
              link="notifications"
            />
          </div>
        </div>
        <div className="relative w-full py-6 px-4 flex items-center justify-between border-t border-primary">
          <Image
            src={avatar}
            alt="avatar"
            className="h-10 border rounded-full border-secondary"
          />
          <div className="flex flex-col">
            <p className="text-white font-franklin text-sm font-medium">
              Alexender Arnold
            </p>
            <p className="text-gray text-sm font-medium">{user.username}</p>
          </div>
          <div className="px-1" onClick={() => setOpenOption(!openOption)}>
            <FontAwesomeIcon
              icon="fa-solid fa-ellipsis-vertical"
              className="text-gray"
              size="xl"
            />
          </div>
          <div
            className={`absolute -top-full -translate-y-1/4 right-1/2 translate-x-1/2 z-10 w-11/12 bg-black rounded-lg border border-primary flex flex-col gap-2 justify-between p-4 ${
              openOption ? 'block' : 'hidden'
            }`}
          >
            <ButtonSecondary
              content="Profil"
              full
              onClickAction={() => redirect('profile')}
            />
            <ButtonDelete
              content="Déconnexion"
              full
              onClickAction={() => redirect('logout')}
            />
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
