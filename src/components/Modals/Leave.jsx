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

const Leave = ({ user, primary }) => {
  const leaveRef = useRef(null),
    nameLeaveRef = useRef(null),
    startDateRef = useRef(null),
    endDateRef = useRef(null),
    documentRef = useRef(null),
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
    //   type: leaveRef.current.value,
    //   start_date: startDateRef.current.value,
    //   end_date: endDateRef.current.value,
    //   document: documentRef.current.value,
    // }

    // action via leaveStore

    // condition de succès ou d'erreur

    setError('Une erreur est survenue, veuillez réessayer...')

    setIsLoading(false)
  }

  return (
    <>
      {primary ? (
      <BtnPrimary
        onClickAction={() => setOpen(true)}
      >
        Faire une demande d’absence
        </BtnPrimary>
      ) : (
          <BtnSecondary
            onClickAction={() => setOpen(true)}
          >
            Faire une demande d’absence
        </BtnSecondary>
        )}
      {open && (
        <Modal
          onSubmitAction={handleSubmit}
          title="Faire une demande d’absence"
          color="#5F4DEE"
          full
          error={error}
          footer={
            <>
              <BtnCancel
                onClickAction={() => setOpen(false)}
              >
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
            Type d’leave
          </div>
          <div className="flex flex-col gap-2">
            <Select
              onRef={leaveRef}
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
              onRef={nameLeaveRef}
              defaultValue={'leave de ' + user.name + ' ' + user.firstname}
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
        </Modal>
      )}
    </>
  )
}

export default Leave
