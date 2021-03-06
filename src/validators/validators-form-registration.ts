import {
  ValidationErrorMessagesRegistrationForm,
  ValidatorsType,
} from "./validators-helper/const-validators";
import { GeneralUserApiServise } from "../services/api-service/user-api-servise/user-api-service";
import { commonValidators } from "./validators-helper/common-validators";

const checkIfSuchUserExists = async (nameUser: string): Promise<boolean> => {
  console.log("request users");
  const receviedUser = await GeneralUserApiServise.getUserInformation(nameUser);
  return !!receviedUser;
};

export const validatorsFormRegistrationFieldLogin: ValidatorsType = {
  ...commonValidators,
  validate: async (value: string) => {
    const isUserWithThisNameFound = await checkIfSuchUserExists(value);
    if (isUserWithThisNameFound) {
      return ValidationErrorMessagesRegistrationForm.USER_ALREADY_EXISTS;
    }
    return true;
  },
};

export const validatorsFormRegistrationFieldPassword: ValidatorsType = {
  ...commonValidators,
};
