import { IPost } from "./../models/post-model";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../services/api-service/posts-api-service";

export const useDeletePost = (post: IPost) => {
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [isModalVisible, setsModalVisible] = useState<boolean>(false);
  const history = useHistory();
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

  return {
    isSubmiting,
    isModalVisible,
    deletePostOnClick,
  };
};
