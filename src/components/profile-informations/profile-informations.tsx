import { FC, memo } from "react";
import { IUserInformation } from "../../models/user-models/user-information-model";
import { renderLanguage } from "../../services/components-service/render-components-service";
import { LineEdit } from "../line-edit/line-edit";
import { List } from "../list/list";
import styles from "./profile-informations.module.scss";

interface ProfileInformationsProps {
  userData: IUserInformation;
  isActiveUser: boolean;
  isAuth: boolean;
}

const ProfileInformations: FC<ProfileInformationsProps> = memo((props) => {
  const { userData, isActiveUser, isAuth } = props;

  return (
    <div className={styles.profile_informatinos_container}>
      <div className={styles.profile_inforamations_wrapper}>
        <div className={styles.avatar}>
          <img src={userData?.img} alt="user-img-profile" />
        </div>
        <div className={styles.informations_text}>
          <div className={styles.name_user}>{userData.name}</div>
          <div className={styles.line_edit}>
            <LineEdit isActiveUser={isActiveUser} nameEditLine="Общее" />
          </div>
          <div className={styles.detail_informations_user}>
            <div className={styles.name_category}>Родной город:</div>
            <div className={styles.content_category}>
              {userData?.city || "Неизвестно"}
            </div>
          </div>
          <div className={styles.detail_informations_user}>
            <div className={styles.name_category}>Языки:</div>
            <div className={styles.content_category}>
              {userData.languages ? (
                <List items={userData.languages} renderItem={renderLanguage} />
              ) : (
                "Неизвестно"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export { ProfileInformations };
