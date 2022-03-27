import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "../../../selectors/auth-selector";
import { logOut } from "../../../middlewares/auth-middleware/auth-middleware";
import { MenuHeaderPrivate } from "./menu-header-private/menu-header-private";
import { Button } from "@mui/material";
import styles from "./header-private.module.scss";

const HeaderPrivate: FC = () => {
  const userName = useSelector(AuthSelector.getUserName);
  const dispatch = useDispatch();

  const logOutOnClick = (): void => {
    dispatch(logOut());
  };

  return (
    <div className={styles.wrapper}>
      <MenuHeaderPrivate userName={userName} />
      <div>
        <Button onClick={logOutOnClick} className="logout-btn">
          Logout
        </Button>
      </div>
    </div>
  );
};

export { HeaderPrivate };
