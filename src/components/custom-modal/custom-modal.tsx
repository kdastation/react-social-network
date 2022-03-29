import { Modal, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./custom-modal.module.scss";

interface CustomModalProps {
  message: string | null;
  isVisibleModal: boolean;
  onCloseModal?: () => void;
}

const CustomModal: FC<CustomModalProps> = (props) => {
  const { isVisibleModal, message, onCloseModal } = props;
  return (
    <div>
      <Modal open={isVisibleModal} onClose={onCloseModal}>
        <div className={styles.wrapper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
        </div>
      </Modal>
    </div>
  );
};

export { CustomModal };
