import { FC, memo } from "react";
import { useVisible } from "../../../hooks/visible-hook";
import { IPost } from "../../../models/post-model";
import { CommentsPost } from "../../comments-post/comments-post";
import { DefaultPost } from "../layout-post/layout-default-post/layout-default-post";
import styles from "./post.module.scss";

interface PostProps {
  post: IPost;
  isAuth: boolean;
  userAvatar?: string;
}

//TODO: Оптимизировать доделать
const Post: FC<PostProps> = memo((props) => {
  const { post, isAuth, userAvatar } = props;
  const commentsState = useVisible(false);
  const comments = commentsState.isVisible ? (
    <CommentsPost isAuth={isAuth} idPost={post.id} />
  ) : null;

  return (
    <div>
      <div className={styles.post_wrapper}>
        <DefaultPost
          visibleComments={commentsState.toogleVisible}
          userAvatar={userAvatar}
          post={post}
        />
      </div>
      <div className={styles.comments_wrapper}>{comments}</div>
    </div>
  );
});

export { Post };
