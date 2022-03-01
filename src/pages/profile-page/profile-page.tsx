import {FC} from "react";
import { useUser } from "../../hooks/useUser";
import { ProfileInformations } from "../../components/profile-informations/profile-informations";
import {renderError, renderLoading } from "../../services/components-service/render-components-service";


const ProfilePage: FC = () => {

    const {errorMessage, 
        isActiveUser, 
        isLoading,
        userData} = useUser()

    const loading = renderLoading(isLoading)
    const error = renderError(isLoading, errorMessage)
    const profileInformations = (!isLoading && !errorMessage ? 
                            <ProfileInformations isActiveUser={isActiveUser} 
                            userData={userData} /> : null)

    return <div> 
            {loading}
            {error}
            {profileInformations}
    </div>
}

export {ProfilePage}