import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from 'react'
import Modal from '@components/Modals/Default'
import Input from '@components/Inputs/Default'
import Label from '@components/Texts/Label'
import BtnConfirm from '@components/Buttons/Confirm'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import BtnCancel from '@components/Buttons/Cancel'
import Textarea from '@components/Inputs/Textarea'
import Checkbox from '@components/Inputs/Checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Team = ({ team, primary, small }) => {
  const nameRef = useRef(null),
    descriptionRef = useRef(null),
    minPersonRef = useRef(null),
    isActiveRef = useRef(null),
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

    // const data = {
    //   name_team: nameRef.current.value,
    //   description: descriptionRef.current.value,
    //   min_person: minPersonRef.current.value,
    //   is_active: isActiveRef.current.checked,
    // }

    // action via le store

    // condition de succès ou d'erreur

    setError('Une erreur est survenue, veuillez réessayer...')

    setIsLoading(false)
  }

  return (
    <>
      {small ? (
        <div
          className="group flex items-center gap-3 cursor-pointer text-sm text-gray-5 hover:bg-primary-5 hover:text-white font-semibold px-4 py-2 duration-200 ease-out"
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="group-hover:rotate-12 duration-200 ease-out"
          />
          <span>Editer</span>
        </div>
      ) : primary ? (
        <BtnPrimary onClickAction={() => setOpen(true)}>Editer</BtnPrimary>
      ) : (
        <BtnSecondary onClickAction={() => setOpen(true)}>
          Faire une demande de déplacement
        </BtnSecondary>
      )}
      {open && (
        <Modal
          onSubmitAction={handleSubmit}
          title="Faire une demande de déplacement"
          color="#5F4DEE"
          full
          error={error}
          footer={
            <>
              <BtnCancel onClickAction={() => setOpen(false)}>
                Annuler
              </BtnCancel>
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
              onRef={nameRef}
              defaultValue={team.name_team}
              full
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label text="Description" />
            <Textarea
              onRef={descriptionRef}
              defaultValue={team.description}
              full
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Effectif minimum
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            <Input
              type="number"
              onRef={minPersonRef}
              defaultValue={team.min_person}
              full
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Etat
          </div>
          <div className="flex flex-col gap-2">
            <Checkbox
              onRef={isActiveRef}
              defaultValue={team.is_active}
              text="Actif"
            />
          </div>
        </Modal>
      )}
    </>
  )
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
  primary: PropTypes.bool,
  small: PropTypes.bool,
}

export default Team
