
export enum AuthConsts{
    KEY_USER_IN_LOCAL_STORAGE = 'userName',
    ERROR_MESSAGE_FOR_WRONG_PASSWORD = 'Пароль введен неверно',
    ERROR_MESSAGE_FOR_USER_NOT_FOUND = 'Пользователь с таким именем не найден'
}


/**
 * Проверка на корректность веденного пароля
 * @param passwordForInput - Пароль, веденный в форме
 * @param passwordUser - Пароль, полученный из api
 * @returns 
 */
const checkIfThePasswordIsCorrect = (passwordForInput: string, passwordUser: string) : boolean =>  {
    return passwordForInput === passwordUser
}

/**
 * Добавление в localStorage необходимой информации о пользователе
 * @param userName - Имя пользователя
 */
const addUserInformationInLocalStorage = (userName : string) : void => {
    localStorage.setItem(AuthConsts.KEY_USER_IN_LOCAL_STORAGE, userName)
}


/**
 * Удаление информации о пользователе из localStorage
 */
const deleteUserInformationForLocalStorage = (): void => {
    localStorage.removeItem(AuthConsts.KEY_USER_IN_LOCAL_STORAGE)
} 


/**
 * Получение необходимой информации о пользователе из localStorage
 * @returns 
 */
const getUserInformationForLocalStorage = (): string | null => {
    return localStorage.getItem(AuthConsts.KEY_USER_IN_LOCAL_STORAGE)
}

export {checkIfThePasswordIsCorrect, 
        addUserInformationInLocalStorage, 
        deleteUserInformationForLocalStorage,
        getUserInformationForLocalStorage}