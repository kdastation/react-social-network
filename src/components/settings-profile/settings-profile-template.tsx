import { Button } from "@mui/material";
import { FC } from "react";
import { useMode } from "../../hooks/mode-hook";
import styles from "./settings-profile-template.module.scss";

export interface FormForChangeProps {
  deactivateEditMode: () => void;
  userName: string | null;
}

interface SettingsProfileTemplateProps {
  nameSetting: string;
  FormForChange: FC<FormForChangeProps>;
  userName: string | null;
}

const SettingsProfileTemplate: FC<SettingsProfileTemplateProps> = (props) => {
  const { FormForChange, nameSetting, userName } = props;
  const {
    activateMode: activateEditeMode,
    mode: editMode,
    deactivateMode: deactivateEditMode,
  } = useMode();

  return (
    <div>
      {!editMode && (
        <div className={styles.setting_wrapper}>
          <div className={styles.name_setting}>{nameSetting}</div>
          <Button onClick={activateEditeMode}>Изменить</Button>
        </div>
      )}
      {editMode && (
        <div>
          <div className={styles.btn_cancel_wrapper}>
            <Button onClick={deactivateEditMode}>Отменить</Button>
          </div>
          <FormForChange
            userName={userName}
            deactivateEditMode={deactivateEditMode}
          />
        </div>
      )}
    </div>
  );
};

export { SettingsProfileTemplate };
