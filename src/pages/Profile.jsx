import ProfileCard from '@components/Cards/Profile'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import BtnCancel from '@components/Buttons/Cancel'
import Card from '@components/Cards/Default'
import TeamContext from '@contexts/Team'
import UserContext from '@contexts/User'
import teamStore from '@stores/Team'
import Modal from '@components/Modals/Default'
import Label from '@components/Texts/Label'
import Input from '@components/Inputs/Default'
import InputFile from '@components/Inputs/File'
import ToastSuccess from '@components/Toasts/Success'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import authStore from '@stores/Auth'
import userStore from '@stores/User'
import { observer } from 'mobx-react'

import { useState, useEffect, useRef } from 'react'

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

const Profile = observer(() => {
  const user = authStore.user,
    [openProfileModal, setOpenProfileModal] = useState(false),
    [errorUpdateProfile, setErrorUpdateProfile] = useState(null),
    [successUpdateProfile, setSuccessUpdateProfile] = useState(null),
    [isLoading, setIsLoading] = useState(false),

    nameRef = useRef(null),
    firstnameRef = useRef(null),
    emailRef = useRef(null),
    phoneRef = useRef(null)

  useEffect(() => {
    openProfileModal
      ? (window.scrollTo(0, 0), (document.body.style.overflow = 'hidden'))
      : (document.body.style.overflow = 'unset')
  }, [openProfileModal])

  const handleSubmit = async () => {
    setIsLoading(true)
    const data = {
      name: nameRef.current.value,
      firstname: firstnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    }

    await userStore.updateUserProfile(user.id, data)

    if (data.name == authStore.user.name && data.firstname == authStore.user.firstname && data.email == authStore.user.email && data.phone == authStore.user.phone) {
      setOpenProfileModal(false)
      setSuccessUpdateProfile('Vos informations ont bien été modifiées')
      setErrorUpdateProfile(null)
    } else {
      setErrorUpdateProfile('Une erreur est survenue, veuillez réessayer...')
      setSuccessUpdateProfile(null)
    }
    setIsLoading(false)
  }

  const ProfileModal = () => {
    return (
      <Modal
        onSubmitAction={handleSubmit}
        title="Modifier les informations"
        color="#9941ED"
        full
        error={errorUpdateProfile}
        footer={
          <>
            <BtnCancel
              content="Annuler"
              onClickAction={() => setOpenProfileModal(false)}
            />
            <BtnPrimary
              disabled={isLoading}
              iconRight={isLoading ? faSpinner : null}
              iconSpin={isLoading}
              content={isLoading ? 'Traitement en cours...' : 'Confirmer'}
            />
          </>
        }
      >
        <ProfileModalChildren />
      </Modal>
    )
  }

  const ProfileModalChildren = () => {
    return (
      <>
        <div className="flex flex-col gap-2">
          <Label text="Photo de profil" />
          <InputFile />
        </div>
        <div className="flex flex-col gap-2">
          <Label text="Nom" />
          <Input placeholder="Nom" defaultValue={user.name} onRef={nameRef} />
        </div>
        <div className="flex flex-col gap-2">
          <Label text="Prénom" />
          <Input
            placeholder="Prénom"
            defaultValue={user.firstname}
            onRef={firstnameRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label text="Email" />
          <Input
            type="email"
            placeholder="Email"
            defaultValue={user.email}
            onRef={emailRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label text="Téléphone" />
          <Input
            type="tel"
            placeholder="Téléphone"
            defaultValue={user.phone}
            onRef={phoneRef}
          />
        </div>
      </>
    )
  }

  return (
    <TeamContext.Provider value={teamStore}>
      <UserContext.Provider value={userStore}>
        {openProfileModal && <ProfileModal />}
        <div className="flex flex-col lg:flex-row gap-5 pt-4">
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <ProfileCard
              full
              footer={
                <BtnPrimary
                  content="Modifier les informations"
                  onClickAction={() => setOpenProfileModal(true)}
                />
              }
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
          {// sucess toast
            successUpdateProfile && (
              <ToastSuccess fixed text={successUpdateProfile} onClose={() => setSuccessUpdateProfile(null)} />
            )}
        </div>
      </UserContext.Provider>
    </TeamContext.Provider>
  )
})

export default Profile
