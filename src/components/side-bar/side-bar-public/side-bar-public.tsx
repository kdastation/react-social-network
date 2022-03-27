import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../../routes/consts-routes";
import { LoginForm } from "../../forms/login-form/login-form";
import styles from "./side-bar-public.module.scss";

const SideBarPublic: FC = () => {
  return (
    <div className={styles.side_bar_wrapper}>
      <div>
        <LoginForm />
      </div>
      <div>
        <Button>
          <Link to={RoutesNames.REGISTRATION}>Зарегистрироваться</Link>
        </Button>
      </div>
    </div>
  );
};

export { SideBarPublic };
