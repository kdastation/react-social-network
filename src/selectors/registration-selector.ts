import { IRegistrationState } from './../redux/reducers/registration-reducer';
import { rootState } from './../redux/store';
class RegistrationSelector{

    static getLogin = (state: rootState): string => {
        const registration: IRegistrationState = state.registration
        return registration.login
    }

    static getPassword = (state: rootState): string => {
        const registration: IRegistrationState = state.registration 
        return registration.password
    }

    static getErrorMessage = (state: rootState): string | null => {
        const registration: IRegistrationState = state.registration 
        return registration.errorMessage
    }

}

export {RegistrationSelector}