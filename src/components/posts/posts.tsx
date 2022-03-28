import { FC, memo } from "react";
import { renderPosts } from "../../services/components-service/render-components-service";
import { usePosts } from "../../hooks/posts-hook";
import { DefaultLoader } from "../loaders/default-loader/default-loader";
import { PostsFilter } from "./posts-filter/posts-filter";
import { LoadMoreButton } from "../load-more-button/load-more-button";
import styles from "./posts.module.scss";

interface PostsProps {
  nameUser: string;
  isAuth: boolean;
  userAvatar?: string;
}
//TODO: Доделать
const Posts: FC<PostsProps> = memo((props) => {
  const { nameUser, isAuth, userAvatar } = props;
  const {
    changeFilter,
    loadMorePosts,
    posts,
    isCanDownloadMore,
    isANeedFilter,
    isLoading,
    totalCountPosts,
    filterStatus,
    isFetching,
  } = usePosts(nameUser);
  console.log("render");

  return (
    <div>
      {isANeedFilter && (
        <div className={styles.filter_wrapper}>
          <PostsFilter
            filterStatus={filterStatus}
            changeFilter={changeFilter}
          />
        </div>
      )}
      {totalCountPosts > 0 && renderPosts(posts, isAuth, userAvatar)}
      {isCanDownloadMore && (
        <div className={styles.btn_load_more_wrapper}>
          <LoadMoreButton isFetching={isFetching} loadMore={loadMorePosts} />
        </div>
      )}
      {isLoading && (
        <div className={styles.loader_wrapper}>
          <DefaultLoader />
        </div>
      )}
    </div>
  );
});

export { Posts };
