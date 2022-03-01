import axios from "axios";
import {apiUrlNames} from "./const-api-service";
import {IUser} from "../../models/user-model";


/**
 * Получение данных пользователя
 * @param name - имя пользователя
 * @returns 
 */
const getUser = async (name: string): Promise<IUser | undefined> => {

    const response = await axios.get<IUser[]>(apiUrlNames.MAIN_URL+apiUrlNames.URL_USER+name)
    const userInformation: IUser = response.data[0]
    return userInformation

}

const addUser = async (user: IUser): Promise<IUser> => {
    const response = await axios.post<IUser>(apiUrlNames.MAIN_URL+apiUrlNames.URL_USERS, user)
    return response.data
}

export {getUser, addUser}