import { FC, useState } from "react";
import { IPost } from "../../../models/post-model";
import {
  FormUpdatePostField,
  FormUpdatePost,
} from "../../forms/form-update-post/form-update-post";
import { updatePost } from "../../../services/api-service/posts-api-service";

interface PostForPageProps {
  post: IPost;
  userAvatar?: string;
  visibleComments?: Function;
}

//TODO: Доделать

const PostForPage: FC<PostForPageProps> = (props) => {
  const { post } = props;
  const [content, setContent] = useState<string>(post.content);
  const [editMode, setEditMode] = useState<boolean>(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const updatePostOnClick = async (data: FormUpdatePostField) => {
    try {
      const changePost: IPost = {
        nameAuthor: post.nameAuthor,
        content: data.content,
        id: post.id,
      };
      await updatePost(changePost);
      setContent(data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode(false);
    }
  };
  return (
    <div>
      POST FOR PAGE
      {!editMode ? (
        <div>
          <div>{content}</div>
          <button onClick={activateEditMode}>Редактировать</button>
        </div>
      ) : (
        <FormUpdatePost
          contentPost={post.content}
          updatePostOnClick={updatePostOnClick}
        />
      )}
    </div>
  );
};

export { PostForPage };
