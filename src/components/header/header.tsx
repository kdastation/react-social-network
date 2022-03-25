import { FC } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../selectors/auth-selector";
import { HeaderPublic } from "./header-public/header-public";
import { HeaderPrivate } from "./header-private/header-private";
import { AppBar, Container } from "@mui/material";

//TODO: Прокинуть isAuth и userName в пропсах
const Header: FC = () => {
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);

  const headerNavigation = isAuth ? <HeaderPrivate /> : <HeaderPublic />;

  return (
    <>
      <AppBar sx={{ backgroundColor: "gainsboro" }} position="static">
        <Container>{headerNavigation}</Container>
      </AppBar>
    </>
  );
};

export { Header };
