import { TextField } from "@mui/material";
import { FC, memo } from "react";
import { useForm, Controller, Control } from "react-hook-form";
import { validatorsFormRegistrationFieldLogin } from "../../../validators/validators-form-registration";
import { FormRegistrationField } from "./registration-form";

interface LoginFieldProps {
  control: Control<FormRegistrationField, any>;
  Component: typeof TextField;
}
//TODO: Доделать
const LoginField: FC<LoginFieldProps> = memo((props) => {
  const { control, Component } = props;
  console.log("Render");

  return (
    <Controller
      name="name"
      rules={validatorsFormRegistrationFieldLogin}
      render={({ field, fieldState: { error } }) => (
        <Component
          error={!!error?.message}
          helperText={error?.message}
          label="login"
          {...field}
          value={field.value || ""}
        />
      )}
      control={control}
    />
  );
});

export { LoginField };
