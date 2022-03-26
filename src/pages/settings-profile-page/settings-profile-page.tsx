import { FC } from "react";
import { CityChangeForm } from "../../components/forms/city-change-form/city-change-form";
import { PasswordChangeForm } from "../../components/forms/password-change-form/password-change-form";
import { SettingsProfileTemplate } from "../../components/settings-profile/settings-profile-template";

const SettingProfilePage: FC = () => {
  return (
    <div>
      SETTINGS
      <SettingsProfileTemplate
        FormForChange={PasswordChangeForm}
        nameSetting="пароль"
      />
      <SettingsProfileTemplate
        FormForChange={CityChangeForm}
        nameSetting="город"
      />
    </div>
  );
};

export { SettingProfilePage };
