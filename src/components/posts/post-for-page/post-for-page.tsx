import { FC, useState } from "react";
import { IPost } from "../../../models/post-model";
import {
  FormUpdatePostField,
  FormUpdatePost,
} from "../../forms/form-update-post/form-update-post";
import { updatePost } from "../../../services/api-service/posts-api-service";
import { LayoutPostForPage } from "../layout-post/layout-post-for-page/layout-post-for-page";
import { useMode } from "../../../hooks/mode-hook";

interface PostForPageProps {
  post: IPost;
  isPostAuthor: boolean;
  userAvatar?: string;
  visibleComments?: Function;
}

//TODO: Доделать

const PostForPage: FC<PostForPageProps> = (props) => {
  const { post, isPostAuthor } = props;
  const [content, setContent] = useState<string>(post.content);
  const {
    activateMode: activateEditMode,
    deactivateMode: deactivateEditMode,
    mode: isEditMode,
  } = useMode();

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
      deactivateEditMode();
    }
  };
  return (
    <div>
      {!isEditMode ? (
        <div>
          <LayoutPostForPage
            content={content}
            activateEditMode={activateEditMode}
            isPostAuthor={isPostAuthor}
            post={post}
          />
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
