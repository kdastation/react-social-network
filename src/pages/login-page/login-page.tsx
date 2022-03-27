import { FC } from "react";
import { LoginForm } from "../../components/forms/login-form/login-form";
import styles from "./login-page.module.scss";

const LoginPage: FC = () => {
  return (
    <div className={styles.form_wrapper}>
      <LoginForm />
    </div>
  );
};

export { LoginPage };
