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
            <Button startIcon={<HomeIcon />}>
              <Link className={styles.link} to={RoutesNames.HOME}>
                Домой
              </Link>
            </Button>
          </li>
          <li>
            <Button startIcon={<AccountCircleIcon />}>
              <Link
                className={styles.link}
                to={RoutesNames.PROFILE_PAGE + activeUserName}
              >
                профиль
              </Link>
            </Button>
          </li>
          <li>
            <Button startIcon={<NewspaperIcon />}>
              <Link
                className={styles.link}
                to={RoutesNames.PAGE_TO_CREATE_A_NEW_POST}
              >
                Создать пост
              </Link>
            </Button>
          </li>
          <li>
            <Button startIcon={<SettingsIcon />}>
              <Link
                className={styles.link}
                to={RoutesNames.SETTINGS_PROFILE_PAGE}
              >
                Настройки
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
});

export { SideBarPrivate };
