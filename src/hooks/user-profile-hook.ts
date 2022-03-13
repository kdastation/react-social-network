import { IUserInformation } from './../models/user-models/user-information-model';
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { IUser } from "../models/user-models/user-model"
import { ParamProfilePage } from "../routes/consts-routes"
import { AuthSelector } from "../selectors/auth-selector"
import { getUser, getUserInformation } from "../services/api-service/user-api-service"


interface IUseUser{

    isActiveUser: boolean,
    errorMessage: string | null,
    isLoading: boolean,
    userData: IUserInformation,
    isAuth: boolean,
}
//TODO: Доделать
const useUserProfile = (): IUseUser => {

    const [error, setError] = useState<string| null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [userData, setUserData] = useState<IUserInformation>({} as IUserInformation)
    const {userName: userNameForParams} = useParams<ParamProfilePage>()

    const fetchUserData = () => { //TODO: переделать это безобразие
        setIsLoading(true)
        getUserInformation(userNameForParams)
        .then(user => {
            const isUseExists = !!user
            if (isUseExists){
                setUserData(user)
            }else{
                setError("Пользователь не найден")
            }
        })
        .finally(() => setIsLoading(false))
            
        
    }
    useEffect(() => {
        fetchUserData()
    },[])

    const nameActiveUser = useSelector(AuthSelector.getUserName)
    const isAuth = useSelector(AuthSelector.getIsAuthStatus)

    return {
        isActiveUser: isAuth && nameActiveUser===userNameForParams,
        isLoading: isLoading,
        errorMessage: error,
        userData: userData,
        isAuth
    }

}

export {useUserProfile}