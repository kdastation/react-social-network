import { FC } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/selectors/auth-selector";
import { HeaderPublic } from "./header-public/header-public";
import { HeaderPrivate } from "./header-private/header-private";
import { Container } from "@mui/material";
import styles from "./header.module.scss";

//TODO: Прокинуть isAuth и userName в пропсах
const Header: FC = () => {
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);

  const headerNavigation = isAuth ? <HeaderPrivate /> : <HeaderPublic />;

  return (
    <>
      <div className={styles.wrapper}>
        <Container>{headerNavigation}</Container>
      </div>
    </>
  );
};

export { Header };
