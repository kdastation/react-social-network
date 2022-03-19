import { Box, Button, Modal, Typography } from "@mui/material";
import { FC, useState } from "react";
import { deletePost } from "../../services/api-service/posts-api-service";
import { IPost } from "../../models/post-model";
import { useHistory } from "react-router-dom";

interface PostChangesProps {
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
const PostChanges: FC<PostChangesProps> = (props) => {
  const { post } = props;
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [isModalVisible, setsModalVisible] = useState(false);
  const history = useHistory();
  console.log(history);
  const deletePostOnClick = async () => {
    setIsSubmiting(true);
    try {
      await deletePost(post.id);
      setsModalVisible(true);
      setTimeout(() => history.push(`/profile/${post.nameAuthor}`), 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmiting(false);
    }
  };

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
};
export { PostChanges };
