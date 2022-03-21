import { FC } from "react";
import { CustomInput } from "../../custom-input/custom-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsChangePasswordForm } from "../../../validators/validators-change-password-form";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useChangePasswordAndModal } from "../../../hooks/change-password-and-modal-hook";

interface PasswordChangeFormProps {
  deactivateEditMode: Function;
  userName: string | null;
}

export interface PasswordChangeFormFields {
  password: string;
  confirmPassword: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PasswordChangeForm: FC<PasswordChangeFormProps> = (props) => {
  const { deactivateEditMode, userName } = props;
  const { messageOperation, closeModal, isModalVisible, changePasswordSumbit } =
    useChangePasswordAndModal(userName, deactivateEditMode);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordChangeFormFields>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validatorsChangePasswordForm),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(changePasswordSumbit)}>
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
        <Modal open={isModalVisible} onClose={closeModal}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {messageOperation}
            </Typography>
          </Box>
        </Modal>
      </form>
    </div>
  );
};

export { PasswordChangeForm };
