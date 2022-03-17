import { RegisterOptions } from "react-hook-form";
import { getUserInformation } from "../services/api-service/user-api-service";

//TODO: Доделать
export enum RegistrationValidateMessages{
    WRONG_LOGIN_VALIDATE = "Имя пользователя слишком короткое",
    WRONG_PASSWORD_VALIDATE = "Пароль слишком легкий",
    WRONG_LOGIN_NAME = "Пользователь с таким именем уже существует",
    REGISTRATION_WAS_SUCCESSGUL = "REGISTRATION_WAS_SUCCESSGUL"
}

const defaultRequriedMessage = "Поле должно быть заполнено"

const checkIfSuchUserExists = async (nameUser: string): Promise<boolean> => {
    console.log("request users")
    const receviedUser = await getUserInformation(nameUser)
    return !!receviedUser
}

export const validatorsFormRegistrationFieldLogin:  Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'> = {
    required: defaultRequriedMessage,
    validate: async (value: string) => {
        const isUserWithThisNameFound = await checkIfSuchUserExists(value)
        if (isUserWithThisNameFound){
            return "Пользователь с таким именем уже существует"
        }
        return true
    }
}

export const validatorsFormRegistrationFieldPassword: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'> = {
    required: defaultRequriedMessage,
}

