
import React, { FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../middlewares/registration-middleware/registration-middleware";
import { IUser } from "../../../models/user-models/user-model";
import { RegistrationSelector } from "../../../selectors/registration-selector";
import { useInput } from "../../../hooks/input-hook";

//TODO: Доделать регистрацию
const RegistrationForm: FC = () => {

    const dispatch = useDispatch()
    const errorMessage = useSelector(RegistrationSelector.getErrorMessage)
    const passwordInput = useInput()
    const loginInput = useInput()
    
    const registerUserOnClick = () => {
        const userData: IUser = {
            name: loginInput.value,
            password: passwordInput.value
        }
        dispatch(registerUser(userData))
    }

    const error = errorMessage && <div>{errorMessage}</div>

    return (
        <div className="registration-form">
            {error}
            <input onChange={loginInput.onChange} value={loginInput.value} type="text" />
            <input onChange={passwordInput.onChange} value={passwordInput.value} type="password" />
            <button onClick={registerUserOnClick}>Зарегистрироваться</button>
        </div>
    )
}

export {RegistrationForm}