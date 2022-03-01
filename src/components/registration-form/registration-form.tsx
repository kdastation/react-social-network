
import React, { FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../middlewares/registration-middleware/registration-middleware";
import { IUser } from "../../models/user-model";
import { setLogin, setPassword } from "../../redux/reducers/registration-reducer";
import { RegistrationSelector } from "../../selectors/registration-selector";



//TODO: Доделать регистрацию
const RegistrationForm: FC = () => {

    const dispatch = useDispatch()
    const password = useSelector(RegistrationSelector.getPassword)
    const login = useSelector(RegistrationSelector.getLogin)
    const errorMessage = useSelector(RegistrationSelector.getErrorMessage)

    const changePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value))
    }

    const changeLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLogin(event.target.value))
    }

    const registerUserOnClick = () => {
        const userData: IUser = {
            name: login,
            password: password
        }
        dispatch(registerUser(userData))
    }

    const error = errorMessage && <div>{errorMessage}</div>

    return (
        <div className="registration-form">
            {error}
            <input onChange={changeLoginInput} value={login} type="text" />
            <input onChange={changePasswordInput} value={password} type="password" />
            <button onClick={registerUserOnClick}>Зарегистрироваться</button>
        </div>
    )
}

export {RegistrationForm}