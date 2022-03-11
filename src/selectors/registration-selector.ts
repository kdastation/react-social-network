import { IRegistrationState } from './../redux/reducers/registration-reducer';
import { rootState } from './../redux/store';
class RegistrationSelector{

    static getErrorMessage = (state: rootState): string | null => {
        const registration: IRegistrationState = state.registration 
        return registration.errorMessage
    }

}

export {RegistrationSelector}