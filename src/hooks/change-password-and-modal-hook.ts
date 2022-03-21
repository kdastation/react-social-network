import { PasswordChangeFormFields } from "../components/forms/password-change-form/password-change-form";
import { IUser } from "../models/user-models/user-model";
import { changePasswordUser } from "../services/api-service/user-api-service";
import { useEditMode as useModal } from "./edit-mode-hook";
import { useState } from "react";

export const useChangePasswordAndModal = (
  nameUserFormRequest: string | null,
  deactivateEditMode: Function
) => {
  const [messageOperation, setMessageOperation] = useState<string | null>(null);
  const { editMode: isModalVisible, activateEditeMode: openModal } = useModal();

  const changePasswordSumbit = async (data: PasswordChangeFormFields) => {
    const newUserData: IUser = {
      name: nameUserFormRequest as string,
      password: data.password,
    };
    try {
      await changePasswordUser(newUserData);
      setMessageOperation(`${nameUserFormRequest} пароль обновлен!`);
      openModal();
    } catch (error: any) {
      setMessageOperation(
        `${nameUserFormRequest} произошла ошибка ${error?.message}`
      );
      openModal();
    }
  };

  const closeModal = () => {
    deactivateEditMode();
  };

  return {
    messageOperation,
    isModalVisible,
    changePasswordSumbit,
    closeModal,
  };
};
