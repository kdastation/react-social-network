import { Button } from "@mui/material";
import { FC, memo } from "react";
import { useDeletePost } from "../../hooks/delete-post";
import { IPost } from "../../models/post-model";
import { CustomModal } from "../custom-modal/custom-modal";

interface DeleletePostProps {
  post: IPost;
}

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
      {isModalVisible && (
        <CustomModal
          message="Ваш пост удален, скоро вы будете перенаправлены на свой профиль..."
          isVisibleModal={isModalVisible}
        />
      )}
    </div>
  );
});

export { DeletePost };
