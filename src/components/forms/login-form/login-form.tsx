import "./login-form.css";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../../../middlewares/auth-middleware/auth-middleware";
import { Button, TextField } from "@mui/material";
import { CustomInput } from "../../custom-input/custom-input";
import { useForm } from "react-hook-form";

interface FormLoginField {
  login: string;
  password: string;
}

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit, formState } = useForm<FormLoginField>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const loginUserOnClick = async (data: FormLoginField) => {
    try {
      await dispatch(authorizeUser(data.login, data.password));
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <div className="login-form">
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit(loginUserOnClick)}>
        <CustomInput
          Component={TextField}
          control={control}
          name="login"
          label="login"
          additionalErrorIndicator={!!error}
        />
        <CustomInput
          Component={TextField}
          control={control}
          name="password"
          label="password"
          type="password"
          additionalErrorIndicator={!!error}
        />
        <Button
          type="submit"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          Логин
        </Button>
      </form>
    </div>
  );
};

export { LoginForm };
