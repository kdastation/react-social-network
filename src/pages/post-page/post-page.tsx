import { FC } from "react";
import { Post } from "../../components/posts/post/post";
import { DefaultPost } from "../../components/posts/default-post/default-post";
import { PostForPage } from "../../components/posts/post-for-page/post-for-page";
import { usePostPage } from "../../hooks/post-page-hook";
import { DeletePost } from "../../components/delete-post/delete-post";

const PostPage: FC = () => {
  const { error, idPost, isAuth, isLoading, isPostAuthor, dataPost } =
    usePostPage();
  console.log(dataPost, isLoading, error);
  return (
    <div>
      {!isLoading && dataPost && !isPostAuthor ? (
        <Post isAuth={isAuth} post={dataPost} Component={DefaultPost} />
      ) : null}
      {!isLoading && dataPost && isPostAuthor ? (
        <Post isAuth={isAuth} post={dataPost} Component={PostForPage} />
      ) : null}
      {!isLoading && dataPost && isAuth && isPostAuthor ? (
        <DeletePost post={dataPost} />
      ) : null}
    </div>
  );
};

export { PostPage };
