import { FC, memo } from "react";
import { useVisible } from "../../../hooks/visible-hook";
import { IPost } from "../../../models/post-model";
import { CommentsPost } from "../../comments-post/comments-post";
import { DefaultPost } from "../default-post/default-post";
import { PostForPage } from "../post-for-page/post-for-page";

interface PostProps {
  post: IPost;
  isAuth: boolean;
  Component: typeof DefaultPost | typeof PostForPage;
}

//TODO: Оптимизировать доделать
const Post: FC<PostProps> = memo((props) => {
  const { post, isAuth, Component } = props;
  const commentsState = useVisible(false);
  const comments = commentsState.isVisible ? (
    <CommentsPost isAuth={isAuth} idPost={post.id} />
  ) : null;
  return (
    <div>
      <Component post={post} />
      {comments}
      <button onClick={commentsState.toogleVisible}>Посмотреть отзывы</button>
    </div>
  );
});

export { Post };
