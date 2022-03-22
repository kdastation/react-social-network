import axios from "axios";
import { IUser } from "../../../models/user-models/user-model";
import { apiUrlNames } from "../const-api-service";

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
