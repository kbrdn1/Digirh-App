import { Outlet } from 'react-router-dom'
import AuthContext from '@contexts/Auth'
import UserContext from '@contexts/User'
import AbsenceContext from '@contexts/Absence'
import TeamContext from '@contexts/Team'
import CountryContext from '@contexts/Country'
import NonWorkingDayContext from '@contexts/NonWorkingDay'
import NotificationContext from '@contexts/Notification'
import OrganisationContext from '@contexts/Organisation'
import StatutContext from '@contexts/Statut'
import ToastContext from '@contexts/Toast'
import TripContext from '@contexts/Trip'
import TypeContratContext from '@contexts/TypeContrat'
import authStore from '@stores/Auth'
import qbsenceStore from '@stores/Absence'
import userStore from '@stores/User'
import teamStore from '@stores/Team'
import countryStore from '@stores/Country'
import nonWorkingDayStore from '@stores/NonWorkingDay'
import notificationStore from '@stores/Notification'
import organisationStore from '@stores/Organisation'
import statutStore from '@stores/Statut'
import toastStore from '@stores/Toast'
import tripStore from '@stores/Trip'
import typeContratStore from '@stores/TypeContrat'
import Sidebar from '@components/Navs/Sidebar'
import Tabbar from '@components/Navs/Tabbar'
import Toaster from '@components/Toasts/Toaster'

const App = () => {
  return (
    <AuthContext.Provider value={authStore}>
      <UserContext.Provider value={userStore}>
        <AbsenceContext.Provider value={qbsenceStore}>
          <TeamContext.Provider value={teamStore}>
            <CountryContext.Provider value={countryStore}>
              <NonWorkingDayContext.Provider value={nonWorkingDayStore}>
                <NotificationContext.Provider value={notificationStore}>
                  <OrganisationContext.Provider value={organisationStore}>
                    <StatutContext.Provider value={statutStore}>
                      <ToastContext.Provider value={toastStore}>
                        <TripContext.Provider value={tripStore}>
                          <TypeContratContext.Provider value={typeContratStore}>
                            <Sidebar />
                            <main className="lg:ml-[276px] py-4 px-4 pt-28 duration-200 ease-out">
                              <Tabbar />
                              <Outlet />
                            </main>
                            <Toaster />
                          </TypeContratContext.Provider>
                        </TripContext.Provider>
                      </ToastContext.Provider>
                    </StatutContext.Provider>
                  </OrganisationContext.Provider>
                </NotificationContext.Provider>
              </NonWorkingDayContext.Provider>
            </CountryContext.Provider>
          </TeamContext.Provider>
        </AbsenceContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
