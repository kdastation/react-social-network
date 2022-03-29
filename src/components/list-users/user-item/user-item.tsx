import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../../routes/consts-routes";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { IUserInformation } from "../../../models/user-models/user-information-model";
import styles from "./user-item.module.scss";

interface UserItemProps {
  userInformation: IUserInformation;
}

const UserItem: FC<UserItemProps> = (props) => {
  const { userInformation } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Link to={`${RoutesNames.PROFILE_PAGE}${userInformation.name}`}>
          <img src={userInformation.img} alt="" />
        </Link>
      </div>
      <div className={styles.informations}>
        <div>
          <div>
            <Link to={`${RoutesNames.PROFILE_PAGE}${userInformation.name}`}>
              {userInformation.name}
            </Link>
          </div>
          <div>
            <div>Написать сообщение</div>
            <div>Позвонить</div>
          </div>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export { UserItem };

{
  /* <Link to={`${RoutesNames.PROFILE_PAGE}${userInformation.name}`}>
                    {userInformation.name}
                </Link> */
}
