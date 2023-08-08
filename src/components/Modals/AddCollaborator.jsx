import BtnCancel from '@components/Buttons/Cancel'
import BtnConfirm from '@components/Buttons/Confirm'
import SearchInput from '@components/Inputs/Search'
import Modal from '@components/Modals/Default'
import Label from '@components/Texts/Label'
import { faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import teamStore from '@stores/Team'
import toastStore from '@stores/Toast'
import userStore from '@stores/User'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { toJS } from 'mobx'

const AddCollaborator = forwardRef(({ team, ext }, ref) => {
  const searchRef = useRef(null),
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    [open, setOpen] = useState(false)

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

    const user = searchRef.current.getValue()

    if (!user) {
      setError('Veuillez sélectionner un utilisateur')
    } else {
        teamStore.addCollaborator(user.id, team.id)
      const newTeam = toJS(teamStore.team)
      if (newTeam.users.find((u) => u.id === user.id)) {
        toastStore.addToast('Collaborateur ajouté', true)
        setOpen(false)
      } else {
        setError('Une erreur est survenue')
      }
    }

    setIsLoading(false)
  }

  return (
    <>
      {!ext && (
        <BtnConfirm iconLeft={faUserPlus} onClick={() => setOpen(true)}>
          Ajouter un collaborateur
        </BtnConfirm>
      )}
      {open && (
        <Modal
          onSubmit={submit}
          title="Ajouter un collaborateur"
          color={team.color}
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
                {isLoading ? 'Traitement en cours...' : 'Ajouter'}
              </BtnConfirm>
            </>
          }
        >
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Rechercher
          </div>
          <div className="flex flex-col gap-2 relative">
            <SearchInput ref={searchRef} full user />
          </div>
        </Modal>
      )}
    </>
  )
})

AddCollaborator.displayName = 'AddCollaborator'

AddCollaborator.propTypes = {
  team: PropTypes.object.isRequired,
  primary: PropTypes.bool,
  ext: PropTypes.bool,
  edit: PropTypes.bool,
}

export default AddCollaborator
