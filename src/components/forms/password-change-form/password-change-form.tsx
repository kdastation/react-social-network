import { FC } from "react";
import { CustomInput } from "../../custom-input/custom-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsChangePasswordForm } from "../../../validators/validators-change-password-form";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSubmitAndModal } from "../../../hooks/submit-and-modal-hook";
import { IUser } from "../../../models/user-models/user-model";
import { changePasswordUser } from "../../../services/api-service/user-api-service";
import { CustomModal } from "../../custom-modal/custom-modal";

interface PasswordChangeFormProps {
  deactivateEditMode: Function;
  userName: string | null;
}

export interface PasswordChangeFormFields {
  password: string;
  confirmPassword: string;
}

const PasswordChangeForm: FC<PasswordChangeFormProps> = (props) => {
  const { deactivateEditMode, userName } = props;
  const { submitData, message, isVisibleModal, defaultOnCloseModal } =
    useSubmitAndModal(
      async (data: PasswordChangeFormFields) => {
        await changePasswordSubmit(data);
      },
      "Пароль успешно изменен",
      "Произошла ошибка"
    );
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordChangeFormFields>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validatorsChangePasswordForm),
  });

  const changePasswordSubmit = async (data: PasswordChangeFormFields) => {
    const newUserData: IUser = {
      name: userName as string,
      password: data.password,
    };
    await changePasswordUser(newUserData);
  };

  const onCloseModal = () => {
    defaultOnCloseModal();
    deactivateEditMode();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <CustomInput
          name="password"
          control={control}
          type="password"
          label="новый пароль"
          Component={TextField}
        />
        <CustomInput
          name="confirmPassword"
          type="password"
          control={control}
          label="повторите пароль"
          Component={TextField}
        />
        <Button type="submit" disabled={isSubmitting}>
          Сохранить
        </Button>
        {isVisibleModal && (
          <CustomModal
            isVisibleModal={isVisibleModal}
            message={message}
            onCloseModal={onCloseModal}
          />
        )}
      </form>
    </div>
  );
};

export { PasswordChangeForm };
