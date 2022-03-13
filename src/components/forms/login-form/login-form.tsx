import './login-form.css'
import {FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser } from "../../../middlewares/auth-middleware/auth-middleware";
import { AuthSelector } from "../../../selectors/auth-selector";
import { useInput } from '../../../hooks/input-hook';

const LoginForm: FC = () => {

    const dispatch = useDispatch()
    const errorMessage = useSelector(AuthSelector.getErrorMessage)
    const loginInput = useInput()
    const passwordInput = useInput()
  
    const loginUser = () => {
        dispatch(authorizeUser(loginInput.value, passwordInput.value))
    }
    
    const error = errorMessage && <p>{errorMessage}</p>

    return (
        <div className="login-form">
            {error}
            <input type="text" onChange={loginInput.onChange} value={loginInput.value} />
            <input type="password" onChange={passwordInput.onChange} value={passwordInput.value} />
            <button onClick={loginUser}>Логин</button>
        </div>
    )
}

export {LoginForm}