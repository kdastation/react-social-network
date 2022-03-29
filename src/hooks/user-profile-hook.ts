import { IUserInformation } from "./../models/user-models/user-information-model";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ParamProfilePage } from "../routes/consts-routes";
import { GeneralUserApiServise } from "../services/api-service/user-api-servise/user-api-service";
import { AuthSelector } from "../redux/selectors/auth-selector";
import { useFetching } from "./fetching-hook";

interface IUseUser {
  isActiveUser: boolean;
  errorMessage: string | null;
  isLoading: boolean;
  userData: IUserInformation | null;
  isAuth: boolean;
}

const useUserProfile = (): IUseUser => {
  const nameActiveUser = useSelector(AuthSelector.getUserName);
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);
  const [userData, setUserData] = useState<IUserInformation | null>(null);
  const { userName: userNameForParams } = useParams<ParamProfilePage>();
  const {
    error,
    fetching: fetchUser,
    isLoading,
  } = useFetching(async () => {
    const user = await GeneralUserApiServise.upgradeGetUserInformation(
      userNameForParams
    );
    setUserData(user);
  });

  useEffect(() => {
    fetchUser();
  }, [userNameForParams]);

  return {
    isActiveUser: isAuth && nameActiveUser === userData?.name,
    isLoading: isLoading,
    errorMessage: error,
    userData: userData,
    isAuth,
  };
};

export { useUserProfile };
