import TeamTable from "@/components/Tables/TeamTable";
import TeamContext from "../contexts/Team";
import AuthContext from "../contexts/Auth";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react";
const Teams = observer(() => {
    const teamStore = useContext(TeamContext)
    const authStore = useContext(AuthContext)
    const teams = teamStore.teams;
    useEffect(() => {
        teamStore.getAllTeams(authStore.getUser().id)
    }, [authStore, teamStore])
    return (
        <div className="px-5">
            {teams && (
                <TeamTable />
            )}
        </div>
    )
})

export default Teams;