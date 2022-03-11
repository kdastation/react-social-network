import { IUser } from '../../models/user-models/user-model';
import { getUser } from '../../services/api-service/user-api-service';


export enum RegistrationValidateMessages{
    WRONG_LOGIN_VALIDATE = "Имя пользователя слишком короткое",
    WRONG_PASSWORD_VALIDATE = "Пароль слишком легкий",
    WRONG_LOGIN_NAME = "Пользователь с таким именем уже существует",
    REGISTRATION_WAS_SUCCESSGUL = "REGISTRATION_WAS_SUCCESSGUL"
}

class ValidatorRegistrationForm{

    private userData: IUser

    constructor(userData: IUser){
        this.userData = userData
    }

    public async validateRegistrationForm(): Promise<string>{

        const isLoginCorrect = this.validateLoginUser()

        if (!isLoginCorrect){
            return RegistrationValidateMessages.WRONG_LOGIN_VALIDATE
        }

        const isUserWithThisNameFound = await this.checkIfSuchUserExists()

        if (isUserWithThisNameFound){
            return RegistrationValidateMessages.WRONG_LOGIN_NAME
        }

        const isPasswordCorrect = this.validatePasswordUser()

        if (!isPasswordCorrect){
            return RegistrationValidateMessages.WRONG_PASSWORD_VALIDATE
        }

        return RegistrationValidateMessages.REGISTRATION_WAS_SUCCESSGUL
    }

    private validateLoginUser(): boolean{
        return this.userData.name.length > 3
    }

    private validatePasswordUser(): boolean{
        return this.userData.password.length > 5
    }

    private async checkIfSuchUserExists(): Promise<boolean>{
        const receviedUser = await getUser(this.userData.name)
        return !!receviedUser
    }
    
}

export {ValidatorRegistrationForm}