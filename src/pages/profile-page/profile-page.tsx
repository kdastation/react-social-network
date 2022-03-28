import { FC } from "react";
import { useUserProfile } from "../../hooks/user-profile-hook";
import { ProfileInformations } from "../../components/profile-informations/profile-informations";
import { renderError } from "../../services/components-service/render-components-service";
import { Posts } from "../../components/posts/posts";
import { DefaultLoader } from "../../components/loaders/default-loader/default-loader";
import styles from "./profile-page.module.scss";

const ProfilePage: FC = () => {
  const { errorMessage, isActiveUser, isAuth, isLoading, userData } =
    useUserProfile();

  const error = renderError(isLoading, errorMessage);

  return (
    <div>
      {isLoading && (
        <div className={styles.loader_wrapper}>
          <DefaultLoader />
        </div>
      )}
      {error}
      <div className={styles.profile_informations_wrapper}>
        {!isLoading && !errorMessage && (
          <ProfileInformations
            isAuth={isAuth}
            isActiveUser={isActiveUser}
            userData={userData}
          />
        )}
      </div>
      <div>
        {!isLoading && !errorMessage && (
          <Posts
            userAvatar={userData.img}
            isAuth={isAuth}
            nameUser={userData.name}
          />
        )}
      </div>
    </div>
  );
};

export { ProfilePage };
