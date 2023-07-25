import avatar from '@public/avatar.png'
import authStore from '@stores/Auth'
import teamStore from '@stores/Team'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import TeamTableBadge from '@components/Tables/TeamTableBadge'

const Profile = observer(({ footer, full }) => {
  const user = authStore.user

  useEffect(() => {
    teamStore.getTeamById(user.team.id)
  }, [user.team.id])
  return (
    <div
      className={`relative bg-white shadow-xl font-nunito flex flex-col rounded-[12px] ${
        full ? 'w-full' : 'w-fit'
      }`}
    >
      {avatar && (
        <div className="absolute -top-[25px] left-[25px] rounded-xl overflow-hidden border-3">
          <img
            className="w-[100px]"
            src={avatar || '/Digirh-App/avatar.png'}
            alt="profile-pic"
          />
        </div>
      )}
      <div
        className={`p-[20px] flex items-center gap-[8px] justify-between w-full border-b border-light-2 ${
          avatar ? 'pl-[150px]' : null
        }`}
      >
        <div className="text-black text-[2rem]">
          {user.firstname + ' ' + user.name}
        </div>
        <div
          className={`text-white font-medium font-franklin text-[11px] py-[4px] px-[8px] h-fit uppercase w-fit flex items-center rounded-[10px] ${
            user.statut.name_statut === 'Présent' ? 'bg-valid' : 'bg-danger'
          }`}
        >
          {user.statut.name_statut === 'Présent' ? 'Présent' : 'Absent'}
        </div>
      </div>
      <div
        className={`p-[20px] flex flex-col gap-[8px] w-full border-b border-light-2 ${
          avatar ? 'ml-1/4 pl-[40px]' : null
        }`}
      >
        <div className="font-franklin text-gray-2 text-[1rem] font-bold">
          Fonction
        </div>
        <div className="text-black text-[1rem] text-gray-4">
          {user.fonction}
        </div>
        <div className="font-franklin text-gray-2 text-[1rem] font-bold">
          Rôle
        </div>
        <div className="text-black text-[1rem] text-gray-4">
          {user.roles.map((role) => {
            if (role === 'ROLE_SUPER_ADMIN') return 'Super Administrateur '
            if (role === 'ROLE_ADMIN') return 'Administrateur '
            if (role === 'ROLE_USER') return 'Collaborateur '
          })}
        </div>
      </div>
      <div className="py-[20px] pl-[40px] pr-[20px] flex flex-col gap-[8px] w-full border-b border-light-2">
        <div className="font-franklin text-gray-2 text-[1rem] font-bold">
          Equipe
        </div>
        <div className="grid gap-[10px] grid-cols-2">
          {teamStore.team && (
            <TeamTableBadge
              teamName={teamStore.team.name_team}
              color={teamStore.team.color}
            />
          )}
        </div>
      </div>
      <div className="py-[20px] pl-[40px] pr-[20px] flex flex-col gap-[8px] w-full border-b border-light-2">
        <div className="font-franklin text-gray-2 text-[1rem] font-bold">
          Contact
        </div>
        <div className="flex items-center gap-[8px] text-gray-4">
          <p className="font-bold text-black">E-mail:</p>
          {user.email}
        </div>
        <div className="flex items-center gap-[8px] text-gray-4">
          <p className="font-bold text-black">Téléphone:</p>
          {user.phone}
        </div>
      </div>
      <div className="py-[20px] pl-[40px] pr-[20px] flex flex-col gap-[8px] w-full border-b border-light-2">
        <div className="font-franklin text-gray-2 text-[1rem] font-bold">
          Embauche
        </div>
        <div className="flex items-center gap-[8px] text-gray-4">
          <p className="font-bold text-black">Date:</p>
          {user.hiring_date.split('-').join('/')}
        </div>
      </div>
      {footer && (
        <div className="w-full py-[20px] px-[40px] gap-[24px] border-t border-light-2">
          {footer}
        </div>
      )}
    </div>
  )
})

export default Profile
