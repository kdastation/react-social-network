import { FC, memo } from "react";
import { renderPosts } from "../../services/components-service/render-components-service";
import { usePosts } from "../../hooks/posts-hook";

interface PostsProps {
  nameUser: string;
  isAuth: boolean;
}
//TODO: Доделать
const Posts: FC<PostsProps> = memo((props) => {
  const { nameUser, isAuth } = props;
  const {
    posts,
    changeFilter,
    isCanDownloadMore,
    loadMorePosts,
    isANeedFilter,
    isLoading,
  } = usePosts(nameUser);
  console.log("render");
  const postsBlock = renderPosts(posts, isAuth);

  return (
    <div>
      {postsBlock}
      {isCanDownloadMore && <button onClick={loadMorePosts}>Load More</button>}
      {isANeedFilter && <button onClick={changeFilter}>Изменить фильтр</button>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
});

//TODO: Придумать, как переделать
// {/* <List items={posts}
//             renderItem={renderPost}/> */}

export { Posts };
