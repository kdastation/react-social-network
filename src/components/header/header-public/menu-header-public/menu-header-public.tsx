import { Box, Button, Menu, MenuItem } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useStandartMenu } from "../../../../hooks/standart-menu-hook";
import { RoutesNames } from "../../../../routes/consts-routes";

//TODO: Доделать
const MenuHeaderPublic: FC = () => {
  const menu = useStandartMenu();
  return (
    <Box>
      <Button onClick={menu.handleClick}>
        <span>Menu</span>
      </Button>
      <Menu
        anchorEl={menu.anchorElement}
        onClose={menu.onClose}
        open={Boolean(menu.anchorElement)}
      >
        <MenuItem onClick={menu.onClose}>
          <Link to={RoutesNames.HOME}>Home</Link>
        </MenuItem>
        <MenuItem onClick={menu.onClose}>
          <Link to={RoutesNames.REGISTRATION}>Registration</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export { MenuHeaderPublic };
