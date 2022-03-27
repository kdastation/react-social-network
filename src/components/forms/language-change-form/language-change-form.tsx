import { FC } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useSubmitAndModal } from "../../../hooks/submit-and-modal-hook";
import { FormForChangeProps } from "../../settings-profile/settings-profile-template";
import {
  changeLanguageUser,
  DataForChangeLanguageUser,
} from "../../../services/api-service/user-api-servise/change-language-user";
import { CustomModal } from "../../custom-modal/custom-modal";

interface LanguageChangeFormFields {
  languages: string[];
}

//TODO: Доделать

const LanguageChangeForm: FC<FormForChangeProps> = (props) => {
  const { userName, deactivateEditMode } = props;
  const { control, handleSubmit } = useForm<LanguageChangeFormFields>({
    mode: "onChange",
  });

  const {
    defaultOnCloseModal,
    isVisibleModal,
    message,
    submitData: upgradeChangeLanguagesSumbit,
  } = useSubmitAndModal<LanguageChangeFormFields>(
    async (data: LanguageChangeFormFields) => {
      await changeLanguagesSumbit(data);
    },
    "Языки успешно изменены!",
    "Произошла ошибка..."
  );

  const changeLanguagesSumbit = async (data: LanguageChangeFormFields) => {
    const updateDataUser: DataForChangeLanguageUser = {
      userName: userName as string,
      languages: data.languages,
    };
    await changeLanguageUser(updateDataUser);
  };

  const onCloseModal = () => {
    defaultOnCloseModal();
    deactivateEditMode();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(upgradeChangeLanguagesSumbit)}>
        <Controller
          name="languages"
          control={control}
          rules={{
            required: "Поле обязательно к заполнению",
          }}
          render={({ field, fieldState }) => {
            return (
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <Select
                  error={!!fieldState.error}
                  {...field}
                  value={field.value || []}
                  multiple={true}
                >
                  <MenuItem value={"Украинский"}>Украинский</MenuItem>
                  <MenuItem value={"English"}>English</MenuItem>
                </Select>
                {fieldState.error?.message && (
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                )}
              </FormControl>
            );
          }}
        />
        <Button type="submit">Отправить</Button>
      </form>
      {isVisibleModal && (
        <CustomModal
          isVisibleModal={isVisibleModal}
          message={message}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};

export { LanguageChangeForm };
