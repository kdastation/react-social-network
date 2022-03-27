import { FC } from "react";
import { SideBarPrivate } from "./side-bar-private/side-bar-private";
import { SideBarPublic } from "./side-bar-public/side-bar-public";

interface SideBarProps {
  isAuth: boolean;
  activeUserName: string | null;
}

const SideBar: FC<SideBarProps> = (props) => {
  const { isAuth, activeUserName } = props;
  return (
    <div>
      {isAuth && activeUserName && (
        <div>
          <SideBarPrivate activeUserName={activeUserName} />
        </div>
      )}
      {!isAuth && (
        <div>
          <SideBarPublic />
        </div>
      )}
    </div>
  );
};

export { SideBar };
