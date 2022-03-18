import { RegisterOptions } from "react-hook-form";

export type ValidatorsType = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

export enum ConstsValidationFormCreatePosts {
  MIN_LENGTH_POST = 10,
}

export const ValidationErrorMessageFormCreatePosts = {
  MIN_LENGTH_POST_MESSAGE: `Минимальная длина поста ${ConstsValidationFormCreatePosts.MIN_LENGTH_POST} символов`,
};

export enum ValidationErrorMessages {
  DEFAUL_REQUIRED_MESSAGE = "Поле обязательно должно быть заполнено",
}

export enum ValidationErrorMessagesRegistrationForm {
  USER_ALREADY_EXISTS = "Пользователь с таким именем уже существует",
}
