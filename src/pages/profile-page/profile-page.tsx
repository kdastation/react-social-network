import { FC } from "react";
import { useUserProfile } from "../../hooks/user-profile-hook";
import { ProfileInformations } from "../../components/profile-informations/profile-informations";
import { Posts } from "../../components/posts/posts";
import { DefaultLoader } from "../../components/loaders/default-loader/default-loader";
import styles from "./profile-page.module.scss";

//TODO: Доделать       {error}
const ProfilePage: FC = () => {
  const { errorMessage, isActiveUser, isAuth, isLoading, userData } =
    useUserProfile();

  const isSuccess = !isLoading && !errorMessage && userData;

  console.log(errorMessage);

  return (
    <div>
      {isLoading && (
        <div className={styles.loader_wrapper}>
          <DefaultLoader />
        </div>
      )}

      <div className={styles.profile_informations_wrapper}>
        {isSuccess && (
          <ProfileInformations
            isAuth={isAuth}
            isActiveUser={isActiveUser}
            userData={userData}
          />
        )}
      </div>
      <div>
        {isSuccess && (
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
