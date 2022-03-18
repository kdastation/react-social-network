import {
  ValidatorsType,
  ConstsValidationFormCreatePosts,
  ValidationErrorMessageFormCreatePosts,
} from "./validators-helper/const-validators";
import { commonValidators } from "./validators-helper/common-validators";

export const validatorsFormCreatePost: ValidatorsType = {
  ...commonValidators,
  minLength: {
    value: ConstsValidationFormCreatePosts.MIN_LENGTH_POST,
    message: ValidationErrorMessageFormCreatePosts.MIN_LENGTH_POST_MESSAGE,
  },
};
