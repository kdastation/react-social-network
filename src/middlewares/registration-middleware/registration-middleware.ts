
import { IUser } from "../../models/user-model"
import { appDispatch } from "../../redux/store"
import { addUser} from "../../services/api-service/user-api-service"
import { loginUser } from "../auth-middleware/auth-middleware"
import { ValidatorRegistrationForm } from './service-registration-middleware';
import { clearLoginAndPasswordField, setErrorMessageRegister } from "../../redux/reducers/registration-reducer"
//TODO: Доделать регистрацию
/**
 * Регистрация пользователя
 * 1) Проверяем, есть ли пользователь с таким именем в базе данных
 * 2) Если он есть, то ...
 * 3) Если нет, то добавляем пользователя и логин его
 * @param userData 
 * @returns 
 */
 const registerUser = (userData: IUser) => async (dispatch: appDispatch): Promise<void> =>  {
    const validator = new ValidatorRegistrationForm(userData)
    const verdicte = await validator.validateRegistrationForm()

    if (verdicte==="OK"){

      createNewUser(userData, dispatch)

    }else{
        
        dispatch(setErrorMessageRegister(verdicte))
    }
}

const createNewUser = async (userData: IUser, dispatch: appDispatch): Promise<void> => {
    const newUser = await addUser(userData)
    loginUser(newUser.name, dispatch) 
    dispatch(clearLoginAndPasswordField())
}

export {registerUser}