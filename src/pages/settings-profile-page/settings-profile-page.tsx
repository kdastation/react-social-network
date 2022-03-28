import { FC } from "react";
import { useSelector } from "react-redux";
import { CityChangeForm } from "../../components/forms/city-change-form/city-change-form";
import { LanguageChangeForm } from "../../components/forms/language-change-form/language-change-form";
import { PasswordChangeForm } from "../../components/forms/password-change-form/password-change-form";
import { SettingsProfileTemplate } from "../../components/settings-profile/settings-profile-template";
import { AuthSelector } from "../../selectors/auth-selector";
import styles from "./settings-profile-page.module.scss";

const SettingProfilePage: FC = () => {
  const activeUserName = useSelector(AuthSelector.getUserName);
  return (
    <div>
      <div className={styles.setting_title}>
        {activeUserName} ваши настройки! :)
      </div>
      <SettingsProfileTemplate
        userName={activeUserName}
        FormForChange={PasswordChangeForm}
        nameSetting="Пароль"
      />
      <SettingsProfileTemplate
        userName={activeUserName}
        FormForChange={CityChangeForm}
        nameSetting="Город"
      />
      <SettingsProfileTemplate
        userName={activeUserName}
        FormForChange={LanguageChangeForm}
        nameSetting="Языки"
      />
    </div>
  );
};

export { SettingProfilePage };
