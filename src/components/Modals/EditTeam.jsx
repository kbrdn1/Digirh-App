import BtnCancel from '@components/Buttons/Cancel'
import BtnConfirm from '@components/Buttons/Confirm'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import Checkbox from '@components/Inputs/Checkbox'
import Input from '@components/Inputs/Default'
import Textarea from '@components/Inputs/Textarea'
import Modal from '@components/Modals/Default'
import Label from '@components/Texts/Label'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import teamStores from '@stores/Team'
import toastStore from '@stores/Toast'
import PropTypes from 'prop-types'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

const EditTeam = forwardRef(({ team, primary, ext, edit }, ref) => {
  const nameRef = useRef(team ? team.name_team : ''),
    descriptionRef = useRef(team ? team.description_team : ''),
    colorRef = useRef(team ? team.color : ''),
    minPersref = useRef(team ? team.min_person : ''),
    isActiveRef = useRef(team ? team.isActive : false),
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    [open, setOpen] = useState(false),
    navigate = useNavigate()

  useEffect(() => {
    open
      ? (window.scrollTo(0, 0), (document.body.style.overflow = 'hidden'))
      : (document.body.style.overflow = 'unset')
    setError(null)
  }, [open])

  useImperativeHandle(ref, () => ({
    toggleModal() {
      setOpen(!open)
    },
  }))

  const submit = async () => {
    setIsLoading(true)

    const data = {
      name_team: nameRef.current.value,
      description_team: descriptionRef.current.value,
      min_person: minPersref.current.value,
      isActive: isActiveRef.current.checked,
      color: colorRef.current.value,
    }

    // action via le store
    if (edit) {

      const { success, message } = await teamStores.updateTeam(data, team.id)

      if (success) {
        setOpen(false)
        setError(null)
        toastStore.addToast(message, true)
      } else {
        setError(updateTeam.message)
        toastStore.removeToast()
      }
    } else {
      const { success, message } = await teamStores.createTeam(data)

      if (success) {
        setOpen(false)
        setError(null)
        toastStore.addToast(message, true)
        navigate('/teams/' + teamStores.team.id)
      } else {
        setError(message)
        toastStore.removeToast()
      }
    }
    setIsLoading(false)
  }

  return (
    <>
      {ext ? null : primary ? (
        <BtnPrimary onClick={() => setOpen(true)}>Editer</BtnPrimary>
      ) : (
        <BtnSecondary onClick={() => setOpen(true)}>
          {edit ? 'Editer' : 'Créer une équipe'}
        </BtnSecondary>
      )}
      {open && (
        <Modal
          onSubmit={submit}
          title={edit ? 'Editer' : 'Créer une équipe'}
          color={team ? team.color : '#9941ED'}
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
            Informations
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Nom" />
            <Input
              type="text"
              ref={nameRef}
              defaultValue={team ? team.name_team : ''}
              full
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Description" />
            <Textarea
              ref={descriptionRef}
              defaultValue={team ? team.description_team : ''}
              full
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Couleur" />
            <input
              type="color"
              defaultValue={team ? team.color : ''}
              ref={colorRef}
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Effectif minimum
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            <Input
              type="number"
              ref={minPersref}
              defaultValue={team ? team.min_person : ''}
              full
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Etat
          </div>
          <div className="flex flex-col gap-2">
            <Checkbox
              ref={isActiveRef}
              defaultChecked={team ? team.isActive : false}
            >
              Actif / Inactif
            </Checkbox>
          </div>
        </Modal>
      )}
    </>
  )
})

EditTeam.displayName = 'EditTeam'

EditTeam.propTypes = {
  team: PropTypes.object,
  primary: PropTypes.bool,
  ext: PropTypes.bool,
  edit: PropTypes.bool,
}

export default EditTeam
