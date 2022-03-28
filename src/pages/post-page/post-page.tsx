import { FC } from "react";
import { DefaultLoader } from "../../components/loaders/default-loader/default-loader";
import { PostForPage } from "../../components/posts/post-for-page/post-for-page";
import { usePostPage } from "../../hooks/post-page-hook";
import styles from "./post-page.module.scss";

const PostPage: FC = () => {
  const { error, idPost, isAuth, isLoading, isPostAuthor, dataPost } =
    usePostPage();

  return (
    <div>
      {isLoading && (
        <div className={styles.loader_wrapper}>
          <DefaultLoader />
        </div>
      )}
      {!error && !isLoading && (
        <div>
          <div className={styles.title}>Страница поста номер {idPost}</div>
          {dataPost && (
            <PostForPage isPostAuthor={isPostAuthor} post={dataPost} />
          )}
        </div>
      )}
      {error && <div className={styles.error_wrapper}>Пост не найден...</div>}
    </div>
  );
};

export { PostPage };
