import './login-page.css'  
import {FC} from "react";
import { LoginForm } from '../../components/forms/login-form/login-form';


const LoginPage: FC = () => {

    return <div>
        <LoginForm /> 
    </div>
}

export {LoginPage}