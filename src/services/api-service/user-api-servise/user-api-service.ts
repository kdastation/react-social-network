import axios from "axios";
import { apiUrlNames } from "../const-api-service";
import { IUser } from "../../../models/user-models/user-model";
import { IUserInformation } from "../../../models/user-models/user-information-model";

class GeneralUserApiServise {
  static async getUser(name: string): Promise<IUser | undefined> {
    const response = await axios.get<IUser[]>(
      apiUrlNames.MAIN_URL + apiUrlNames.URL_USER + name
    );
    const userInformation: IUser = response.data[0];
    return userInformation;
  }

  static async getUserInformation(
    name: string
  ): Promise<IUserInformation | undefined> {
    const response = await axios.get<IUserInformation[]>(
      apiUrlNames.MAIN_URL + apiUrlNames.URL_USER_INFORMATIONS + name
    );
    const userInformation: IUserInformation = response.data[0];
    return userInformation;
  }
}

const changePasswordUser = async (userData: IUser) => {
  const receviedUserInfromation =
    await GeneralUserApiServise.getUserInformation(userData.name);
  if (!receviedUserInfromation) {
    throw new Error("Произошла ошибка");
  }
  await axios.put(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_USERS + receviedUserInfromation.id,
    userData
  );
};

export { GeneralUserApiServise, changePasswordUser };
