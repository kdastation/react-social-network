import { IUserInformation } from "./../models/user-models/user-information-model";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ParamProfilePage } from "../routes/consts-routes";
import { GeneralUserApiServise } from "../services/api-service/user-api-servise/user-api-service";
import { AuthSelector } from "../redux/selectors/auth-selector";

interface IUseUser {
  isActiveUser: boolean;
  errorMessage: string | null;
  isLoading: boolean;
  userData: IUserInformation;
  isAuth: boolean;
}
//TODO: Доделать
const useUserProfile = (): IUseUser => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUserInformation>(
    {} as IUserInformation
  );
  const { userName: userNameForParams } = useParams<ParamProfilePage>();

  const fetchUserData = () => {
    //TODO: переделать это безобразие
    setIsLoading(true);
    setError(null);
    GeneralUserApiServise.getUserInformation(userNameForParams)
      .then((user) => {
        const isUseExists = !!user;
        if (isUseExists) {
          setUserData(user);
        } else {
          setError("Пользователь не найден");
        }
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetchUserData();
  }, [userNameForParams]);

  const nameActiveUser = useSelector(AuthSelector.getUserName);
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);

  return {
    isActiveUser: isAuth && nameActiveUser === userNameForParams,
    isLoading: isLoading,
    errorMessage: error,
    userData: userData,
    isAuth,
  };
};

export { useUserProfile };
