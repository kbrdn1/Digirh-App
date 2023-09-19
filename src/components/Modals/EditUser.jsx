import BtnCancel from '@components/Buttons/Cancel'
import BtnPrimary from '@components/Buttons/Primary'
import BtnConfirm from '@components/Buttons/Confirm'
import BtnSecondary from '@components/Buttons/Secondary'
import Checkbox from '@components/Inputs/Checkbox'
import Input from '@components/Inputs/Default'
import InputFile from '@components/Inputs/File'
import Select from '@components/Inputs/Select'
import Modal from '@components/Modals/Default'
import Label from '@components/Texts/Label'
import { faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import teamStore from '@stores/Team'
import toastStore from '@stores/Toast'
import typeContratStore from '@stores/TypeContrat'
import userStore from '@stores/User'
import PropTypes from 'prop-types'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

const EditUser = forwardRef(({ user, primary, ext, edit }, ref) => {
  const avatarRef = useRef(null),
    nameRef = useRef(null),
    firstnameRef = useRef(null),
    emailRef = useRef(null),
    phoneRef = useRef(null),
    hiringDateRef = useRef(null),
    fonctionRef = useRef(null),
    contratRef = useRef(null),
    roleRef = useRef(null),
    isActiveRef = useRef(null),
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    [open, setOpen] = useState(false),
    [contrats, setContrats] = useState([])

  useEffect(() => {
    getTypeContrats()
    open
      ? (window.scrollTo(0, 0), (document.body.style.overflow = 'hidden'))
      : (document.body.style.overflow = 'unset')

    setError(null)
  }, [open])

  const handleSubmit = async () => {
    setIsLoading(true)
    let data;

    if (avatarRef.current.files[0]) {
      data = new FormData()
      data.append('avatar', avatarRef.current.files[0])
      data.append('name', nameRef.current.value)
      data.append('firstname', firstnameRef.current.value)
      data.append('email', emailRef.current.value)
      data.append('phone', phoneRef.current.value)
      data.append('hiring_date', hiringDateRef.current.value)
      data.append('fonction', fonctionRef.current.value)
      data.append('type_contrat', contratRef.current.value)
      data.append('roles', roleRef.current.value)
      data.append('team', user.team ? user.team.id : teamStore.team.id)
      data.append('isActive', isActiveRef.current.checked)
      data.append('isSuperAdmin', user.isSuperAdmin)
      data.append('statut', user.statut.id)
      data.append(
        'resp_hierarchique',
        user.resp_hierarchique ? user.resp_hierarchique : null
      )
    } else {
      data = {
        name: nameRef.current.value,
        firstname: firstnameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        hiring_date: hiringDateRef.current.value,
        fonction: fonctionRef.current.value,
        type_contrat: contratRef.current.value,
        roles: [roleRef.current.value],
        team: user.team ? user.team.id : teamStore.team.id,
        isActive: isActiveRef.current.checked,
        isSuperAdmin: user.isSuperAdmin,
        statut: user.statut.id,
        resp_hierarchique: user.resp_hierarchique
          ? user.resp_hierarchique
          : null,
      }
    }

      if (edit) {
        const { success, message } = await userStore.updateUserProfile(
          user.id,
          data
        )

        if (success) {
          setOpen(false)
          setError(null)
          toastStore.addToast(message, true)
        } else {
          toastStore.removeToast()
          setError(message)
        }
      } else {
        const { success, message } = await userStore.createUser(data)

        if (success) {
          setOpen(false)
          setError(null)
          toastStore.addToast(message, true)
        } else {
          toastStore.removeToast()
          setError(message)
        }
      }
      setIsLoading(false)
    },
    getTypeContrats = async () => {
      const { data } = await typeContratStore.getAllTypeContrats()
      const contrats = data.map((contrat) => ({
        value: contrat.id,
        label: contrat.name_type,
      }))
      setContrats(contrats)
    }

  useImperativeHandle(ref, () => ({
    toggleModal() {
      setOpen(!open)
    },
  }))

  return (
    <>
      {ext ? null : primary ? (
        edit ? (
          <BtnPrimary onClick={() => setOpen(true)}>
            Modifier les informations
          </BtnPrimary>
        ) : (
          <BtnConfirm onClick={() => setOpen(true)} iconLeft={faUserPlus}>
            Ajouter un utilisateur
          </BtnConfirm>
        )
      ) : edit ? (
        <BtnSecondary onClick={() => setOpen(true)}>
          Modifier les informations
        </BtnSecondary>
      ) : (
        <BtnConfirm onClick={() => setOpen(true)} iconLeft={faUserPlus}>
          Ajouter un utilisateur
        </BtnConfirm>
      )}
      {open && (
        <Modal
          onSubmit={handleSubmit}
          title={edit ? 'Modifier les informations' : 'Ajouter un utilisateur'}
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
            <InputFile ref={avatarRef} accept="image/png, image/jpeg" full />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Identité
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            <div className="flex flex-col gap-2">
              <Label text="Nom" />
              <Input
                placeholder="Nom"
                defaultValue={user.name}
                ref={nameRef}
                full
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label text="Prénom" />
              <Input
                placeholder="Prénom"
                defaultValue={user.firstname}
                ref={firstnameRef}
                full
                required
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
              required
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
              required
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Poste
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Date d'embauche" />
            <Input
              type="date"
              placeholder="Date d'embauche"
              defaultValue={
                new Date(user.hiring_date).toISOString().split('T')[0]
              }
              ref={hiringDateRef}
              full
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Fonction" />
            <Input
              placeholder="Fonction"
              defaultValue={user.fonction}
              ref={fonctionRef}
              full
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Contrat" />
            <Select
              defaultValue={user.type_contrat}
              placeholder="Choisir un contrat"
              ref={contratRef}
              full
              required
              options={contrats}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Rôle" />
            <Select
              defaultValue={user.roles[0]}
              placeholder="Choisir un rôle"
              ref={roleRef}
              full
              required
              options={[
                { value: null, label: 'Choisir un rôle' },
                { value: 'ROLE_ADMIN', label: 'Directeur RH' },
                { value: 'ROLE_RRT_CA', label: 'Responsable RTT CA' },
                {
                  value: 'ROLE_RFD',
                  label: 'Responsable des Frais de Déplacement',
                },
                { value: 'ROLE_RESP', label: "Chef d'équipe" },
                { value: 'ROLE_USER', label: 'Collaborateur' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Checkbox defaultChecked={user.isActive} ref={isActiveRef}>
              Actif / Inactif
            </Checkbox>
          </div>
        </Modal>
      )}
    </>
  )
})

EditUser.displayName = 'EditUser'

EditUser.propTypes = {
  user: PropTypes.object,
  primary: PropTypes.bool,
  ext: PropTypes.bool,
  edit: PropTypes.bool,
}

export default EditUser
