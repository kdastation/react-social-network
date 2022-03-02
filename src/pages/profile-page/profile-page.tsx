import {FC} from "react";
import { useUserProfile } from "../../hooks/user-profile-hook";
import { ProfileInformations } from "../../components/profile-informations/profile-informations";
import {renderError, renderLoading } from "../../services/components-service/render-components-service";


const ProfilePage: FC = () => {

    const {errorMessage, 
        isActiveUser,
        isAuth, 
        isLoading,
        userData} = useUserProfile()

    const loading = renderLoading(isLoading)
    const error = renderError(isLoading, errorMessage)
    const profileInformations = (!isLoading && !errorMessage ? 
                            <ProfileInformations isAuth={isAuth} isActiveUser={isActiveUser} 
                            userData={userData} /> : null)

    return <div> 
            {loading}
            {error}
            {profileInformations}
    </div>
}

export {ProfilePage}