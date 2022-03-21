import { Box, Modal, Typography } from "@mui/material";
import { FC } from "react";

interface CustomModalProps {
  message: string | null;
  isVisibleModal: boolean;
  onCloseModal: () => void;
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

const CustomModal: FC<CustomModalProps> = (props) => {
  const { isVisibleModal, message, onCloseModal } = props;
  return (
    <div>
      <Modal open={isVisibleModal} onClose={onCloseModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export { CustomModal };
