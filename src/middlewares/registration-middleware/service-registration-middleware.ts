import { IUser } from './../../models/user-model';
import { getUser } from '../../services/api-service/user-api-service';


class ValidatorRegistrationForm{

    private userData: IUser

    constructor(userData: IUser){
        this.userData = userData
    }

    public async validateRegistrationForm(): Promise<string>{

        const isLoginCorrect = this.validateLoginUser()

        if (!isLoginCorrect){
            return "Имя пользователя слишком короткое"
        }

        const isUserWithThisNameFound = await this.checkIfSuchUserExists()

        if (isUserWithThisNameFound){
            return "Пользователь с таким именем уже существует"
        }

        const isPasswordCorrect = this.validatePasswordUser()

        if (!isPasswordCorrect){
            return "Пароль слишком легкий"
        }

        return "OK"
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