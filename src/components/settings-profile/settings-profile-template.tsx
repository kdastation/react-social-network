import { FC } from "react";
import { useSelector } from "react-redux";
import { useMode } from "../../hooks/mode-hook";
import { AuthSelector } from "../../selectors/auth-selector";

export interface FormForChangeProps {
  deactivateEditMode: () => void;
  userName: string | null;
}

interface SettingsProfileTemplateProps {
  nameSetting: string;
  FormForChange: FC<FormForChangeProps>;
}

const SettingsProfileTemplate: FC<SettingsProfileTemplateProps> = (props) => {
  const { FormForChange, nameSetting } = props;
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
          {nameSetting}
          <button onClick={activateEditeMode}>Редактировать</button>
        </div>
      )}
      {editMode && (
        <FormForChange
          userName={userName}
          deactivateEditMode={deactivateEditMode}
        />
      )}
    </div>
  );
};

export { SettingsProfileTemplate };
