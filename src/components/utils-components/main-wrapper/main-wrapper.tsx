import { FC } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../../selectors/auth-selector";
import { Header } from "../../header/header";
import { SideBar } from "../../side-bar/side-bar";
import { AppRouter } from "../app-router/app-router";
import styles from "./main-wrapper.module.scss";

const MainWrapper: FC = () => {
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);
  const activeUserName = useSelector(AuthSelector.getUserName);

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div className={styles.app_wrapper}>
          <div className={styles.app_side_bar}>
            <SideBar isAuth={isAuth} activeUserName={activeUserName} />
          </div>
          <div className={styles.main_content}>
            <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainWrapper };
