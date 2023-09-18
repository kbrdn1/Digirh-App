import authStore from "@stores/Auth";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const Organization = observer(() => {
    const { id } = useParams()

    if (authStore.user.team.organisation.id !== parseInt(id)) {
        return <Navigate to="/" />
    }

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <div>
            
        </div>
    );
})

export default Organization;