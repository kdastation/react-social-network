import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { registerUser } from "../../../middlewares/registration-middleware/registration-middleware";
import {
  validatorsFormRegistrationFieldLogin,
  validatorsFormRegistrationFieldPassword,
} from "../../../validators/validators-form-registration";
import { useForm, Controller } from "react-hook-form";
import { LoginField } from "./login-field";

export interface FormRegistrationField {
  name: string;
  password: string;
}
//TODO: Доделать регистрацию
const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset, formState } =
    useForm<FormRegistrationField>({
      mode: "onBlur",
      reValidateMode: "onBlur",
    });

  const testSubmit = (data: FormRegistrationField) => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit(testSubmit)}>
        <LoginField control={control} Component={TextField} />
        {/* <Controller
          name="name"
          rules={validatorsFormRegistrationFieldLogin}
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error?.message}
              helperText={error?.message}
              label="login"
              {...field}
              value={field.value || ""}
            />
          )}
          control={control}
        /> */}
        <Controller
          name="password"
          shouldUnregister={true}
          rules={validatorsFormRegistrationFieldPassword}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type="password"
              error={!!error?.message}
              helperText={error?.message}
              label="password"
              {...field}
              value={field.value || ""}
            />
          )}
          control={control}
        />
        <Button
          type="submit"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          Зарегистроваться
        </Button>
      </form>
    </div>
  );
};

export { RegistrationForm };

// const registerUserOnClick = () => {
//     const userData: IUser = {
//       name: loginInput.value,
//       password: passwordInput.value,
//     };
//     dispatch(registerUser(userData));
//   };
