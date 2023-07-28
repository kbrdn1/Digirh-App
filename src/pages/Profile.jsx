import ProfileCard from '@components/Cards/Profile'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import BtnCancel from '@components/Buttons/Cancel'
import BtnGhost from '@components/Buttons/Ghost'
import Card from '@components/Cards/Default'
import teamStore from '@stores/Team'
import Modal from '@components/Modals/Default'
import Label from '@components/Texts/Label'
import Input from '@components/Inputs/Default'
import InputFile from '@components/Inputs/File'
import Select from '@components/Inputs/Select'
import ToastSuccess from '@components/Toasts/Success'
import Activity from '@components/Cards/Activity'
import { faSpinner, faEye } from '@fortawesome/free-solid-svg-icons'
import TeamContext from '@contexts/Team'
import UserContext from '@contexts/User'
import AbsenceContext from '@contexts/Absence'
import TripContext from '@contexts/Trip'
import authStore from '@stores/Auth'
import userStore from '@stores/User'
import absenceStore from '@stores/Absence'
import tripStore from '@stores/Trip'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

// Notification store for the demo
const notificationStore = {
  notification: null,
  notifications: [
    {
      id: 1,
      type: 'trip',
      data: {
        amount: 56.78
      },
      date_notif: '2021-09-01 12:00:00'
    },
    {
      id: 2,
      type: 'leave',
      data: {
        name_absence: 'Congés payés'
      },
      date_notif: '2021-08-11 12:00:00'
    },
    {
      id: 3,
      type: 'return',
      data: {
        name_absence: 'Congés maladie'
      },
      date_notif: '2021-09-01 12:00:00'
    },
    {
      id: 4,
      type: 'team',
      data: {
        name_team: 'Développement Web'
      },
      date_notif: '2021-09-01 12:00:00'
    }
  ]
}

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

const Trip = () => {
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
    navigate = useNavigate(),
    [openProfileModal, setOpenProfileModal] = useState(false),
    [errorUpdateProfile, setErrorUpdateProfile] = useState(null),
    [successUpdateProfile, setSuccessUpdateProfile] = useState(null),
    [openAbsenceModal, setOpenAbsenceModal] = useState(false),
    [errorAddAbsence, setErrorAddAbsence] = useState(null),
    [successAddAbsence, setSuccessAddAbsence] = useState(null),
    [openTripModal, setOpenTripModal] = useState(false),
    [errorAddTrip, setErrorAddTrip] = useState(null),
    [successAddTrip, setSuccessAddTrip] = useState(null),
    [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    openProfileModal
      ? (window.scrollTo(0, 0), (document.body.style.overflow = 'hidden'))
      : (document.body.style.overflow = 'unset')
  }, [openProfileModal])

  const avatarRef = useRef(null),
    nameRef = useRef(null),
    firstnameRef = useRef(null),
    emailRef = useRef(null),
    phoneRef = useRef(null)

  const handleSubmitProfile = async () => {
    setIsLoading(true)
    const data = {
      // avatar: avatarRef.current.files[0],
      name: nameRef.current.value,
      firstname: firstnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    }

    await userStore.updateUserProfile(user.id, data)

    if (
      data.name == authStore.user.name &&
      data.firstname == authStore.user.firstname &&
      data.email == authStore.user.email &&
      data.phone == authStore.user.phone
    ) {
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
        onSubmitAction={handleSubmitProfile}
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
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Photo de profil
        </div>
        <div className="flex flex-col gap-2">
          <InputFile
            onRef={avatarRef}
            accept="image/png, image/jpeg"
            defaultValue={user.avatar}
          />
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Identité
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
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
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Contact
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

  const absenceRef = useRef(null),
    nameAbsenceRef = useRef(null),
    startDateRef = useRef(null),
    endDateRef = useRef(null),
    documentRef = useRef(null)

  const handleSubmitAbsence = async () => {
    setIsLoading(true)

    // const data = {
    //   type: absenceRef.current.value,
    //   start_date: startDateRef.current.value,
    //   end_date: endDateRef.current.value,
    //   document: documentRef.current.value,
    // }

    // action via AbsenceStore

    // condition de succès ou d'erreur

    setErrorAddAbsence('Une erreur est survenue, veuillez réessayer...')

    setIsLoading(false)
  }

  const AbsenceModal = () => {
    return (
      <Modal
        onSubmitAction={handleSubmitAbsence}
        title="Faire une demande d’absence"
        color="#5F4DEE"
        full
        error={errorAddAbsence}
        footer={
          <>
            <BtnCancel
              content="Annuler"
              onClickAction={() => setOpenAbsenceModal(false)}
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
        <AbsenceModalChildren />
      </Modal>
    )
  }

  const AbsenceModalChildren = () => {
    return (
      <>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Type d’absence
        </div>
        <div className="flex flex-col gap-2">
          <Select
            onRef={absenceRef}
            options={[
              { value: 'congé payé', label: 'Congé payé' },
              { value: 'congé sans solde', label: 'Congé sans solde' },
              { value: 'congé maladie', label: 'Congé maladie' },
            ]}
          />
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Libéllé
        </div>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Libéllé"
            onRef={nameAbsenceRef}
            defaultValue={'Absence de ' + user.name + ' ' + user.firstname}
          />
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Période
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
          <div className="flex flex-col gap-2">
            <Label text="Date de début" />
            <Input type="date" onRef={startDateRef} />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Date de fin" />
            <Input type="date" onRef={endDateRef} />
          </div>
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Justicatif
        </div>
        <div className="flex flex-col gap-2">
          <InputFile
            onRef={documentRef}
            accept="application/pdf, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/jpeg, image/png"
          />
        </div>
      </>
    )
  }

  const tripRef = useRef(null),
    amountRef = useRef(null),
    distanceRef = useRef(null),
    ticketRef = useRef(null)

  const handleSubmitTrip = async () => {
    setIsLoading(true)

    // const data = {
    //   type: tripRef.current.value,
    //   amount: amountRef.current.value,
    //   distance: distanceRef.current.value,
    //   ticket: ticketRef.current.value,
    // }

    // action via TripStore

    // condition de succès ou d'erreur

    setErrorAddTrip('Une erreur est survenue, veuillez réessayer...')
    setIsLoading(false)
  }

  const TripModal = () => {
    return (
      <Modal
        onSubmitAction={handleSubmitTrip}
        title="Faire une demande de déplacement"
        color="#5F4DEE"
        full
        error={errorAddTrip}
        footer={
          <>
            <BtnCancel
              content="Annuler"
              onClickAction={() => setOpenTripModal(false)}
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
        <TripModalChildren />
      </Modal>
    )
  }

  const TripModalChildren = () => {
    return (
      <>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Type de déplacement
        </div>
        <div className="flex flex-col gap-2">
          <Select
            onRef={tripRef}
            options={[
              {
                value: 'Déplacement professionnel',
                label: 'Déplacement professionnel',
              },
              {
                value: 'Déplacement personnel',
                label: 'Déplacement personnel',
              },
            ]}
          />
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Informations
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
          <div className="flex flex-col gap-2">
            <Label text="Montant (€)" />
            <Input type="number" onRef={amountRef} />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Distance (km)" />
            <Input type="number" onRef={distanceRef} />
          </div>
        </div>
        <div className="font-franklin text-gray text-[1rem] font-bold">
          Justicatif
        </div>
        <div className="flex flex-col gap-2">
          <InputFile
            onRef={ticketRef}
            accept="image/png, image/jpeg, application/pdf"
          />
        </div>
      </>
    )
  }

  return (
    <TeamContext.Provider value={teamStore}>
      <UserContext.Provider value={userStore}>
        <AbsenceContext.Provider value={absenceStore}>
          <TripContext.Provider value={tripStore}>
            {openProfileModal && <ProfileModal />}
            {openAbsenceModal && <AbsenceModal />}
            {openTripModal && <TripModal />}
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
                  footer={
                    <BtnSecondary
                      content="Faire une demande"
                      onClickAction={() => setOpenAbsenceModal(true)}
                    />
                  }
                >
                  <Absence />
                </Card>
              </div>
              <div className="flex flex-col gap-5 lg:w-1/2">
                <Card
                  full
                  title="Aperçu de l'activité"
                  footer={
                    <>
                      <BtnSecondary
                        content="Voir sur le calendrier"
                        onClickAction={() => navigate('/calendar')}
                      />
                      <BtnGhost
                        content="Voir toute l’activité"
                        iconLeft={faEye}
                        onClickAction={() => navigate('/activity')}
                      />
                    </>
                  }
                >
                  {notificationStore.notifications.map((notif) => (
                    <>
                      <Activity key={notif.id} notification={notif} />
                      <div className="ml-5 w-1 h-3 bg-slate-200"></div>
                    </>
                  ))}
                </Card>
                <Card
                  full
                  title="Demandes de frais de déplacement"
                  footer={
                    <BtnSecondary
                      content="Faire une demande"
                      onClickAction={() => setOpenTripModal(true)}
                    />
                  }
                >
                  <Trip />
                </Card>
              </div>
              <div className="absolute bottom-0 right-0 p-4 flex flex-col gap-2 w-fit overflow-x-hidden">
                {successUpdateProfile && (
                  <ToastSuccess
                    animation
                    text={successUpdateProfile}
                    onClose={() => setSuccessUpdateProfile(null)}
                  />
                )}
                {successAddAbsence && (
                  <ToastSuccess
                    animation
                    text={successAddAbsence}
                    onClose={() => setSuccessAddAbsence(null)}
                  />
                )}
                {successAddTrip && (
                  <ToastSuccess
                    animation
                    text={successAddTrip}
                    onClose={() => setSuccessAddTrip(null)}
                  />
                )}
              </div>
            </div>
          </TripContext.Provider>
        </AbsenceContext.Provider>
      </UserContext.Provider>
    </TeamContext.Provider>
  )
})

export default Profile
