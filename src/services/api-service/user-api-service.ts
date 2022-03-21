import axios from "axios";
import { apiUrlNames } from "./const-api-service";
import { IUser } from "../../models/user-models/user-model";
import { IUserInformation } from "../../models/user-models/user-information-model";

/**
 * Получение данных пользователя
 * @param name - имя пользователя
 * @returns
 */
const getUser = async (name: string): Promise<IUser | undefined> => {
  const response = await axios.get<IUser[]>(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_USER + name
  );
  const userInformation: IUser = response.data[0];
  return userInformation;
};

const getUserInformation = async (
  name: string
): Promise<IUserInformation | undefined> => {
  const response = await axios.get<IUserInformation[]>(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_USER_INFORMATIONS + name
  );
  const userInformation: IUserInformation = response.data[0];
  return userInformation;
};

const changePasswordUser = async (userData: IUser) => {
  const receviedUserInfromation = await getUserInformation(userData.name);
  if (!receviedUserInfromation) {
    throw new Error("Произошла ошибка");
  }
  await axios.put(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_USERS + receviedUserInfromation.id,
    userData
  );
};

export class ApiRegisterUser {
  private userData: IUser;

  constructor(userData: IUser) {
    this.userData = userData;
  }

  public runRegistrationWithApi = async (): Promise<string> => {
    const newUserData = await this.addUser(this.userData);
    const nameNewUser = newUserData.name;
    this.createUserInformationInDataBase(nameNewUser);
    return nameNewUser;
  };

  private addUser = async (user: IUser): Promise<IUser> => {
    const response = await axios.post<IUser>(
      apiUrlNames.MAIN_URL + apiUrlNames.URL_USERS,
      user
    );
    return response.data;
  };

  private createUserInformationInDataBase = async (
    name: string
  ): Promise<void> => {
    const newUserInformations = this.createUserInformations(name);
    await axios.post(
      apiUrlNames.MAIN_URL + apiUrlNames.URL_USERS_INFORMATIONS,
      newUserInformations
    );
  };

  private createUserInformations = (name: string) => {
    const newUserInformations = {
      name: this.userData.name,
    };
    return newUserInformations;
  };
}

export { getUser, getUserInformation, changePasswordUser };
