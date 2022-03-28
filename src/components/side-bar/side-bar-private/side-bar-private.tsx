import { Button } from "@mui/material";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../../routes/consts-routes";
import SettingsIcon from "@mui/icons-material/Settings";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./side-bar-private.module.scss";

interface SideBarProps {
  activeUserName: string;
}

const SideBarPrivate: FC<SideBarProps> = memo((props) => {
  const { activeUserName } = props;
  return (
    <div className={styles.side_bar_wrapper}>
      <div>
        <ul className={styles.side_bar_navigation}>
          <li>
            <Link className={styles.link} to={RoutesNames.HOME}>
              <div className={styles.icon}>
                <HomeIcon />
              </div>
              <div className={styles.route_name}>Домой</div>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to={RoutesNames.PROFILE_PAGE + activeUserName}
            >
              <div className={styles.icon}>
                <AccountCircleIcon />
              </div>
              <div className={styles.route_name}>Профиль</div>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to={RoutesNames.PAGE_TO_CREATE_A_NEW_POST}
            >
              <div className={styles.icon}>
                <NewspaperIcon />
              </div>
              <div className={styles.route_name}>Создать пост</div>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to={RoutesNames.SETTINGS_PROFILE_PAGE}
            >
              <div className={styles.icon}>
                <SettingsIcon />
              </div>
              <div className={styles.route_name}>Настройки</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export { SideBarPrivate };
