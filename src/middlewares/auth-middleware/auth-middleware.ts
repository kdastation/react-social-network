import { IUser } from "../../models/user-models/user-model";
import { appDispatch } from "../../redux/store";
import { getUser } from "../../services/api-service/user-api-service";
import {
  addUserInformationInLocalStorage,
  checkIfThePasswordIsCorrect,
  deleteUserInformationForLocalStorage,
  getUserInformationForLocalStorage,
  AuthConsts,
} from "./service-auth-middleware";
import {
  logOutOfUserAccount,
  setLoadingUser,
  setUser,
  disableLoadingUser,
} from "../../redux/reducers/auth-reducer";

//TODO: : Переделать названия переменных
const authorizeUser =
  (nameUser: string, password: string) =>
  async (dispatch: appDispatch): Promise<void> => {
    const user: IUser | undefined = await getUser(nameUser);
    if (user) {
      const isPasswordCorrectly = checkIfThePasswordIsCorrect(
        password,
        user.password
      );
      if (isPasswordCorrectly) {
        loginUser(user.name, dispatch);
      } else {
        throw new Error(AuthConsts.ERROR_MESSAGE_FOR_WRONG_PASSWORD);
      }
    } else {
      throw new Error(AuthConsts.ERROR_MESSAGE_FOR_USER_NOT_FOUND);
    }
  };

/**
 * Залогинить пользователя
 * @param userName
 * @param dispatch
 */
const loginUser = (userName: string, dispatch: appDispatch): void => {
  dispatch(setUser(userName));
  addUserInformationInLocalStorage(userName);
};

/**
 * Выход из аккаунта
 * 1) Удаляем все данные пользователя из state
 * 2) Удаляем всю информацию из localStorage
 */
const logOut =
  () =>
  (dispatch: appDispatch): void => {
    dispatch(logOutOfUserAccount());
    deleteUserInformationForLocalStorage();
  };

/**
 * Попытаться авторизовать пользователя при первоначальной загрузке приложения,
 * если необходимые данные есть в localStorage
 */
const tryToInitiallyAuthorizeTheUser =
  () =>
  (dispatch: appDispatch): void => {
    dispatch(setLoadingUser());
    const userInformation = getUserInformationForLocalStorage();
    if (userInformation) {
      dispatch(setUser(userInformation));
    }
    dispatch(disableLoadingUser());
  };

export { authorizeUser, logOut, tryToInitiallyAuthorizeTheUser, loginUser };
