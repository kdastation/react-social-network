import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { CustomInput } from "../../custom-input/custom-input";
import { useForm } from "react-hook-form";
import { authorizeUser } from "../../../async-thunks/auth-async-thunks/auth-async-thunks";
import styles from "./login-form.module.scss";

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
        <div className={styles.login_input}>
          <CustomInput
            Component={TextField}
            control={control}
            name="login"
            label="login"
            additionalErrorIndicator={!!error}
          />
        </div>
        <div className={styles.login_input}>
          <CustomInput
            Component={TextField}
            control={control}
            name="password"
            label="password"
            type="password"
            additionalErrorIndicator={!!error}
          />
        </div>
        <div>
          <Button
            type="submit"
            disabled={!formState.isValid || formState.isSubmitting}
          >
            Логин
          </Button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
