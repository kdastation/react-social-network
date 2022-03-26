import { apiUrlNames } from "./../const-api-service";
import axios from "axios";
import { GeneralUserApiServise } from "./user-api-service";

export interface DataForChangeCityUser {
  newCity: string;
  userName: string;
}

export const ChangeCityUser = async (data: DataForChangeCityUser) => {
  const receviedUser = await GeneralUserApiServise.getUserInformation(
    data.userName
  );
  if (!receviedUser) {
    throw new Error("Произошла ошибка");
  }
  const newUserInformations = {
    ...receviedUser,
    city: data.newCity,
  };
  await axios.put(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_USERS_INFORMATIONS + receviedUser.id,
    newUserInformations
  );
};
