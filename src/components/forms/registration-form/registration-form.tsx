import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { registerUser } from "../../../middlewares/registration-middleware/registration-middleware";
import {
  validatorsFormRegistrationFieldLogin,
  validatorsFormRegistrationFieldPassword,
} from "../../../validators/validators-form-registration";
import { useForm } from "react-hook-form";
import { MemoCustomInput } from "../../custom-input/custom-input";
import styles from "./registration-wrapper.module.scss";

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

  const registerUserOnClick = (data: FormRegistrationField) => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit(registerUserOnClick)}>
        <div className={styles.input_wrapper}>
          <MemoCustomInput
            Component={TextField}
            name="name"
            control={control}
            validators={validatorsFormRegistrationFieldLogin}
            label="login"
          />
        </div>
        <div className={styles.input_wrapper}>
          <MemoCustomInput
            type="password"
            control={control}
            name="password"
            validators={validatorsFormRegistrationFieldPassword}
            label="password"
            Component={TextField}
          />
        </div>
        <div className={styles.btn_wrapper}>
          <Button
            type="submit"
            disabled={!formState.isValid || formState.isSubmitting}
          >
            Зарегистроваться
          </Button>
        </div>
      </form>
    </div>
  );
};

export { RegistrationForm };
