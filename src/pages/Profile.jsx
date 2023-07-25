import ProfileCard from '@components/Cards/Profile'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import Card from '@components/Cards/Default'
import TeamContext from '@contexts/Team'
import teamStore from '@stores/Team'

const Absence = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold font-franklin">Absences disponibles</p>
      <div className="flex flex-col gap-1 text-sm">
        <div>
          <span className="text-black font-bold">Congés :</span>
          <span> 5 jours</span>
        </div>
        <div>
          <span className="text-black font-bold">RTT :</span>
          <span> 5 jours</span>
        </div>
      </div>
    </div>
  )
}

const Frais = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold font-franklin">Informations</p>
      <div className="flex flex-col gap-1 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        mauris id arcu sodales, euismod aliquam augue.
      </div>
    </div>
  )
}

const Profile = () => {
  return (
    <TeamContext.Provider value={teamStore}>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <ProfileCard
            full
            footer={<BtnPrimary content="Modifier les informations" />}
          />
          <Card
            full
            title="Demandes d’absences"
            footer={<BtnSecondary content="Faire une demande" />}
          >
            <Absence />
          </Card>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <Card
            full
            title="Demandes de frais de déplacement"
            footer={<BtnSecondary content="Faire une demande" />}
          >
            <Frais />
          </Card>
        </div>
      </div>
    </TeamContext.Provider>
  )
}

export default Profile
