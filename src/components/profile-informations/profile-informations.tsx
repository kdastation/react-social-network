import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IUserInformation } from "../../models/user-models/user-information-model";
import { RoutesNames } from "../../routes/consts-routes";
import { Posts } from "../posts/posts";
import styles from "./profile-informations.module.scss";

interface ProfileInformationsProps {
  userData: IUserInformation;
  isActiveUser: boolean;
  isAuth: boolean;
}

const ProfileInformations: FC<ProfileInformationsProps> = memo((props) => {
  const { userData, isActiveUser, isAuth } = props;

  const linkToNewPostPage = isActiveUser ? (
    <Link to={RoutesNames.PAGE_TO_CREATE_A_NEW_POST}>Создать новый пост</Link>
  ) : null;
  const posts = (
    <Posts userAvatar={userData.img} isAuth={isAuth} nameUser={userData.name} />
  );

  return (
    <div className={styles.profile_informatinos_container}>
      <div className={styles.profile_inforamations_wrapper}>
        <div className={styles.avatar}>
          <img src={userData?.img} alt="user-img-profile" />
        </div>
        <div>
          <div className={styles.name_user}>{userData.name}</div>
        </div>
      </div>
      <div>{posts}</div>
    </div>
  );
});

export { ProfileInformations };
