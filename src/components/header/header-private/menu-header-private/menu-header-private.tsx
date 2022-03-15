import { Box, Button, Menu, MenuItem } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useStandartMenu } from "../../../../hooks/standart-menu-hook";
import { RoutesNames } from "../../../../routes/consts-routes";

interface MenuHeaderPrivateProps {
  userName: string | null;
}

const MenuHeaderPrivate: FC<MenuHeaderPrivateProps> = (props) => {
  const { userName } = props;
  const menu = useStandartMenu();

  return (
    <Box>
      <Button color="success" onClick={menu.handleClick}>
        Menu
      </Button>
      <Menu
        anchorEl={menu.anchorElement}
        open={Boolean(menu.anchorElement)}
        onClose={menu.onClose}
      >
        <MenuItem onClick={menu.onClose}>
          <Link to={RoutesNames.HOME}>Home</Link>
        </MenuItem>
        <MenuItem onClick={menu.onClose}>
          <Link to={`${RoutesNames.PROFILE_PAGE}${userName}`}>{userName}</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export { MenuHeaderPrivate };
