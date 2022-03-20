import { Box, Button, Modal, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useDeletePost } from "../../../hooks/delete-post";
import { IPost } from "../../../models/post-model";

interface DeleletePostProps {
  post: IPost;
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

//TODO: Доделать
const DeletePost: FC<DeleletePostProps> = memo((props) => {
  const { post } = props;
  const { deletePostOnClick, isSubmiting, isModalVisible } =
    useDeletePost(post);
  return (
    <div>
      <Button disabled={isSubmiting} onClick={deletePostOnClick}>
        delete
      </Button>
      {
        <Modal open={isModalVisible}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              POST DELETE
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Ваш пост удален, скоро вы будете перенаправленны на свой
              профиль....
            </Typography>
          </Box>
        </Modal>
      }
    </div>
  );
});

export { DeletePost };
