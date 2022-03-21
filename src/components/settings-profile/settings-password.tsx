import { FC } from "react";
import { PasswordChangeForm } from "../forms/password-change-form/password-change-form";
import { useMode } from "../../hooks/mode-hook";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../selectors/auth-selector";

const SettingsPassword: FC = () => {
  const {
    activateMode: activateEditeMode,
    mode: editMode,
    deactivateMode: deactivateEditMode,
  } = useMode();
  const userName = useSelector(AuthSelector.getUserName);

  return (
    <div>
      {!editMode && (
        <div>
          Пароль
          <button onClick={activateEditeMode}>Редактировать</button>
        </div>
      )}
      {editMode && (
        <PasswordChangeForm
          deactivateEditMode={deactivateEditMode}
          userName={userName}
        />
      )}
    </div>
  );
};

export { SettingsPassword };
