import { FC } from "react";
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
    </div>
  );
};

export { SettingProfilePage };
