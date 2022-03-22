import { IUser } from "../../models/user-models/user-model";
import { appDispatch } from "../../redux/store";
import { ApiRegisterUser } from "../../services/api-service/user-api-servise/rigister-user-api";
import { loginUser } from "../auth-middleware/auth-middleware";

//TODO: Доделать регистрацию
/**
 * Регистрация пользователя
 * 1) Проверяем, есть ли пользователь с таким именем в базе данных
 * 2) Если он есть, то ...
 * 3) Если нет, то добавляем пользователя и логин его
 * @param userData
 * @returns
 */
const registerUser =
  (userData: IUser) =>
  async (dispatch: appDispatch): Promise<void> => {
    createNewUser(userData, dispatch);
  };

const createNewUser = async (
  userData: IUser,
  dispatch: appDispatch
): Promise<void> => {
  const register = new ApiRegisterUser(userData);
  const nameNewUser = await register.runRegistrationWithApi();
  loginUser(nameNewUser, dispatch);
};

export { registerUser };
