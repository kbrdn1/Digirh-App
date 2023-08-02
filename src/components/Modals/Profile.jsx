import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from 'react'
import userStore from '@stores/User'
import authStore from '@stores/Auth'
import toastStore from '@stores/Toast'
import Modal from '@components/Modals/Default'
import Input from '@components/Inputs/Default'
import Label from '@components/Texts/Label'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import BtnConfirm from '@components/Buttons/Confirm'
import BtnCancel from '@components/Buttons/Cancel'
import InputFile from '@components/Inputs/File'
import PropTypes from 'prop-types'

const Profile = ({ user, primary }) => {
  const avatarRef = useRef(null),
    nameRef = useRef(null),
    firstnameRef = useRef(null),
    emailRef = useRef(null),
    phoneRef = useRef(null),
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    [open, setOpen] = useState(false)

  useEffect(() => {
    open
      ? (window.scrollTo(0, 0), (document.body.style.overflow = 'hidden'))
      : (document.body.style.overflow = 'unset')

    setError(null)
  }, [open])

  const handleSubmit = async () => {
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
      setOpen(false)
      toastStore.addToast('Votre profil a bien été mis à jour', true)
      setError(null)
    } else {
      setError('Une erreur est survenue, veuillez réessayer...')
      toastStore.removeToast()
    }
    setIsLoading(false)
  }

  return (
    <>
      {primary ? (
        <BtnPrimary onClick={() => setOpen(true)}>
          Modifier les informations
        </BtnPrimary>
      ) : (
        <BtnSecondary onClick={() => setOpen(true)}>
          Modifier les informations
        </BtnSecondary>
      )}
      {open && (
        <Modal
          onSubmit={handleSubmit}
          title="Modifier les informations"
          color="#9941ED"
          full
          error={error}
          footer={
            <>
              <BtnCancel onClick={() => setOpen(false)}>Annuler</BtnCancel>
              <BtnConfirm
                disabled={isLoading}
                iconRight={isLoading ? faSpinner : null}
                iconSpin={isLoading}
              >
                {isLoading ? 'Traitement en cours...' : 'Confirmer'}
              </BtnConfirm>
            </>
          }
        >
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Photo de profil
          </div>
          <div className="flex flex-col gap-2">
            <InputFile
              ref={avatarRef}
              accept="image/png, image/jpeg"
              defaultValue={user.avatar ? user.avatar : null}
              full
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Identité
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            <div className="flex flex-col gap-2">
              <Label text="Nom" />
              <Input placeholder="Nom" defaultValue={user.name} ref={nameRef} />
            </div>
            <div className="flex flex-col gap-2">
              <Label text="Prénom" />
              <Input
                placeholder="Prénom"
                defaultValue={user.firstname}
                ref={firstnameRef}
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
              ref={emailRef}
              full
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Téléphone" />
            <Input
              type="tel"
              placeholder="Téléphone"
              defaultValue={user.phone}
              ref={phoneRef}
              full
            />
          </div>
        </Modal>
      )}
    </>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  primary: PropTypes.bool,
}

export default Profile
