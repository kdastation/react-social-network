import { FC } from "react";
import { RegistrationForm } from "../../components/forms/registration-form/registration-form";
import styles from "./registration-page.module.scss";

const RegistrationPage: FC = () => {
  return (
    <div>
      <div className={styles.text}>Добро пожаловать!</div>
      <div className={styles.container}>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export { RegistrationPage };
