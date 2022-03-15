import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "../../../selectors/auth-selector";
import { logOut } from "../../../middlewares/auth-middleware/auth-middleware";
import { MenuHeaderPrivate } from "./menu-header-private/menu-header-private";

const HeaderPrivate: FC = () => {
  const userName = useSelector(AuthSelector.getUserName);
  const dispatch = useDispatch();

  const logOutOnClick = (): void => {
    dispatch(logOut());
  };

  return (
    <>
      <MenuHeaderPrivate userName={userName} />
      <li className="logounavigation-itemt">
        <button onClick={logOutOnClick} className="logout-btn">
          Logout
        </button>
      </li>
    </>
  );
};

export { HeaderPrivate };
