import { apiUrlNames } from "./../const-api-service";
import axios from "axios";
import { IUserInformation } from "../../../models/user-models/user-information-model";
import { GeneralUserApiServise } from "./user-api-service";

export interface DataForChangeLanguageUser {
  languages: string[];
  userName: string;
}

export const changeLanguageUser = async (data: DataForChangeLanguageUser) => {
  const receviedUser = await GeneralUserApiServise.getUserInformation(
    data.userName
  );
  if (!receviedUser) {
    throw new Error("Произошла ошибка");
  }
  const newUserInformations: IUserInformation = {
    ...receviedUser,
    languages: data.languages,
  };

  await axios.put(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_USERS_INFORMATIONS + receviedUser.id,
    newUserInformations
  );
};
