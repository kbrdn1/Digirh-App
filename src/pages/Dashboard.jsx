import BtnDanger from '@components/Buttons/Danger'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'


const Dashboard = observer(() => {
  const navigate = useNavigate()

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 font-nunito">
        <div className="flex flex-col items-center justify-center">
          <img src="/logo/logo_h.svg" alt="Digirh" />
          <h1 className="text-4xl font-bold text-center mt-8 font-franklin">
            Digirh
          </h1>
          <p className="text-center mt-4">
            Application de gestion des ressources humaines pour les entreprises.
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <BtnDanger
              content="Se déconnecter"
              onClickAction={() => navigate('/Digirh-App/logout')}
            />
          </div>
        </div>
      </main>
    </>
  )
})

export default Dashboard
