import { useEffect, useState } from 'react'
import Success from './Success'
import Error from './Error'
import toastStore from '@stores/Toast'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

const Toaster = observer(() => {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    setToast(toJS(toastStore.toast))
  }, [toastStore.toast])

  return (
    <div className="fixed bottom-0 right-0 p-4 flex flex-col gap-2 w-fit overflow-x-hidden">
      {toast && toast.type === 'success' && (
        <Success message={toast.message} animation close />
      )}
      {toast && toast.type === 'error' && (
        <Error message={toast.message} animation close />
      )}
    </div>
  )
})

export default Toaster
