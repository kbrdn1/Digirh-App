import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from 'react'
import Modal from '@components/Modals/Default'
import Input from '@components/Inputs/Default'
import Select from '@components/Inputs/Select'
import Label from '@components/Texts/Label'
import BtnConfirm from '@components/Buttons/Confirm'
import BtnPrimary from '@components/Buttons/Primary'
import BtnSecondary from '@components/Buttons/Secondary'
import BtnCancel from '@components/Buttons/Cancel'
import InputFile from '@components/Inputs/File'
import PropTypes from 'prop-types'

const Absence = ({ user, primary }) => {
  const tripRef = useRef(null),
    amountRef = useRef(null),
    distanceRef = useRef(null),
    ticketRef = useRef(null),
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
    //   type: absenceRef.current.value,
    //   start_date: startDateRef.current.value,
    //   end_date: endDateRef.current.value,
    //   document: documentRef.current.value,
    // }

    // action via AbsenceStore

    // condition de succès ou d'erreur

    setError('Une erreur est survenue, veuillez réessayer...')

    setIsLoading(false)
  }

  return (
    <>
      {primary ? (
        <BtnPrimary onClick={() => setOpen(true)}>
          Faire une demande de déplacement
        </BtnPrimary>
      ) : (
        <BtnSecondary onClick={() => setOpen(true)}>
          Faire une demande de déplacement
        </BtnSecondary>
      )}
      {open && (
        <Modal
          onSubmit={handleSubmit}
          title="Faire une demande de déplacement"
          color="#5F4DEE"
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
              full
            />
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Informations
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2">
            <div className="flex flex-col gap-2">
              <Label text="Montant (€)" />
              <Input
                type="number"
                onRef={amountRef}
                full
                placeholder="0.00 €"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label text="Distance (km)" />
              <Input
                type="number"
                onRef={distanceRef}
                full
                placeholder="0.00 km"
              />
            </div>
          </div>
          <div className="font-franklin text-gray text-[1rem] font-bold">
            Justicatif
          </div>
          <div className="flex flex-col gap-2">
            <InputFile
              onRef={ticketRef}
              full
              accept="image/png, image/jpeg, application/pdf"
            />
          </div>
        </Modal>
      )}
    </>
  )
}

Absence.propTypes = {
  user: PropTypes.object.isRequired,
  primary: PropTypes.bool,
}

export default Absence
