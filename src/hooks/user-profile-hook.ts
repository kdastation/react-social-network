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
    const params: ParamProfilePage = useParams()
    const userNameForParams = params.userName
    const fetchUserData = () => { //TODO: переделать это безобразие
        setIsLoading(true)
        getUserInformation(userNameForParams)
        .then(user => {
            if (!!!user){
                setError("Пользователь не найден")
                setIsLoading(false)
            }else{
                setUserData(user)
                setIsLoading(false)
            }
        })
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