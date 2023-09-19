import TeamBadge from '@components/Tables/TeamTableBadge'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useDebounce from '@hooks/useDebounce'
import teamStore from '@stores/Team'
import userStore from '@stores/User'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const Search = forwardRef((props, ref) => {
  const { full, disabled, user, team, link, ...rest } = props,
    searchRef = useRef(''),
    [open, setOpen] = useState(true),
    [users, setUsers] = useState([]),
    [teams, setTeams] = useState([]),
    [value, setValue] = useState(null),
    [debouncedValue, isWaiting] = useDebounce(value, 400),
    [selected, setSelected] = useState(null),
    UserElement = ({ user }) => {
      if (link) {
        return (
          <Link
            to={`/collaborator/${user.id}`}
            className="flex gap-3 p-2 bg-light cursor-pointer"
          >
            <img
              src={user.avatar || '/avatar.png'}
              alt="avatar"
              className="h-10 w-10 rounded-lg"
            />
            <div>
              <div className="font-bold">
                {user.name} {user.firstname}
              </div>
              <div className="text-gray">{user.fonction}</div>
            </div>
          </Link>
        )
      }

      const handleClick = () => {
        setSelected(user)
        setValue(`${user.name} ${user.firstname}`)
        searchRef.current.value = `${user.name} ${user.firstname}`
        setOpen(false)
      }
      return (
        <div
          className="flex gap-3 p-2 bg-light cursor-pointer"
          onClick={handleClick}
        >
          <img
            src={user.avatar || '/avatar.png'}
            alt="avatar"
            className="h-10 w-10 rounded-lg"
          />
          <div>
            <div className="font-bold">
              {user.name} {user.firstname}
            </div>
            <div className="text-gray">{user.fonction}</div>
          </div>
        </div>
      )
    },
    TeamElement = ({ team }) => {
      if (link) {
        return (
          <Link to={`/team/${team.id}`} className="flex gap-3 p-2 bg-light">
            <TeamBadge teamName={team.name_team} color={team.color} />
          </Link>
        )
      }

      const handleClick = () => {
        setSelected(team)
        setValue(team.name_team)
        searchRef.current.value = team.name_team
        setOpen(false)
      }
      return (
        <div className="flex gap-3 p-2 bg-light" onClick={handleClick}>
          <TeamBadge teamName={team.name_team} color={team.color} />
        </div>
      )
    },
    searchUser = async () => {
      const search = await userStore.searchUsersByName(debouncedValue)
      setUsers(search.data)
    },
    searchTeam = async () => {
      const search = await teamStore.searchTeamsByName(debouncedValue)
      setTeams(search.data)
    }

  useEffect(() => {
    if (debouncedValue) {
      if (user) {
        searchUser()
      }
      if (team) {
        searchTeam()
      }
    }
  }, [debouncedValue])

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return selected
    },
  }))

  window.addEventListener('click', (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setOpen(false)
    }
  })

  return (
    <div className="relative group search">
      <div
        className={`relative flex items-center hover:outline hover:outline-2 hover:outline-primary rounded-md transition-all ${
          full ? 'w-full' : 'w-fit'
        } ${disabled ? 'outline-none outline-0 grayscale' : null}`}
      >
        <input
          className="w-full font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md pl-4 pr-14 py-2 transition-all overflow-hidden"
          type="search"
          onChange={(e) => {
            setValue(e.target.value)
            setSelected(null)
            setOpen(true)
          }}
          ref={searchRef}
          disabled={disabled}
          {...rest}
        />
        <div className="absolute z-10 flex items-center right-0 bg-white text-gray hover:text-white hover:bg-primary-hover px-[16px] h-full border-gray border rounded-r-md cursor-pointer transition-all">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div
        className={`absolute bottom-0 translate-y-full overflow-y-scroll border w-full border-gray rounded-b-md divide-y divide-gray ${
          searchRef.current?.value && open ? null : 'hidden'
        }`}
      >
        {isWaiting ? (
          <div className="py-1 px-2">
            Chargement <FontAwesomeIcon icon={faSpinner} spinPulse />
          </div>
        ) : (
          <div>
            {users && user && value ? (
              <div className="relative sticky">
                <p className="text-md font-medium text-white bg-primary-5 px-2 py-1 w-full">
                  Collaborateurs
                </p>
                {users.length > 0 &&
                  users.map((user, index) => (
                    <UserElement key={index} user={user} />
                  ))}
              </div>
            ) : (
              user && <p className="py-1 px-2">Aucun résultat</p>
            )}
            {teams && team && value ? (
              <>
                <p className="text-md font-medium text-white bg-primary px-2 py-1 w-full">
                  Equipes
                </p>
                {teams.length > 0 &&
                  teams.map((team, index) => (
                    <TeamElement key={index} team={team} />
                  ))}
              </>
            ) : (
              team && <p className="py-1 px-2">Aucun résultat</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

Search.displayName = 'Search'

Search.propTypes = {
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  onSearch: PropTypes.func,
  user: PropTypes.bool,
  team: PropTypes.bool,
  link: PropTypes.bool,
}

export default Search
