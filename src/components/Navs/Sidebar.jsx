import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faEllipsisVertical,
  faHouse,
  faCalendarDays,
  faCar,
  faChartLine,
  faBell,
  faSuitcase,
  faSitemap,
  faUsers,
  faUserGroup,
  faIndustry,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import BtnDanger from '@components/Buttons/Danger'
import BtnSecondary from '@components/Buttons/Secondary'
import Items from './Items'
import DropdownItems from './DropdownItems.jsx'
import { observer } from 'mobx-react'
import authStore from '@stores/Auth'

const Sidebar = observer(() => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [openOption, setOpenOption] = useState(false)

  const LeavesItems = [
    {
      content: 'Collaborateurs',
      iconLeft: faUserGroup,
      link: '/leaves/collaborators',
    },
    {
      content: 'Equipes',
      iconLeft: faUsers,
      link: '/leaves/teams',
    },
  ]

  const TripItems = [
    {
      content: 'Collaborateurs',
      iconLeft: faUserGroup,
      link: '/trips/collaborators',
    },
    {
      content: 'Equipes',
      iconLeft: faUsers,
      link: '/trips/teams',
    },
  ]

  const OrganizationItems = [
    {
      content: 'Collaborateurs',
      iconLeft: faUserGroup,
      link: '/organization/collaborators',
    },
    {
      content: 'Equipes',
      iconLeft: faUsers,
      link: '/organization/teams',
    },
    {
      content: 'Entreprise',
      iconLeft: faIndustry,
      link: authStore.user
        ? `organization/${authStore.user.team.organisation.id}`
        : 'organization/',
    },
  ]

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      setIsOpen(false)
    }
  })

  window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('profile-action')) {
      setOpenOption(false)
    }
  })

  if (!authStore.user && !authStore.jwt) return null

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 font-nunito ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <button
        className={`fixed top-7 left-4 z-20 bg-black rounded-lg w-[48px] h-[48px] flex items-center justify-center duration-300 ease-out lg:hidden ${
          isOpen ? 'hidden' : 'block'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          className="text-white"
          size="lg"
        />
      </button>
      <aside
        className={`h-screen lg:h-[calc(100vh-40px)] w-[calc(100vw-4rem)] fixed z-50 bg-black flex flex-col justify-between gap-2 rounded-xl lg:rounded-l-xl rounded-l-none lg:w-[256px] duration-300 ease-out lg:translate-x-0 left-0 top-0 lg:left-4 lg:top-4 ${
          !isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <Link
          to="/"
          className="w-full py-[22px] flex items-center justify-center border-b border-primary fixed"
        >
          <img
            src="/Digirh-App/logo/logo_h_light.svg"
            alt="logo_digirh"
            className="w-[146px]"
          />
        </Link>
        <div className="h-full mt-20 py-4 overflow-y-scroll">
          <div className="w-full flex flex-col px-4 gap-1">
            <Items full iconLeft={faHouse} link="/">
              Tableau de bord
            </Items>
            <Items full iconLeft={faCalendarDays} link="/calendar">
              Calendier
            </Items>
            {authStore.user.roles.find((role) => role === 'ROLE_RTT_CA') ? (
              <DropdownItems
                content="Absences"
                full
                iconLeft={faSuitcase}
                items={LeavesItems}
              />
            ) : (
              <Items full iconLeft={faSuitcase} link="/leaves">
                Absences
              </Items>
            )}
            {authStore.user.roles.find((role) => role === 'ROLE_RFD') ? (
              <DropdownItems
                content="Déplacements"
                full
                iconLeft={faCar}
                items={TripItems}
              />
            ) : (
              <Items full iconLeft={faCar} link="/trips">
                Déplacements
              </Items>
            )}
            {authStore.user.roles.find(
              (role) =>
                role === 'ROLE_SUPER_ADMIN' ||
                role === 'ROLE_ADMIN' ||
                role === 'ROLE_RH'
            ) && (
              <DropdownItems
                content="Organisation"
                full
                iconLeft={faSitemap}
                items={OrganizationItems}
              />
            )}
            <Items full iconLeft={faChartLine} link="/stats">
              Statistiques
            </Items>
            <Items full iconLeft={faBell} link="/notifications">
              Notifications
            </Items>
          </div>
        </div>
        <div className="relative w-full py-6 px-4 flex items-center justify-between border-t border-primary">
          <Link to="/profile" className="w-10 h-10 min-w-[40px]">
            <img
              src="/Digirh-App/avatar.png"
              alt="avatar"
              className="h-10 w-10 border rounded-full border-secondary"
            />
          </Link>
          <div className="flex flex-col lg:max-w-[150px] overflow-hidden">
            <p className="text-white font-franklin text-sm font-medium">
              {authStore.user.firstname} {authStore.user.name}
            </p>
            <p className="text-gray text-sm font-medium">
              {authStore.user.email}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="text-gray profile-action px-2 py-1 cursor-pointer"
            size="xl"
            onClick={() => setOpenOption(!openOption)}
          />
          <div
            className={`absolute -top-full -translate-y-1/4 right-1/2 translate-x-1/2 z-10 w-11/12 bg-black rounded-lg border border-primary flex flex-col gap-2 justify-between p-4 ${
              openOption ? 'block' : 'hidden'
            }`}
          >
            <BtnSecondary full onClick={() => navigate('/profile')}>
              Mon profil
            </BtnSecondary>
            <BtnDanger full onClick={() => navigate('/logout')}>
              Déconnexion
            </BtnDanger>
          </div>
        </div>
      </aside>
    </>
  )
})

export default Sidebar
