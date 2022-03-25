import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FC } from "react";
import { useStandartMenu } from "../../../hooks/standart-menu-hook";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../../routes/consts-routes";

interface MorePostMenuProps {
  idPost: number;
}

const MorePostMenu: FC<MorePostMenuProps> = (props) => {
  const { idPost } = props;
  const menuPost = useStandartMenu();
  return (
    <>
      <Button
        onClick={menuPost.handleClick}
        startIcon={<MoreHorizIcon />}
      ></Button>
      <Menu
        anchorEl={menuPost.anchorElement}
        open={Boolean(menuPost.anchorElement)}
        onClose={menuPost.onClose}
      >
        <MenuItem onClick={menuPost.onClose}>
          <Link to={`${RoutesNames.POST_PAGE_WITHOUT_PARAM + idPost}`}>
            Посмотреть пост детальнее
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
export { MorePostMenu };
