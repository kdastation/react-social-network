import { ValidationErrorMessages } from "./validators-helper/const-validators";
import * as yup from "yup";

export const validatorsChangePasswordForm = yup.object().shape({
  password: yup
    .string()
    .required(ValidationErrorMessages.DEFAUL_REQUIRED_MESSAGE),
  confirmPassword: yup
    .string()
    .required(ValidationErrorMessages.DEFAUL_REQUIRED_MESSAGE)
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
});
